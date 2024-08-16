import React, { useState } from "react";
import iconDelete from "../../../../assets/images/Tournaments/iconDelete.svg";
import tournamentApi from "../../../../api/tournamentApi";
import Alert from "../../../Alert/Alert";

function TournamentPlayers(props) {
    const { players: initialPlayers, tournament: initialTournament, onPlayersChange } = props;

    const [tournament, setTournament] = useState(initialTournament);
    const [players, setPlayers] = useState(initialPlayers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPlayerName, setNewPlayerName] = useState("");
    const [newPlayerRank, setNewPlayerRank] = useState("");
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("error");
    const [errors, setErrors] = useState({ name: "", rank: "" });
    const [confirmDeletePlayer, setConfirmDeletePlayer] = useState({ show: false, id: null });    
    const checkEnoughPlayer = async () => {
        try {
            const response = await tournamentApi.checkEnoughPlayer(tournament._id);
            return response.data.metadata;
        } catch (error) {
            setAlertMessage("Đã xảy ra lỗi khi kiểm tra số lượng người chơi.");
            setAlertType("error");
            setAlertSuccess(true);
            return false;
        }
    };

    const handleOpenModal = async () => {
        const isEnough = await checkEnoughPlayer();
        if (isEnough) {
            setAlertMessage("Đã đủ số lượng người chơi.");
            setAlertType("error");
            setAlertSuccess(true);
        } else {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewPlayerName("");
        setNewPlayerRank("");
        setErrors({ name: "", rank: "" });
    };

    const validateFields = () => {
        let isValid = true;
        let nameError = "";
        let rankError = "";

        if (!newPlayerName) {
            nameError = "Tên không được để trống.";
            isValid = false;
        }

        if (!newPlayerRank || isNaN(newPlayerRank)) {
            rankError = "Rank không được để trống và phải là số.";
            isValid = false;
        }

        setErrors({ name: nameError, rank: rankError });
        return isValid;
    };

    const handleAddPlayer = async () => {
        if (validateFields()) {
            const newPlayer = {
                name: newPlayerName,
                attributes: { rank: parseInt(newPlayerRank) },
            };

            try {
                const newPlayersArray = [newPlayer];
                const response = await tournamentApi.addPlayerDemoToTournament(tournament._id, newPlayersArray);               
                const updatedPlayers = response.data.metadata;
                setPlayers(updatedPlayers);
                if (onPlayersChange) onPlayersChange();

                setAlertMessage("Người chơi đã được thêm thành công!");
                setAlertType("success");
                setAlertSuccess(true);
                handleCloseModal();
            } catch (error) {
                setAlertMessage("Đã xảy ra lỗi khi thêm người chơi.");
                setAlertType("error");
                setAlertSuccess(true);
            }
        }
    };

    const handleDeletePlayer = async (idPlayer) => {
        try {
            const response = await tournamentApi.deletePlayerInTournament(tournament._id, idPlayer);
            if(response.status === 200){
              setPlayers(response.data.metadata)
              setAlertMessage("Người chơi đã được xóa thành công!");
              setAlertType("success");
              setAlertSuccess(true);
            }
            else if(response.errorInfor.status === 403){              
              setAlertMessage(response.errorInfor.message);
              setAlertType("error");
              setAlertSuccess(true);
            }
            if (onPlayersChange) onPlayersChange();
        } catch (error) {
            setAlertMessage("Đã xảy ra lỗi khi xóa người chơi.");
            setAlertType("error");
            setAlertSuccess(true);
        }
        setConfirmDeletePlayer({ show: false, id: null });
    };

    const confirmDelete = (idPlayer) => {
        setConfirmDeletePlayer({ show: true, id: idPlayer });
    };

    return (
        <div>
            <div className="flex justify-end mb-5">
                <button
                    className="sm:text-base text-xs font-sora font-semibold -skew-x-12 px-3 py-2 md:px-4 md:py-3 rounded-lg bg-btn"
                    onClick={handleOpenModal}
                >
                    Thêm người chơi
                </button>
            </div>

            {players.length === 0 ? (
                <p className="text-center text-gray-500">Không có người chơi nào.</p>
            ) : (
                <table className="mb-2 text-xs sm:text-sm min-w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">STT</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Tên</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Rank</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{player.name}</td>
                                <td className="px-6 py-4">Hạng {player.attributes.rank}</td>
                                <td className="px-6 py-4 flex space-x-4">
                                    <button
                                        title="Xóa người chơi"
                                        onClick={() => confirmDelete(player._id)}
                                    >
                                        <img className="w-4" src={iconDelete} alt="Delete" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="rounded-lg p-6 w-96 bgModal">
                        <h2 className="text-2xl font-semibold mb-4">Thêm người chơi</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white mb-2">Tên</label>
                            <input
                                type="text"
                                value={newPlayerName}
                                onChange={(e) => setNewPlayerName(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md text-black outline-none`}
                                required
                                autoFocus={true}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white mb-2">Rank</label>
                            <input
                                type="text"
                                value={newPlayerRank}
                                onChange={(e) => setNewPlayerRank(e.target.value)}
                                className={`w-full px-3 py-2 border ${errors.rank ? "border-red-500" : "border-gray-300"} rounded-md text-black outline-none`}
                                required
                            />
                            {errors.rank && <p className="text-red-500 text-xs mt-1">{errors.rank}</p>}
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 -skew-x-12 text-white rounded-md"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleAddPlayer}
                                className="text-base font-sora font-semibold -skew-x-12 px-4 py-2 rounded-lg bg-btn"
                            >
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {confirmDeletePlayer.show && (
                <Alert
                    show={confirmDeletePlayer.show}
                    title="Xác nhận"
                    text="Bạn có chắc chắn muốn xóa người chơi này không?"
                    onConfirm={() => handleDeletePlayer(confirmDeletePlayer.id)}
                    onCancel={() => setConfirmDeletePlayer({ show: false, id: null })}
                    type="question"
                />
            )}

            {alertSuccess && (
                <Alert
                    show={alertSuccess}
                    title={alertType === "success" ? "Thành công" : "Thông báo"}
                    text={alertMessage}
                    onConfirm={() => setAlertSuccess(false)}
                    showCancelButton={false}
                    type={alertType}
                />
            )}
        </div>
    );
}

export default TournamentPlayers;
