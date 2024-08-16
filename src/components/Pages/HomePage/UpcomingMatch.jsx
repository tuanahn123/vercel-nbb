import bg_upcoming_match from '@assets/images/HomePage/UpcomingMatch/background_upcoming_match.svg'

const images = {
    bg_upcoming_match
}

export function UpcomingMatch() {
    return (
        <div className="container m-auto mt-24">
            <div className='text-service text-white font-sora font-semibold text-xl sm:text-2xl lg:text-4xl flex justify-center'>
                SỰ KIỆN 
                <span className="text-[#E011FF] ms-3"> HẤP DẪN</span>
            </div>
            <div className='flex justify-center md:mt-16 mt-5 sm:mt-8'>
                <img src={images.bg_upcoming_match} alt='' />
            </div>
        </div>
    )
}