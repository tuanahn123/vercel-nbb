import React from "react";
import FoundingTeam from "./FoundingTeam/FoundingTeam";
import Member1Image from '@assets/images/AboutPage/member1.svg';
import Member2Image from '@assets/images/AboutPage/member2.svg';
import Member3Image from '@assets/images/AboutPage/member3.svg';
import Member4Image from '@assets/images/AboutPage/member4.svg';
import Member5Image from '@assets/images/AboutPage/member5.svg';
import Ball1Image from '@assets/images/AboutPage/ball_1.svg';
import Ball2Image from '@assets/images/AboutPage/ball_2.svg';
import NbbIntroImage from '@assets/images/AboutPage/img1.svg';
import ServiceNBB from "./ServiceNBB/ServiceNBB";
import Service1 from "@assets/images/AboutPage/service1.svg";
import Service2 from "@assets/images/AboutPage/service2.svg";
import Service3 from "@assets/images/AboutPage/service3.svg";
import Service4 from "@assets/images/AboutPage/service4.svg";
import Achievement from "../../Achievement/Achievement";
import path from "../../../constants/path";
import BusinessPartners from "../../BusinessPartners/BusinessPartners";
import { Footer } from "../../common/Footer";
import Navbar from "../../common/Navbar";
function AboutPage() {
    const foundingTeamData = [
        { image: Member1Image, text: "Bảo - người sáng lập" },
        { image: Member2Image, text: "Huyền - quản lý" },
        { image: Member3Image, text: "Ba - biên tập" },
        { image: Member4Image, text: "Hùng - thiết kế " },
        { image: Member5Image, text: "Hiếu- bình luận viên" },
        // Thêm các thành viên khác vào đây
      ];
    return (
        <div>
            < Navbar />
            <div className="w-full relative">
                <img className="absolute top-3 right-0 w-16 xs:w-20 md:w-30 lg:w-40 xl:w-50" src={Ball1Image} alt="" />
                <div className="container mx-auto mt-20">
                    <div className="col-auto mx-auto text-center">
                        <span className="font-sora font-semibold text-4xl text-center relative py-5">
                        NBB Liveballs  
                        <div className="absolute bottom-0 left-0 right-0 h-1 w-4/6 mx-auto bg-gradient-border"></div>
                        </span>
                    </div>
                    <div className="font-sora font-normal text-lg grid grid-cols-12 text-center mt-20">
                        <div className="col-start-3 col-span-8 text-center">
                            Được khai sinh từ niềm đam mê và yêu thích chung đối với bộ môn billiard, NBB Billiards đã bắt đầu hành trình của mình từ ngày 01/03/2023 với đội ngũ sáng lập gồm 5 thành viên:
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-12 pt-1 mx-auto">
                        {foundingTeamData.map((member, index) => (
                            <FoundingTeam key={index} image={member.image} text={member.text} />
                        ))}
                    </div>

                </div>
            </div>
            <div className="w-full bg-members bg-cover mt-16 pt-2 bg-no-repeat justify-center relative">
            <img className="absolute top-5 left-0 w-16 xs:w-20 md:w-30 lg:w-40 xl:w-50" src={Ball2Image} alt="" />
                <div className="container mx-auto py-32">
                    <div className="grid grid-cols-12">
                        <div className="col-span-10 col-start-2">
                        <img className="" src={NbbIntroImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>  
            <div className="container mx-auto lg:mt-28 mt-20 pt-2">
                <div className="grid grid-cols-12">
                    <div className="col-span-2 font-sora text-4xl font-semibold uppercase relative w-max">Dịch vụ
                    <div className="absolute left-0 right-0 h-1 bg-gradient-border mt-5"></div>

                    </div>

                </div>
                
                <ServiceNBB pathService = {path.tournaments} className = "mt-24" classNameText= "col-start-9 flex flex-col text-end my-auto" service = "Tổ chức giải đấu" detailService ="Với tính năng đặt bàn trực tuyến, NBB Billiards giúp bạn dễ dàng chọn lựa và đặt bàn tại các CLB Billiards ưa thích một cách nhanh chóng và thuận tiện." urlImage ={Service1} />
                <ServiceNBB className = "mt-24" classNameImage= "col-start-6 order-2" classNameText= "order-1 col-start-1 flex flex-col text-start my-auto" service = "Tìm kiếm CLB" detailService ="Bạn có thể chọn vị trí cụ thể, so sánh giá cả, chọn dịch vụ phù hợp và thời gian chơi lý tưởng để có trải nghiệm billiards hoàn hảo" urlImage ={Service2} />
                <ServiceNBB  className = "mt-24"  classNameText= "col-start-9 flex flex-col text-end my-auto" service = "Book kèo" detailService ="Chức năng kết nối người chơi billiards cho phép bạn giao lưu, tỉ thí và thử thách với các anh em có chung niềm đam mê. Hãy trải nghiệm ngay để khám phá cơ hội mới và tham gia vào cộng đồng Billiard đầy máu lửa nhé!" urlImage ={Service3} />
                <ServiceNBB className = "mt-24" classNameImage ="col-start-6 order-2" classNameText= "order-1 col-start-1 flex flex-col text-end my-auto" service = "Mua hàng" detailService ="Cửa hàng của chúng tôi cung cấp những sản phẩm billiards tốt và uy tín nhất cho những vận động viên, các anh em mới tập chơi bida. Khám phá và mua sắm ngay hôm nay để biến mọi trận đấu của bạn thành trải nghiệm đỉnh cao." urlImage ={Service4} />
                <div className="container grid mt-52">
                    <div className="text-center font-sora md:text-4xl text-xl sm:text-2xl font-bold uppercase tracking-widest relative w-fit mx-auto">
                    TẠI SAO  LÀ  <span className="text-purple">NBB</span>  ?
                    <div className="absolute left-0 right-0 h-1 bg-gradient-border mt-8 w-4/6 mx-auto"></div>
                    </div>
                    <div className="w-96 h-96"></div>
                    <Achievement />
                    <BusinessPartners />
                </div>
            </div>
            < Footer/>
        </div>
       

            
    
    );
}
export default AboutPage;