import React, { useEffect, useState } from "react";
import { formatDate, formatPrice } from "../../../../utils/utils";
import tournamentApi from "../../../../api/tournamentApi";
import Alert from "../../../Alert/Alert";

function TournamentInformation(props) {
  const { tournament: initialTournament, onPlayersChange } = props;
  const [tournament, setTournament] = useState(initialTournament);
  const [alertVisiblePublish, setAlertVisiblePublish] = useState(false);
  const [successAlertPublish, setSuccessAlertPublish] = useState(false);
  const [alertStartTournament, setAlertStartTournament] = useState(false);
  const [alertAddBot, setAlertAddBot] = useState(false);

  const showAlertPublish = () => {
    setAlertVisiblePublish(true);
  };

  const handleConfirmPublish = async () => {
    try {
      let response;
      if (tournament.is_public === 1) {
        response = await tournamentApi.unPublishTournamentByClub(tournament._id);
      } else if (tournament.is_public === 0) {
        response = await tournamentApi.publishTournamentByClub(tournament._id);
      }
      const updatedTournament = response.data.metadata;
      setTournament(updatedTournament);
      setSuccessAlertPublish(true); // Show success alert after publishing
    } catch (error) {
      console.error("Failed to update tournament status", error);
    }
    setAlertVisiblePublish(false);
  };

  const handleCancelPublish = () => {
    setAlertVisiblePublish(false);
  };

  const handleStartTournament = async () => {
    try {
      const response = await tournamentApi.checkEnoughPlayer(tournament._id);
      const { metadata } = response.data;
      
      if (!metadata) {
        setAlertAddBot(true); // Show alert to add bot
      } else {
        setAlertStartTournament(true); // Show alert to start tournament
      }
    } catch (error) {
      console.error('Error starting tournament:', error);
    }
  };

  const handleConfirmStartTournament = async () => {
    try {
      await tournamentApi.startTournamentByClub(tournament._id);
      if (onPlayersChange) await onPlayersChange();
      setTournament(prevTournament => ({
        ...prevTournament,
        status: 1,
      }));
    } catch (error) {
      console.error('Error starting tournament:', error);
    }
    setAlertStartTournament(false);
  };
  

  const handleConfirmAddBot = async () => {
    try {
    await tournamentApi.startTournamentByClub(tournament._id);
    
     if (onPlayersChange) await onPlayersChange();
     setTournament(prevTournament => ({
      ...prevTournament,
      status: 1,
  }));
    } catch (error) {
      console.error('Error starting tournament:', error);
    }
    setAlertAddBot(false);
  };


  return (
    <div className="">
      <div className="sm:flex justify-between flex-row items-center">
        <div className="sm:w-2/5 w-full">
          <div className="font-sora text-[#FFF] md:text-2xl text-lg font-normal mt-7">
            {tournament.status === 2 ? 'Chưa bắt đầu' :
              tournament.status === 0 ? 'Đã hoàn thành' :
                tournament.status === 1 ? 'Đang diễn ra' :
                  ''}
          </div>
          <div className="mt-2 flex items-center justify-between w-2/3">
            <span className="font-sora font-medium text-3xl text-[#FFC107]">
              {tournament.match_count}/{tournament.total_match_count}
            </span>
            <span className="text-[#E011FF] text-xl font-sora">{Math.round((tournament.match_count / tournament.total_match_count) * 100)}%</span>
          </div>
          <div className="mt-2">
            <div className="w-2/3 rounded-[10.5px] bg-[#1A35CE] h-[10px]">
            <div
              className="h-[10px] rounded-[10.5px]"
              style={{
                width: `${Math.round((tournament.match_count / tournament.total_match_count) * 100)}%`,
                background: "linear-gradient(90deg, #513DFF -2.97%, #E011FF 106.52%)",
              }}
            ></div>

            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="text-sm md:text-base font-sora font-semibold -skew-x-12 px-4 py-3 rounded-lg bg-btn me-5" onClick={showAlertPublish}>
            {
              tournament.is_public === 1 ? 'Bí mật' :
                tournament.is_public === 0 ? 'Công khai' : ''}
          </button>
          <button
            className={`text-sm md:text-base font-sora font-semibold -skew-x-12 px-4 py-3 rounded-lg bg-btn ${
              tournament.status === 2
                ? 'text-white cursor-pointer'
                : 'cursor-not-allowed'
              }`}
            onClick={() => {
              if (tournament.status === 2) {
                handleStartTournament(); // Hàm xử lý bắt đầu giải đấu
              }
            }}
            disabled={tournament.status !== 2}
          >
            {tournament.status === 2 ? 'Bắt đầu' :
              tournament.status === 0 ? 'Đã hoàn thành' :
                tournament.status === 1 ? 'Đang diễn ra' :
                  ''}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <table className="w-full md:min-w-full">
          <thead className="relative">
            <tr
              style={{
                background:
                  "linear-gradient(180deg, #4A40FF 0%, #070080 104.71%)",
              }}
            >
              <th className="relative border rounded-none border-[#4B4885] z-10 px-6 py-4 font-sora text-start text-[#D6D6E4] text-lg">
                Tổng quan
              </th>
              <th className="relative border rounded-none border-[#4B4885] z-10 px-6 py-4 font-sora text-start text-[#D6D6E4] text-lg">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Tên giải đấu
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {tournament.name}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Số lượng
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
               {tournament.type_number_players}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Địa chỉ
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {tournament.address}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Thời gian bắt đầu
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {formatDate(tournament.start_at)}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Thời gian kết thúc
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
              {formatDate(tournament.end_at)}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Thể loại
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {tournament.game_style}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Tổng giải thưởng
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {formatPrice(tournament.bonus)}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Lệ phí tham gia
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {formatPrice(tournament.fees)}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Thể thức phá
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {tournament.break_mode}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Số người
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {tournament.player_format === 0? 'Đánh đơn': 'Đánh đôi'}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Số mạng
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                {tournament.life}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Số điểm chạm
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                <div className="">
                    <div>
                      Vòng bảng -{tournament.race_to_win.stage}
                    </div>
                    <div>
                      Vòng loại - {tournament.race_to_win.knockout}
                    </div>
                    <div>
                      Vòng tứ kết - {tournament.race_to_win.quater}
                    </div>
                    <div>
                      Vòng bán kết - {tournament.race_to_win.semi}
                    </div>
                    <div>
                      Vòng chung kết - {tournament.race_to_win.final}
                    </div>
                </div>
                {/* {tournament.race_to_win} */}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Công khai
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
              {
                tournament.is_public === 1 ? 'Công khai' :
                tournament.is_public === 0 ? 'Bí mật' : ''}
              </td>
            </tr>
            <tr>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
                Trạng thái
              </td>
              <td className="border rounded-none border-[#4B4885] px-6 py-4 text-white font-sora text-left">
              {tournament.status === 2 ? 'Chưa bắt đầu' :
             tournament.status === 0 ? 'Đã hoàn thành' :
             tournament.status === 1 ? 'Đang diễn ra' :
             'Không xác định'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Alert
        show={alertVisiblePublish}
        title="Thông báo"
        text={`Bạn có chắc chắn muốn ${tournament.is_public === 1 ? "bí mật" : "công khai"} giải đấu này không?`}
        onConfirm={handleConfirmPublish}
        onCancel={handleCancelPublish}
        showButtonConfirm={true}
        showCancelButton={true}
        type="question"
      />
      <Alert
        show={successAlertPublish}
        title="Chúc mừng"
        text={`Bạn đã ${tournament.is_public === 1 ? "công khai" : "bí mật"} giải đấu thành công!`}
        onConfirm={() => setSuccessAlertPublish(false)}
        showButtonConfirm={true}
        showCancelButton={false}
        type="success"
      />

      {/* Alert for starting tournament with sufficient players */}
      <Alert
        show={alertStartTournament}
        title="Xác nhận"
        text="Số lượng người chơi đủ để bắt đầu giải đấu. Bạn có muốn bắt đầu giải đấu không?"
        onConfirm={handleConfirmStartTournament}
        onCancel={() => setAlertStartTournament(false)}
        showButtonConfirm={true}
        showCancelButton={true}
        type="question"
      />

      {/* Alert for adding bots when players are insufficient */}
      <Alert
        show={alertAddBot}
        title="Thông báo"
        text="Số lượng người chơi không đủ để bắt đầu giải đấu. Bạn có muốn thêm bot không?"
        onConfirm={handleConfirmAddBot}
        onCancel={() => setAlertAddBot(false)}
        showButtonConfirm={true}
        showCancelButton={true}
        type="question"
      />
    </div>
  );
}

export default TournamentInformation;
