import logo_footer from '../../assets/images/Footer/logo.svg'
import icon1_footer from '../../assets/images/Footer/icon1.svg'
import icon2_footer from '../../assets/images/Footer/icon2.svg'
import icon3_footer from '../../assets/images/Footer/icon3.svg'

const images = {
    logo_footer,
    icon1_footer,
    icon2_footer,
    icon3_footer,
}

export function Footer() {
    return (
        <div className="bg-footer py-6 md:py-10 px-4 sm:px-6">
            <div className="container mx-auto">
                <img src={images.logo_footer} alt="Logo" className="mx-auto sm:mx-0" />
                <div className="md:text-lg text-sm font-sora font-normal text-white flex items-center mt-5">
                    <img src={images.icon1_footer} className="pr-2" alt="Location icon" />
                    <span>Địa chỉ: 129 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
                </div>
                <div className="md:text-lg text-sm font-sora font-normal text-white flex items-center mt-3">
                    <img src={images.icon2_footer} className="pr-2" alt="Phone icon" />
                    <span>Số điện thoại: 035 640 9665</span>
                </div>
                <div className="md:text-lg text-sm font-sora font-normal text-white flex items-center mt-3">
                    <img src={images.icon3_footer} className="pr-2" alt="Email icon" />
                    <span>Email: nbbliveball6868@gmail.com</span>
                </div>
            </div>
        </div>
    );
}
