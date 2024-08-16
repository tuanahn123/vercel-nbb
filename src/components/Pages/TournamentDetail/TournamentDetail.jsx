import { useEffect, useState } from "react";
import { Tabs, Tab } from "../TournamentDetail/TabsTournamentDetail/TabsTournamentDetail";
import OverviewTournament from "./TabsTournamentDetail/OverviewTournament/OverviewTournament";
import ListPlayer from "./TabsTournamentDetail/ListPlayer/ListPlayer";
import Navbar from "../../common/Navbar";
import { Footer } from "../../common/Footer";
import { getIdFromNameId } from "../../../utils/utils";
import { useParams } from "react-router-dom";
import tournamentApi from "../../../api/tournamentApi";
import CreateBranch from "../TournamentAdministration/CreateBranch/CreateBranch";
function  TournamentDetail() {
    const idTournament = getIdFromNameId(useParams().idTournament); // Ensure nameId matches the param name in the route
    const [tournaments, setTournaments] = useState(null);
    const [historyUser, setHistoryUser] = useState([]);

   
  useEffect(() => {
    if (!idTournament) return;

    let isMounted = true;

    const fetchData = async () => {
      try {
        const [tournamentResponse, historyUserResponse] = await Promise.all([
          tournamentApi.getTournamentById(idTournament),
          tournamentApi.getHistoryTournamentUser(idTournament)
        ]);

        if (isMounted) {
        setHistoryUser(historyUserResponse.data.metadata);
          setTournaments(tournamentResponse.data.metadata);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Failed to fetch data', error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [idTournament]);

  if (tournaments === null) {
    return <div>Loading...</div>;
  }
   return (         
        <div className="min-h-screen">
            <Navbar />
            <div className=" mx-auto my-14" >
                <div className="text-center text-[#fff] md:text-3xl lg:text-4xl text-lg sm:text-xl font-sora font-semibold">
                <div className="text-center text-[#fff] md:text-3xl lg:text-4xl text-lg sm:text-xl font-sora font-semibold">
                    {tournaments && tournaments.name ? tournaments.name : 'Tên giải đấu không có'}
                </div>
                </div>
                <div className="grid grid-cols-12 justify-center mt-10">
                    <div className="col-span-12">
                        <Tabs>
                            <Tab label={"Tổng quan"}>
                            <OverviewTournament tournament ={tournaments} historyUser = {historyUser} />
                            </Tab>
                            <Tab label={"Nhánh đấu"}>
                              <CreateBranch idTournament={idTournament} />
                            </Tab>
                            <Tab label={"Người chơi"}>
                            <ListPlayer historyUser = {historyUser} />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>      
            <Footer />      
        </div>
     );
}

export default TournamentDetail;