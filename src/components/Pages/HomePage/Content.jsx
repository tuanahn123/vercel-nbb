import name_logo from '@assets/images/HomePage/Content/name_logo.svg'
import image_header from '@assets/images/HomePage/Content/image_header.svg'
import video from '@assets/images/HomePage/Content/video.svg'
import button_content from '@assets/images/HomePage/Content/button_content.svg'
import button_match from '@assets/images/HomePage/Content/button_match.svg'
import { Button } from '../../common/Button'

const images = {
    name_logo,
    image_header,
    video,
    button_content,
    button_match
}
export default function Content() {
    return (
        <div className="font-sora bg-no-repeat bg-cover bg-center relative"
            style={{ backgroundImage: `url(${images.image_header})` }}
        >
            <div className="container mx-auto py-10 sm:py-20 relative">
                <div className="text-center">
                    <img src={images.name_logo} className="mx-auto mb-8" alt="Name Logo" />
                </div>
                <div className="inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        SỰ KIỆN 
                        <span className="text-[#E011FF]"> HẤP DẪN</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-11 gap-x-4 sm:gap-x-10 mt-8 w-full">
                        <div className="col-span-7">
                            <img src={images.video} className="w-full" alt="Video" />
                            <Button
                                name="Tham gia ngay"
                                className="flex button-container justify-center mt-6 w-full sm:w-auto"
                                image={button_content}
                            />
                        </div>
                        <div className="col-span-7 sm:col-span-4 flex justify-center sm:justify-start items-center sm:items-end flex-col mt-6 sm:mt-0">
                            <Button
                                name="Trận đấu 1"
                                className="flex button-container w-full sm:w-auto justify-center mb-4 sm:mb-6"
                                image={images.button_match}
                            />
                            <Button
                                name="Trận đấu 2"
                                className="flex button-container w-full sm:w-auto justify-center mb-4 sm:mb-6"
                                image={images.button_match}
                            />
                            <Button
                                name="Trận đấu 3"
                                className="flex button-container w-full sm:w-auto justify-center"
                                image={images.button_match}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
