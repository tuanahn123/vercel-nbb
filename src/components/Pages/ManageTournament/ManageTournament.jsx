import React, { useEffect, useState } from 'react';
import SidebarTournaments from "./Sidebar/SidebarTournaments";
import bgManage from '../../../assets/images/Tournaments/bg-manage.svg';
import iconEdit from '../../../assets/images/Tournaments/iconEdit.svg';
import iconEye from '../../../assets/images/Tournaments/iconEye.svg';
import tournamentApi from '../../../api/tournamentApi';
import { Link, useNavigate } from 'react-router-dom';
import path from '../../../constants/path';
import { formatDate, generateNameId } from '../../../utils/utils';
import Error from '../Error/Error';
import Loading from '../../Loading/Loading';

function ManageTournaments() {
  const navigate = useNavigate();
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await tournamentApi.getAllTournamentByCLubs();
        setTournaments(response.data.metadata);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
      finally{
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const addTournament = () => {
    navigate('/create-tournament');
  };

  const editTournament = (id) => {
    navigate(`${path.editTournament.replace(':id', id)}`);
  };

  if (loading) return <Loading />;
    if (error) return <Error />;

  return (
    <div className="flex bg-[#081028] min-h-screen">
      <SidebarTournaments />
      <div
        className={`flex-1 mx-auto md:px-5 pt-10 overflow-auto`}
        style={{
          backgroundImage: `url(${bgManage})`
        }}
      >
        <div className="sm:p-6 p-4 rounded-2xl bg-gradient-to-r from-[#060b28bd] to-[#0a0e23b5]">
          <div className="flex justify-between mb-8 items-center">
            <h2 className="lg:text-2xl font-bold text-sm sm:text-base md:text-lg">
              Quản lý giải đấu
            </h2>
            <button
              className="-skew-x-12 px-4 py-2 rounded-lg bg-btn lg:px-5 lg:py-3 text-xs font-sora font-bold sm:text-base md:text-lg"
              onClick={addTournament}
            >
              Thêm giải đấu
            </button>
          </div>
          {tournaments.length === 0 ? (
            <div className="text-center text-white text-lg">Chưa có giải đấu nào</div>
          ) : (
            <div className='scrollableTable'>
              <table className="mb-2 sm:text-sm xs:text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      STT
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Tên
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Số lượng
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Bắt đầu
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Kết thúc
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Địa điểm
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Trạng thái
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Công khai
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tournaments.map((tournament, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-6 py-5 text-sm md:text-base">{index + 1}</td>
                      <td className="px-6 py-5 text-sm md:text-base">{tournament.name}</td>
                      <td className="px-6 py-5 text-sm md:text-base">{tournament.type_number_players}</td>
                      <td className="px-6 py-5 text-sm md:text-base">{formatDate(tournament.start_at)}</td>
                      <td className="px-6 py-5 text-sm md:text-base">{formatDate(tournament.end_at)}</td>
                      <td className="px-6 py-5 text-sm md:text-base">{tournament.address}</td>
                      <td className="px-6 py-5 text-sm md:text-base">
                        {tournament.status === 2 ? 'Chưa bắt đầu' :
                          tournament.status === 0 ? 'Đã hoàn thành' :
                          tournament.status === 1 ? 'Đang diễn ra' :
                          'Không xác định'}
                      </td>
                      <td className="px-6 py-5 text-sm md:text-base">
                        {tournament.is_public === 1 ? 'Công khai' :
                          tournament.is_public === 0 ? 'Bí mật' : ''}
                      </td>
                      <td className="px-6 py-5 text-sm md:text-base flex items-center justify-center">
                        <Link
                          to={`${path.manageTournaments}/${generateNameId({ name: tournament.name, id: tournament._id })}`}
                          className="mr-2"
                          title="Thông tin giải đấu"
                        >
                          <img className="w-4" src={iconEye} alt="Detail" />
                        </Link>
                        <button
                          className="mr-2"
                          title="Sửa thông tin giải đấu"
                          onClick={() => editTournament(tournament._id)}
                        >
                          <img className="w-4" src={iconEdit} alt="Edit" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageTournaments;
