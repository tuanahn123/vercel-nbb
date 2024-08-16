import React, { useState } from "react";
import SearchClb from "../ClubList/SearchClb/SearchClb";
import RatingStar from "../ClubList/RatingStar/RatingStar";
import SliderIntroClb from "./SliderIntroClb/SliderIntroClb";
import SliderClb from "../ClubList/SliderClb/SliderClb";
import Button from "../../Button/Button";
import Navbar from "../../common/Navbar";
import { Footer } from "../../common/Footer";
import IconLocation from "../../../assets/images/ClbDetail/icon_location.svg";
import IconClock from "../../../assets/images/ClbDetail/icon_clock.svg";
import IconTelephone from "../../../assets/images/ClbDetail/icon_telephone.svg";
import ImgIntroClb1 from "../../../assets/images/ClbDetail/img1.svg";
import ImgIntroClb2 from "../../../assets/images/ClbDetail/img2.svg";
import ImgIntroClb3 from "../../../assets/images/ClbDetail/img3.svg";
import ImgIntroClb4 from "../../../assets/images/ClbDetail/img4.svg";
import ImgIntroClb5 from "../../../assets/images/ClbDetail/img5.svg";

function ClbDetail() {
  const imgDatas = [
    ImgIntroClb1,
    ImgIntroClb2,
    ImgIntroClb3,
    ImgIntroClb4,
    ImgIntroClb5,
  ];

  const CardDatas = [
    {
      idClb: 1,
      potitonClb: "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
      nameClb: "Ozy Billiards Club",
      rating: 4,
      price: 100000,
      discount: 20,
    },
    {
      idClb: 2,
      potitonClb: "461 Vũ Tông Phan, Khương Đình, Thanh Xuân2",
      nameClb: "Ozy Billiards Club",
      rating: 3,
      price: 100000,
      discount: 20,
    },
    {
      idClb: 3,
      potitonClb: "461 Vũ Tông Phan, Khương Đình, Thanh Xuân3",
      nameClb: "Ozy Billiards Club",
      rating: 2,
      price: 100000,
      discount: 20,
    },
    {
      idClb: 4,
      potitonClb: "461 Vũ Tông Phan, Khương Đình, Thanh Xuân4",
      nameClb: "Ozy Billiards Club",
      rating: 3,
      price: 100000,
      discount: 20,
    },
    {
      idClb: 5,
      potitonClb: "461 Vũ Tông Phan, Khương Đình, Thanh Xuân5",
      nameClb: "Ozy Billiards Club",
      rating: 4,
      price: 100000,
      discount: 20,
    },
    {
      idClb: 6,
      potitonClb: "461 Vũ Tông Phan, Khương Đình, Thanh Xuân6",
      nameClb: "Ozy Billiards Club",
      rating: 3,
      price: 100000,
      discount: 20,
    },
    {
      idClb: 7,
      potitonClb: "461 Vũ Tông Phan, Khương Đình, Thanh Xuân7",
      nameClb: "Ozy Billiards Club",
      rating: 2,
      price: 100000,
      discount: 20,
    },
  ];

  const [showAllDescription, setShowAllDescription] = useState(false);

  // Xử lý khi click vào nút Xem thêm
  const handleShowMore = () => {
    setShowAllDescription(true);
  };

  // Xử lý khi click vào nút Thu gọn
  const handleShowLess = () => {
    setShowAllDescription(false);
  };

  return (
    <div>
      <Navbar />
      <SearchClb />
      <div className="container mx-auto my-8 px-4 md:px-0 ">
        <SliderIntroClb ImgDatas={imgDatas} />
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="md:col-span-8">
            <div className="text-4xl font-bold mt-8">Ozy Billiards Club</div>
            <div className="flex items-center gap-3 mt-3">
              <RatingStar rating={5} />
              <div className="text-sm">{5} lượt đánh giá</div>
            </div>
            <div className="flex items-center mt-4 gap-3">
              <div className="text-3xl text-red-600">{1000000} đ/1h</div>
              <div className="bg-red-600 text-white px-2 rounded text-sm">-{20}%</div>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <img src={IconLocation} alt="" />
              <div className="text-lg">{CardDatas[0].potitonClb}</div>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <img src={IconClock} alt="" />
              <div className="text-lg">Giờ mở cửa: 15:00 AM - 02:00 PM</div>
            </div>
            <div className="mt-5 text-lg">
              <span className="text-xl">Giới thiệu:</span>{" "}
              {showAllDescription ? (
                <>
                  Quán billiards là một địa điểm nổi tiếng cho những người yêu thích bi-a và muốn thử thách kỹ năng của mình trong môn thể thao này. Tại quán billiards, bạn sẽ tìm thấy bàn bi-a chuyên nghiệp và một không gian thân thiện để chơi và thư giãn. Quán billiards thường được trang bị các bàn bi-a chất lượng cao và các dụng cụ cần thiết như gậy bi-a và bóng bi. Bạn có thể thuê bàn theo giờ hoặc theo lượt chơi, tùy thuộc vào quy định của từng quán. Ngoài ra, một số quán billiards cũng có các dịch vụ khác như đồ uống và đồ ăn nhẹ để bạn có thể thưởng thức trong quá trình chơi. Quán billiards thường là nơi tập trung của cộng đồng yêu thích bi-a, với một không gian thoải mái và vui vẻ. Nơi đây bạn có thể gặp gỡ bạn bè, thách thức nhau trong các trận đấu bi-a, hoặc tham gia các giải đấu và sự kiện được tổ chức tại quán. Nếu bạn muốn thử thách kỹ năng bi-a của mình, rèn luyện hoặc đơn giản là tận hưởng những giờ phút thư giãn thú vị, quán billiards là một lựa chọn tuyệt vời. Hãy tới và khám phá không gian này, trải nghiệm sự hứng khởi và sự cạnh tranh trong trò chơi bi-a.
                  <button className="text-blue-500 hover:underline" onClick={handleShowLess}>
                    Rút gọn
                  </button>
                </>
              ) : (
                <>
                  Quán billiards là một địa điểm nổi tiếng cho những người yêu thích bi-a và muốn thử thách kỹ năng của mình trong môn thể thao này. Tại quán billiards, bạn sẽ tìm thấy bàn bi-a chuyên nghiệp và một không gian thân thiện để chơi và thư giãn.{" "}
                  <button className="text-blue-500 hover:underline" onClick={handleShowMore}>
                    Xem thêm
                  </button>
                </>
              )}
            </div>
            <div className="mt-6">
              <Button className="flex items-center gap-2 text-lg font-semibold" icon={IconTelephone}>
                Đặt bàn ngay
              </Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="font-bold text-xl mt-8">Các CLB tương tự ở Khương Đình, Thanh Xuân</div>
            <SliderClb CardDatas={CardDatas} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClbDetail;
