import React, { useState } from "react";
import Input from "../../../Input/Input";
import InputSelect from "../../../InputSelect/InputSelect";
import Button from "../../../Button/Button";
import Ball1 from "@assets/images/ClubList/ball1.svg";
import Ball2 from "@assets/images/ClubList/ball2.svg";
import tournamentApi from "../../../../api/tournamentApi";

function SearchTournament({ setTournaments }) { // Nhận setTournaments từ props
    const [searchName, setSearchName] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const statusOptions = [
        { value: 0, label: "Đã hoàn thành" },
        { value: 1, label: "Đang diễn ra" },
        { value: 2, label: "Chưa bắt đầu" }
    ];

    const handleSearch = () => {
        // Gọi API với searchName và status
        tournamentApi.searchTournamentByUser(searchName, status)
            .then(response => {
                // Cập nhật danh sách tournaments khi có kết quả mới
                setTournaments(response.data.metadata.tournaments);
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error("Có lỗi xảy ra:", error);
            });
    };

    return (
        <div className="pt-7 relative mt-20">
            <img className="absolute top-1/3 hidden xl:block" src={Ball1} alt="" />
            <img className="absolute top-2/4 right-0 hidden xl:block" src={Ball2} alt="" />
            <div className="container mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-start-2 ">
                        <div className="text-xl uppercase">TÌM KIẾM</div>
                        <div className="text-4xl mt-1 mb-6">Giải đấu</div>
                    </div>
                    <div className="lg:col-start-2 grid grid-cols-12 col-span-12 gap-4">
                        <div className="col-span-12 lg:col-span-6">
                            <Input
                                className=""
                                type="text"
                                placeholder="Tìm kiếm giải đấu theo tên"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-3">
                            <InputSelect
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                options={statusOptions}
                            />
                        </div>
                        {/* <div className="col-span-6 lg:col-span-2">
                            <InputSelect
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div> */}
                        <div className="col-span-12 lg:col-span-2 flex justify-center">
                            <Button className="w-full lg:w-auto min-w-max" onClick={handleSearch}>
                                Tìm kiếm
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchTournament;
