import service1 from '../../../assets/images/HomePage/service/service1.svg'
import service2 from '../../../assets/images/HomePage/service/service2.svg'
import service3 from '../../../assets/images/HomePage/service/service3.svg'
import service4 from '../../../assets/images/HomePage/service/service4.svg'

const images = {
    service1,
    service2,
    service3,
    service4
}



export default function Service() {
    return (
        <div className="container mx-auto mt-20 px-4">
            <div className="text-service text-white font-sora font-semibold text-4xl flex justify-center">
                Dịch vụ
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <div className="flex justify-between items-center flex-col bg-service py-5 md:py-10">
                    <img className='w-16 md:w-28 h-auto' src={images.service1} alt="" />
                    <div className="text-white font-semibold font-sora text-sm sm:text-base md:text-xl mt-6">Tổ chức giải đấu</div>
                </div>
                <div className="flex justify-between items-center flex-col bg-service py-5 md:py-10">
                    <img className='w-16 md:w-28 h-auto' src={images.service2} alt="" />
                    <div className="text-white font-semibold font-sora text-sm sm:text-base md:text-xl mt-6">Book kèo</div>
                </div>
                <div className="flex justify-between items-center flex-col bg-service py-5 md:py-10">
                    <img className='w-16 md:w-28 h-auto' src={images.service3} alt="" />
                    <div className="text-white font-semibold font-sora text-sm sm:text-base md:text-xl mt-6">Cửa hàng</div>
                </div>
                <div className="flex justify-between items-center flex-col bg-service py-5 md:py-10">
                    <img className='w-16 md:w-28 h-auto' src={images.service4} alt="" />
                    <div className="text-white font-semibold font-sora text-sm sm:text-base md:text-xl mt-6">Tin tức</div>
                </div>
            </div>
        </div>
    );
}
