import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faHome, faBars, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import path from '~/constants/path';
import { clearLS } from '~/utils/auth';

const SidebarTournaments = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768); // Default based on screen width
    const navigate = useNavigate();

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle logout
    const handleLogout = () => {
        clearLS();
        navigate(`${path.login}`);
    };

    // Function to handle window resize
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Set initial state based on screen width
        handleResize();
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={`flex flex-col min-h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`} style={{ backgroundImage: 'linear-gradient(96deg, rgba(6, 11, 38, 0.94) 60.3%, #0c2666 100%)' }}>
            <nav className="flex flex-col space-y-10 p-4 h-full" style={{ backgroundImage: "radial-gradient(100% 100% at -7% 50%, rgba(12, 83, 255, 0.12) 7.25%, rgba(255, 255, 255, 0.00) 100%)" }}>
                <div className="flex justify-end">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} onClick={toggleSidebar} className="text-white cursor-pointer" />
                </div>
                <Link to={path.home} className="text-gray-200 flex items-center font-sora text-sm">
                    <FontAwesomeIcon icon={faHome} className="mr-4 p-3 bg-[#1A1F37] rounded-xl" />
                    {isOpen && 'Trang chủ'}
                </Link>
                <Link to={path.manageTournaments} className="text-gray-200 flex items-center font-sora text-sm">
                    <FontAwesomeIcon icon={faTrophy} className="mr-4 p-3 bg-[#1A1F37] rounded-xl" />
                    {isOpen && 'Quản lý giải đấu'}
                </Link>
                <button
                    onClick={handleLogout}
                    className="text-gray-200 flex items-center font-sora text-sm mt-auto"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-4 p-3 bg-[#1A1F37] rounded-xl" />
                    {isOpen && 'Đăng xuất'}
                </button>
            </nav>
        </div>
    );
};

export default SidebarTournaments;
