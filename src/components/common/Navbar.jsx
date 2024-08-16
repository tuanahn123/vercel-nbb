import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu button
import logo from '../../assets/images/Header/logo.svg';
import cart from '../../assets/images/Header/cart.svg';
import loginBG from '../../assets/images/Btn/bg-login.svg';
import path from '../../constants/path';
import '../../assets/styles/Navbar/Navbar.scss';
import '../../assets/styles/Btn/Btn.scss';
import { getProfileFromLS, clearLS } from '../../utils/auth';
import Alert from '../Alert/Alert';
import Loading from '../Loading/Loading';

const images = { logo, cart, loginBG };

export default function Navbar() {
  const profile = getProfileFromLS();
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getLinkClass = (path) => (location.pathname === path ? 'text-white' : 'text-gray-500');
  const getUnderlineClass = (path) => (location.pathname === path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100');

  const handleLogout = () => {
    setLoading(true); // Bắt đầu loading
    clearLS();
    navigate(path.login);
    setLoading(false); // Kết thúc loading
  };

  const handleConfirmLogout = () => {    
    handleLogout();
    setShowLogoutAlert(false);
  };

  const handleCancelLogout = () => setShowLogoutAlert(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  if(loading) return <Loading />;
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between bg-[rgba(5,5,24,0.72)] font-sora py-3 px-4 lg:px-8">
        <Link to={path.home}>
          <img src={images.logo} alt="Logo" className="h-10 md:h-12" />
        </Link>
        <div className="flex items-center lg:hidden z-50">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <div className="relative px-2 group xl:mr-8">
            <Link to={path.home} className={`f-s-20 font-sora font-medium ${getLinkClass(`${path.home}`)}`}>
              Trang chủ
            </Link>
            <div
              className={`absolute bottom-[-15px] left-0 right-0 h-1 bg-gradient-border transition-opacity duration-300 ease-in-out ${getUnderlineClass(
                `${path.home}`
              )}`}
            ></div>
          </div>
          <div className="relative px-2 group xl:mr-8">
            <Link to={path.aboutPage} className={`f-s-20 font-sora font-medium ${getLinkClass(`${path.aboutPage}`)}`}>
              Giới thiệu
            </Link>
            <div
              className={`absolute bottom-[-15px] left-0 right-0 h-1 bg-gradient-border transition-opacity duration-300 ease-in-out ${getUnderlineClass(
                `${path.aboutPage}`
              )}`}
            ></div>
          </div>
          <div className="relative px-2 group xl:mr-8">
            <Link to={path.tournaments} className={`f-s-20 font-sora font-medium ${getLinkClass(`${path.tournaments}`)}`}>
              Danh sách giải đấu
            </Link>
            <div
              className={`absolute bottom-[-15px] left-0 right-0 h-1 bg-gradient-border transition-opacity duration-300 ease-in-out ${getUnderlineClass(
                `${path.tournaments}`
              )}`}
            ></div>
          </div>
          {profile && profile.type === 'club' && (
            <div className="relative px-2 group mr-8">
              <Link to={path.manageTournaments} className={`f-s-20 font-sora font-medium ${getLinkClass(`${path.manageTournaments}`)}`}>
                Quản lý giải đấu
              </Link>
              <div
                className={`absolute bottom-[-15px] left-0 right-0 h-1 bg-gradient-border transition-opacity duration-300 ease-in-out ${getUnderlineClass(
                  `${path.manageTournaments}`
                )}`}
              ></div>
            </div>
          )}
          <div className="flex button-container">
            {profile ? (
              <button
                className="-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-5 lg:py-3 text-base font-sora font-bold"
                onClick={() => setShowLogoutAlert(true)}
              >
                <span className="relative z-10">Đăng xuất</span>
              </button>
            ) : (
              <Link
                to={path.login}
                className="-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-5 lg:py-3 text-base font-sora font-bold"
              >
                <span className="relative z-10">Đăng nhập</span>
              </Link>
            )}
          </div>
        </div>

        <Alert
          show={showLogoutAlert}
          title="Xác nhận đăng xuất"
          text="Bạn có chắc chắn muốn đăng xuất?"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
          showButtonConfirm={true}
          showCancelButton={true}
          type="question"
        />
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-75 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-center justify-start mt-14 min-h-screen ">
          <Link
            to={path.home}
            className={`f-s-20 font-sora font-medium mb-4 ${getLinkClass(`${path.home}`)}`}
            onClick={toggleMenu}
          >
            Trang chủ
          </Link>
          <Link
            to={path.aboutPage}
            className={`f-s-20 font-sora font-medium mb-4 ${getLinkClass(`${path.aboutPage}`)}`}
            onClick={toggleMenu}
          >
            Giới thiệu
          </Link>
          <Link
            to={path.tournaments}
            className={`f-s-20 font-sora font-medium mb-4 ${getLinkClass(`${path.tournaments}`)}`}
            onClick={toggleMenu}
          >
            Danh sách giải đấu
          </Link>
          {profile && profile.type === 'club' && (
            <Link
              to={path.manageTournaments}
              className={`f-s-20 font-sora font-medium mb-4 ${getLinkClass(`${path.manageTournaments}`)}`}
              onClick={toggleMenu}
            >
              Quản lý giải đấu
            </Link>
          )}
          <div className="flex justify-center mt-8">
            {profile ? (
              <button
                className="-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-5 lg:py-3 text-base font-sora font-bold"
                onClick={() => {
                  setShowLogoutAlert(true);
                  toggleMenu();
                }}
              >
                <span className="relative z-10">Đăng xuất</span>
              </button>
            ) : (
              <Link
                to={path.login}
                className="-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-5 lg:py-3 text-base font-sora font-bold"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Đăng nhập</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
