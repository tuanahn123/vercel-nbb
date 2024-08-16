import React, { useEffect, useState } from "react";
import SearchTournament from "./SearchTournament/SearchTournament";
import CardTournament from "./CardTournamet/CardTournament";
import Navbar from "../../common/Navbar";
import { Footer } from "../../common/Footer";
import tournamentApi from "../../../api/tournamentApi";
import Loading from "../../Loading/Loading";

function Tournaments() {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await tournamentApi.getAllTournamentByUSer();
                setTournaments(response.data.metadata.tournaments);
              } catch (err) {
                setError(err.message || 'Something went wrong');
                setError(true);
              }
              finally{
              setLoading(false);
            }
        };

        fetchTournaments();
    }, []);

    if (loading) return <Loading />;;
    if (error) return <Error />;

    return (
        <div>
            <Navbar />
            <SearchTournament setTournaments={setTournaments} />
            <div className="container mx-auto max-w-screen-lg px-4">
                <div className="my-8 grid grid-cols-12 gap-4">
                    {tournaments.length === 0 ? (
                        <div className="col-span-12 text-center font-sora text-2xl">
                            Không tìm thấy giải đấu nào
                        </div>
                    ) : (
                        tournaments.map((data, index) => (
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 mt-4" key={index}>
                                <CardTournament dataTournament={data} />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Tournaments;
