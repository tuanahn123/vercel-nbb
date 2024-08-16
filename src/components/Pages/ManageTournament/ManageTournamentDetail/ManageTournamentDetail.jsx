import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs } from "../../TournamentDetail/TabsTournamentDetail/TabsTournamentDetail";
import TournamentPlayers from "../TournamentPlayers/TournamentPlayers";
import TournamentInformation from '../TournamentInformation/TournamentInformation';
import { Link, useParams } from 'react-router-dom';
import path from '../../../../constants/path';
import { getIdFromNameId } from '../../../../utils/utils';
import tournamentApi from '../../../../api/tournamentApi';
import { useEffect, useState } from 'react';
import TournamentTables from '../TournamentTables/TournamentTables';
import Loading from '../../../Loading/Loading';

function ManageTournamentDetail() {    
    const idTournament = getIdFromNameId(useParams().idTournament);   
    const [loading, setLoading] = useState(true);  
    const [tournaments, setTournaments] = useState(null);
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
    }, [tournaments]);
    
    useEffect(() => {
    }, [players]);
        
    useEffect(() => {
      if (!idTournament) return;
  
      let isMounted = true;
  
      const fetchData = async () => {
        try {
          const [tournamentResponse, playersResponse] = await Promise.all([
            tournamentApi.getTournamentById(idTournament),
            tournamentApi.getAllPlayerInTournament(idTournament)
          ]);
          
          if (isMounted) {
            setTournaments(tournamentResponse.data.metadata);
            setPlayers(playersResponse.data.metadata);
          }
        } catch (error) {
          if (isMounted) {
            console.error('Failed to fetch data', error);
          }
        }
        finally{
          setLoading(false)
        }
      };
  
      fetchData();
  
      return () => {
        isMounted = false;
      };
    }, [idTournament]);
    
    // Hàm để cập nhật lại thông tin giải đấu và danh sách người chơi
    const handlePlayersChange = async () => {
      try {
        const [tournamentResponse, playersResponse] = await Promise.all([
          tournamentApi.getTournamentById(idTournament),
          tournamentApi.getAllPlayerInTournament(idTournament)
        ]);
        
        setTournaments(tournamentResponse.data.metadata);
        setPlayers(playersResponse.data.metadata);
        
      } catch (error) {
        console.error('Failed to update players and tournament data', error);
      }
    };
    
  
    if (!tournaments || loading) {
      return <Loading />;
    }
    return (
        <div className="flex flex-col bg-[#081028] min-h-screen">
            <div className="flex items-center p-5">
                <Link to={path.manageTournaments} className="text-white">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                </Link>
                <div className="flex-1 text-center text-[#fff] xl:text-4xl lg:text-2xl text-lg font-sora font-semibold">
                    {tournaments.name} 
                </div>
            </div>
            <div className="flex-1 container px-5 overflow-auto mx-auto">
                <div className="grid grid-cols-12 justify-center w-full">
                    <div className="col-span-12">
                        <Tabs>
                            <Tab label={"Tổng quan"}>
                            <TournamentInformation 
                              tournament={tournaments} 
                              onPlayersChange={handlePlayersChange} 
                            />
                            </Tab>
                            <Tab label={"Nhánh đấu"}>
                            </Tab>
                            <Tab label={"Người chơi"}>
                                <TournamentPlayers 
                                  tournament={tournaments} 
                                  players={players} 
                                  onPlayersChange={handlePlayersChange} // Truyền hàm cập nhật xuống
                                />
                            </Tab>
                            <Tab label={"Bàn đấu"}>
                              <TournamentTables idTournament = {idTournament} numberTables = {tournaments.number_table}/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageTournamentDetail;
