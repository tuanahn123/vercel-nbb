import { Button } from "../../common/Button";
import button_contact from '@assets/images/HomePage/Contact/button_contact.svg';
import donors from '@assets/images/HomePage/Contact/Donors.png';

const images = {
    button_contact,
    donors
}

export function Contact() {
    return (
        <div className="container mx-auto mt-[120px] px-4 sm:px-0">
            <div className="bg-[#020041]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 lg:pl-[70px] mt-8 lg:mt-32 text-center lg:text-left">
                        <div className="text-white font-bold font-sora text-2xl sm:text-3xl lg:text-4xl">
                            ĐỪNG BỎ LỠ CÁC
                        </div>
                        <div className="text-white font-bold font-sora text-2xl sm:text-3xl lg:text-4xl">
                            THÔNG TIN HẤP DẪN VỀ
                        </div>
                        <div className="text-[#E011FF] font-bold font-sora text-2xl sm:text-3xl lg:text-4xl">
                            BIDA CHUYÊN NGHIỆP
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 lg:col-start-8 mt-8 lg:mt-14">
                        <form className="space-y-4">
                            <label className="block">
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    className="mt-1 block w-full px-8 py-4 bg-[#4B4885] border-none placeholder:normal placeholder:text-lg placeholder:text-white placeholder:font-sora"
                                />
                            </label>
                            <label className="block">
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    className="mt-1 block w-full px-8 py-4 bg-[#4B4885] border-none placeholder:normal placeholder:text-lg placeholder:text-white placeholder:font-sora"
                                />
                            </label>
                            <label className="block">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="mt-1 block w-full px-8 py-4 bg-[#4B4885] border-none placeholder:normal placeholder:text-lg placeholder:text-white placeholder:font-sora"
                                />
                            </label>
                        </form>
                        <Button name={'Gửi thông tin'} image={images.button_contact} className={'flex button-container my-8 md:my-12 justify-center lg:justify-start'} />
                    </div>
                </div>
            </div>
            <div className="px-3 mt-20 sm:mt-32 mb-24 sm:mb-48">
                <img src={images.donors} alt="Donors" className="w-full" />
            </div>
        </div>
    );
}
