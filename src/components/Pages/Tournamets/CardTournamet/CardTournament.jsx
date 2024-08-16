import { useNavigate } from "react-router-dom";
import imgTournament from "@assets/images/Tournaments/imgTournament.svg";
import iconDate from "@assets/images/Tournaments/iconDate.svg";
import iconLocation from "@assets/images/Tournaments/iconLocation.svg";
import iconPeopleGroup from "@assets/images/Tournaments/iconPeopleGroup.svg";
import iconCompetion from "@assets/images/Tournaments/iconCompetion.svg";
import iconComplete from "@assets/images/Tournaments/iconComplete.svg";
import iconLoading from "@assets/images/Tournaments/iconLoading.svg";
import bgLoading from "@assets/images/Tournaments/bgLoading.svg";
// import iconMedal from "@assets/images/Tournaments/iconMedal.svg";
import path from "../../../../constants/path";
import { formatDate, generateNameId } from "../../../../utils/utils";

function CardTournament(props) {
  const navigate = useNavigate();
  const { dataTournament } = props;
  const handleNavigate = () => {
    navigate(`${path.tournaments}/${generateNameId({ name: dataTournament.name, id: dataTournament._id })}`);
  };

  return (
    <div className="cursor-pointer card-tournament w-full h-full" onClick={handleNavigate}>
      <div className="flex flex-col h-full">
        <img className="w-full h-auto object-cover rounded-tl-3xl rounded-tr-3xl" src={dataTournament.image? dataTournament.image : imgTournament } alt="" />
        <div className="w-full bg-[#fff] p-4 flex flex-col justify-between flex-grow rounded-bl-3xl rounded-br-3xl">
          <div className="flex items-center gap-2">
            {dataTournament.status === 0 && <img src={iconComplete} alt="" />}
            {dataTournament.status === 1 && <img src={iconLoading} alt="" />}
            {dataTournament.status === 2 ? null : ""}
            <div className="sm:text-xl text-[#060612] font-sora font-semibold line-clamp-1 text-sm">
              {dataTournament.name}
            </div>
          </div>
          <div className={`items-center mt-6 col-span-6 text-[#060612] ${dataTournament.status === 0 ? "flex justify-between" : dataTournament.status === 1 ? "flex gap-4" : ""}`}>
            {/* {dataTournament.status === 0 && (
              <div className="text-xs flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <img src={iconMedal} alt="" />
                  <div>Nguyễn Thành Công</div>
                </div>
                <div className="flex items-center gap-1">
                  <img src={iconMedal} alt="" />
                  <div>Đặng Việt Anh</div>
                </div>
                <div className="flex items-center gap-1">
                  <img src={iconMedal} alt="" />
                  <div>Nguyễn Thành Công</div>
                </div>
              </div>
            )} */}
            {dataTournament.status === 1 && (
              <div className="relative col-span-6">
                <img className="w-full" src={bgLoading} alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs">
                {Math.round((dataTournament.match_count / dataTournament.total_match_count) * 100)}%
                </div>
              </div>
            )}
            {dataTournament.status === 2 || dataTournament === 0 ? null : ""}
            <div className=" flex flex-col gap-1 border-l-2 border-solid border-[#969696] ps-2 col-span-4">
              <div className="flex gap-2">
                <img src={iconDate} alt="" />
                <div className="font-sora text-xs">{formatDate(dataTournament.start_at)}</div>
              </div>
              <div className="flex gap-2">
                <img src={iconPeopleGroup} alt="" />
                <div className="font-sora text-xs">{dataTournament.type_number_players} người</div>
              </div>
              <div className="flex gap-2">
                <img src={iconCompetion} alt="" />
                <div className="font-sora text-xs">{dataTournament.game_style}</div>
              </div>
              <div className="flex gap-2">
                <img src={iconLocation} alt="" />
                <div className="font-sora text-xs line-clamp-1">{dataTournament.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTournament;
