import React, { useEffect, useState } from "react";
import styles from '../ManageTournament.module.css';
import iconEdit from "../../../../assets/images/Tournaments/iconEdit.svg";
import { tableApi } from "../../../../api/tableApi";
import Alert from "../../../Alert/Alert";

function TournamentTables({ idTournament, numberTables }) {
    const [tables, setTables] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newTableName, setNewTableName] = useState("");
    const [newTableStatus, setNewTableStatus] = useState(0); // State cho trạng thái bàn mới
    const [editTableName, setEditTableName] = useState("");
    const [editTableStatus, setEditTableStatus] = useState(0); // State cho trạng thái bàn sửa
    const [editTableId, setEditTableId] = useState(null);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("error");
    const [error, setError] = useState("");

    const fetchTables = async () => {
        try {
            const response = await tableApi.getAllTables(idTournament);
            if (response.data.metadata.length === 0) {
                // Nếu không có bàn nào, tạo các bàn mặc định
                await createDefaultTables(numberTables);
                // Gọi lại để cập nhật danh sách bàn sau khi tạo bàn mặc định
                const updatedResponse = await tableApi.getAllTables(idTournament);
                setTables(updatedResponse.data.metadata);
            } else {
                setTables(response.data.metadata);
            }
        } catch (error) {
            console.error("Failed to fetch tables", error);
        }
    };

    const createDefaultTables = async (numberTables) => {
        const defaultTables = Array.from({ length: numberTables }, (_, i) => ({
            name: `Bàn số ${i + 1}`,
            status: 0, // Mặc định là rảnh
        }));

        try {
            await tableApi.createTable(idTournament, defaultTables);
        } catch (error) {
            setAlertMessage("Đã xảy ra lỗi khi tạo bàn mặc định.");
            setAlertType("error");
            setAlertSuccess(true);
        }
    };

    useEffect(() => {
        fetchTables();
    }, [idTournament]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewTableName("");
        setNewTableStatus(0); // Reset trạng thái
        setError("");
    };

    const handleAddTable = async () => {
        if (newTableName.trim() === "") {
            setError("Tên bàn không được để trống.");
            return;
        }

        const newTable = [
            {
                name: newTableName,
                status: newTableStatus, // Trạng thái bàn mới
            }
        ];

        try {
            await tableApi.createTable(idTournament, newTable);
            fetchTables(); // Gọi lại để cập nhật danh sách bàn
            setAlertMessage("Bàn đã được thêm thành công!");
            setAlertType("success");
            setAlertSuccess(true);
            handleCloseModal();
        } catch (error) {
            setAlertMessage("Đã xảy ra lỗi khi thêm bàn.");
            setAlertType("error");
            setAlertSuccess(true);
        }
    };

    const handleOpenEditModal = (tableId, tableName, tableStatus) => {
        setEditTableId(tableId);
        setEditTableName(tableName);
        setEditTableStatus(tableStatus); // Cập nhật trạng thái bàn
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditTableId(null);
        setEditTableName("");
        setEditTableStatus(0); // Reset trạng thái
        setError("");
    };

    const handleEditTable = async () => {
        if (editTableName.trim() === "") {
            setError("Tên bàn không được để trống.");
            return;
        }

        try {
            await tableApi.editTable(editTableId, { name: editTableName, status: editTableStatus });
            fetchTables(); // Cập nhật lại danh sách bàn
            setAlertMessage("Tên bàn đã được cập nhật thành công!");
            setAlertType("success");
            setAlertSuccess(true);
            handleCloseEditModal();
        } catch (error) {
            setAlertMessage("Đã xảy ra lỗi khi cập nhật tên bàn.");
            setAlertType("error");
            setAlertSuccess(true);
        }
    };

    return (
        <div>
            <div className="flex justify-end mb-5">
                <button
                    className="sm:text-base text-xs font-sora font-semibold -skew-x-12 px-3 py-2 md:px-4 md:py-3 rounded-lg bg-btn"
                    onClick={handleOpenModal}
                >
                    Thêm bàn
                </button>
            </div>
            {tables.length === 0 ? (
                <p className="text-center text-gray-500">Chưa có bàn nào.</p>
            ) : (
                <table className="mb-2 text-xs sm:text-sm min-w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">STT</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Tên bàn</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Trạng thái</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-[#A0AEC0]">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tables.map((table, index) => (
                        <tr 
                            key={index} 
                            className={`border-b ${table.status === 1 ? "bg-red-400" : ""}`}
                        >
                            <td className="px-6 py-4">{index + 1}</td>
                            <td className="px-6 py-4">{table.name}</td>
                            <td className="px-6 py-4">
                                {table.status === 0 ? "Bàn rảnh" : "Bàn bận"}
                            </td>
                            <td className="px-6 py-4 flex space-x-4">
                                <button
                                    title="Sửa bàn đấu"
                                    onClick={() => handleOpenEditModal(table._id, table.name, table.status)}
                                >
                                    <img className="w-4" src={iconEdit} alt="Edit" />
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className={`rounded-lg p-6 w-96 ${styles.bgModal}`}>
                        <h2 className="text-2xl font-semibold mb-4">Thêm bàn</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white mb-2">Tên bàn</label>
                            <input
                                type="text"
                                onChange={(e) => setNewTableName(e.target.value)}
                                className={`w-full px-3 py-2 border ${error ? "border-red-500" : "border-gray-300"} rounded-md text-black outline-none`}
                                required
                                autoFocus={true}
                            />
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white mb-2">Trạng thái</label>
                            <select
                                value={newTableStatus}
                                onChange={(e) => setNewTableStatus(parseInt(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black outline-none"
                            >
                                <option value={0}>Bàn rảnh</option>
                                <option value={1}>Bàn bận</option>
                            </select>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseModal}
                                className="px-4 py-2 -skew-x-12 text-white rounded-md"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleAddTable}
                                className="text-xs sm:text-base font-sora font-semibold -skew-x-12 px-4 py-2 rounded-lg bg-btn"
                            >
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className={`rounded-lg p-6 w-96 ${styles.bgModal}`}>
                        <h2 className="text-2xl font-semibold mb-4">Chỉnh sửa bàn</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white mb-2">Tên bàn</label>
                            <input
                                type="text"
                                value={editTableName}
                                onChange={(e) => setEditTableName(e.target.value)}
                                className={`w-full px-3 py-2 border ${error ? "border-red-500" : "border-gray-300"} rounded-md text-black outline-none`}
                                required
                            />
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-white mb-2">Trạng thái</label>
                            <select
                                value={editTableStatus}
                                onChange={(e) => setEditTableStatus(parseInt(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-black outline-none"
                            >
                                <option value={0}>Bàn rảnh</option>
                                <option value={1}>Bàn bận</option>
                            </select>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCloseEditModal}
                                className="px-4 py-2 -skew-x-12 text-white rounded-md"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleEditTable}
                                className="text-xs sm:text-base font-sora font-semibold -skew-x-12 px-4 py-2 rounded-lg bg-btn"
                            >
                                Lưu
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {alertSuccess && (
                <Alert
                show={alertSuccess}
                title={alertType === "error" ? "Thông báo" : "Chúc mừng"}
                text={alertMessage}
                onConfirm={() => setAlertSuccess(false)}
                showButtonConfirm={true}
                showCancelButton={false}
                type={alertType}
            />
)}
        </div>
    );
}

export default TournamentTables;
