import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../common/Navbar";
import error from "@assets/images/Error/error.png";
import btnError from "@assets/images/Error/btn-error.png";
import { Button } from "../../common/Button";
import path from '../../../constants/path';

export default function Error() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(`${path.home}`); // Thay đổi '/' thành đường dẫn trang chủ của bạn nếu cần
  };

  return (
    <div className="bg-[#000000] h-[100vh]">
      <div className="flex flex-col items-center">
        <img src={error} alt="" className="mt-28" />
        <Button
          name={'Quay lại Trang chủ'}
          className={'flex button-container mt-10'}
          image={btnError}
          onClick={handleGoHome} // Thêm hàm xử lý sự kiện nhấn nút
        />
      </div>
    </div>
  );
}
