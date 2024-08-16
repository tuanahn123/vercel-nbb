import React from "react";

function Achievement() {
    return ( 
    <div>
        <div className="font-sora text-center uppercase md:text-4xl sm:text-3xl text-2xl font-bold mb-20 md:mb-0 relative w-fit mx-auto">
            Thành tựu
            <div className="absolute left-0 right-0 h-1 bg-gradient-border mt-8"></div>
        </div>
        <div className="grid grid-cols-12 gap-4 md:mt-20 sm:mt-10 mt-5 px-4">
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
                <div className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold text-center">1M</div>
                <div className="font-sora text-lg sm:text-xl md:text-2xl text-center">Doanh thu</div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
                <div className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold text-center">10</div>
                <div className="font-sora text-lg sm:text-xl md:text-2xl text-center">CLB liên kết</div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
                <div className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold text-center">40+</div>
                <div className="font-sora text-lg sm:text-xl md:text-2xl text-center">Giải đấu</div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col items-center gap-3">
                <div className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold text-center">10.000</div>
                <div className="font-sora text-lg sm:text-xl md:text-2xl text-center">Lượt đặt bàn/tháng</div>
            </div>
        </div>
    </div> 
    );
}

export default Achievement;
