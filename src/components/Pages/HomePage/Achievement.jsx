

export function Achievement() {
    return (
        <div className="container m-auto mt-44">
            <div className="text-service text-white font-sora font-semibold text-4xl flex justify-center">Thành tựu</div>
            <div className="grid grid-cols-12 gap-x-10 mt-12">
                <div className='col-span-2 col-start-2 mt-7 font-sora text-white'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold">1M</div>
                        <div className="text-2xl font-normal">Doanh thu</div>
                    </div>
                </div>
                <div className='col-span-3 mt-7 font-sora text-white'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold">10</div>
                        <div className="text-2xl font-normal">CLB liên kết</div>
                    </div>
                </div>
                <div className='col-span-2 mt-7 font-sora text-white'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold">40 + </div>
                        <div className="text-2xl font-normal">Giải đấu</div>
                    </div>
                </div>
                <div className='col-span-3 mt-7 font-sora text-white'>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-6xl font-bold">10.000</div>
                        <div className="text-2xl font-normal">Lượt đặt bàn/tháng</div>
                    </div>
                </div>
            </div>
        </div>
    )
}