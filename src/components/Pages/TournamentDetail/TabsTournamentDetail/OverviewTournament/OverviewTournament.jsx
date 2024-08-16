import React from "react";
import bgRank1 from "../../../../../assets/images/TournamentDetail/bgRank1.svg";
import bgRank2 from "../../../../../assets/images/TournamentDetail/bgRank2.svg";
import bgRank3 from "../../../../../assets/images/TournamentDetail/bgRank3.svg";
import avatar from "../../../../../assets/images/TournamentDetail/avt.svg";
import { formatDate, formatPrice } from "../../../../../utils/utils";


export const OverviewTournament = (props) => {
  const {tournament, historyUser} = props
  return (
    <div className="mx-3">
      {/* <div className="flex justify-end">
        <div className="col-span-2">
          <Button className="skew-x-0 sm:text-base text-xs px-2 py-4">Tham gia ngay</Button>
        </div>
      </div> */}
      <div className="grid grid-cols-1 xl:grid-cols-10 md:mt-14 pt-1 gap-10">
        <div className="col-span-1 md:col-span-4">
          <img className="w-full rounded-lg" src={tournament.image} alt="" />
          <div className="font-sora text-[#FFF] text-2xl font-normal mt-7">
          {tournament.status === 2 ? 'Chưa bắt đầu' :
             tournament.status === 0 ? 'Đã hoàn thành' :
             tournament.status === 1 ? 'Đang diễn ra' :
             'Không xác định'}
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
          <div className="mt-10">
            <table className="w-full md:min-w-full  max-w-full">
              <thead className="relative">
              <tr
                style={{
                  background:
                    "linear-gradient(180deg, #4A40FF 0%, #070080 104.71%)",
                }}
              >
                <th className="relative border rounded-none border-[#4B4885] z-10 py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base font-medium text-white font-sora text-left tracking-wider">
                  Mục lục
                </th>
                <th className="relative border rounded-none border-[#4B4885] z-10 py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base font-medium text-white font-sora text-left tracking-wider">
                  Chi tiết
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-800">
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Tên giải đấu
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {tournament.name}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Số lượng
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                {tournament.type_number_players}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Địa chỉ
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {tournament.address}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Thời gian bắt đầu
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {formatDate(tournament.start_at)}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Thời gian kết thúc
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                {formatDate(tournament.end_at)}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Thể loại
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {tournament.game_style}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Tổng giải thưởng
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {formatPrice(tournament.bonus)}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Lệ phí tham gia
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {formatPrice(tournament.fees)}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Thể thức phá
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {tournament.break_mode}
                </td>
              </tr>
              <tr>
              <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                Số người
              </td>
              <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                {tournament.player_format === 0 ? 'Đánh đơn': 'Đánh đôi'}
              </td>
            </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Số mạng
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  {tournament.life}
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Số điểm chạm
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
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
                </td>
              </tr>
              <tr>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                  Trạng thái
                </td>
                <td className="border rounded-none border-[#4B4885] py-4 px-5 sm:px-10 text-xs sm:text-sm md:text-base text-white font-sora text-left">
                {tournament.status === 2 ? 'Chưa bắt đầu' :
                  tournament.status === 0 ? 'Đã hoàn thành' :
                  tournament.status === 1 ? 'Đang diễn ra' : ''}
                </td>
              </tr>
            
            </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6">
          <div className=" flex-col md:flex-row justify-around hidden lg:flex">
            <div className="relative h-max">
                <img className="relative z-20" src={bgRank2} alt="" />
                <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                src={avatar}
                alt=""
                />
            </div>
            <div className="relative h-max mt-5 md:mt-0">
                <img className="relative z-20" src={bgRank1} alt="" />
                <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                src={avatar}
                alt=""
                />
            </div>
            <div className="relative h-max mt-5 md:mt-0">
                <img className="relative z-20" src={bgRank3} alt="" />
                <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                src={avatar}
                alt=""
                />
            </div>
          </div>
          <div className="mt-12">
            <table className="w-full md:min-w-full">
              <thead className="relative">
                <tr
                  style={{
                    background:
                      "linear-gradient(180deg, #4A40FF 0%, #070080 104.71%)",
                  }}
                >
                  <th className="relative border rounded-none border-[#4B4885] z-10py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider">
                    STT
                  </th>
                  <th className="relative border rounded-none border-[#4B4885] z-10 py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider w-1/4">
                    Người chơi
                  </th>
                  <th className="relative border rounded-none border-[#4B4885] z-10 py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider">
                    Trình độ
                  </th>
                  <th className="relative border rounded-none border-[#4B4885] z-10 py-4 sm:text-base text-xs font-medium text-white font-sora text-center tracking-wider">
                    Lịch sử đấu
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-800">
                {
                  historyUser.map((items, index)=>{
                    return (
                      <tr key={index}>
                        <td className="border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          {index + 1}
                        </td>
                        <td className="border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          {items.user.name}
                        </td>
                        <td className="border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          Hạng {items.user.attributes.rank}
                        </td>
                        <td className=" border rounded-none border-[#4B4885] py-4 sm:text-base text-xs text-white font-sora text-center">
                          <div className="flex gap-2 md:gap-4 items-center justify-center">
                              {items.history.trim() ? (
                                items.history.split(' ').map((char, charIndex) => (
                                  <div
                                    key={charIndex}
                                    className={`sm:text-base text-xs text-white font-sora text-center ${char === 'W' ? 'bg-gradient-to-b from-[#254BFF] to-[#080580] px-2 py-1 rounded-full' : 'bg-gradient-to-b from-[#C00] to-[#92000B] px-3 py-1 rounded-full'}`}
                                  >
                                    {char}
                                  </div>
                                ))
                              ) : (
                                <div className="sm:text-base text-xs text-white font-sora text-center">
                                  Chưa thi đấu
                                </div>
                              )}
                            </div>
                        </td>
                      </tr>
                    )
                  })
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTournament;

