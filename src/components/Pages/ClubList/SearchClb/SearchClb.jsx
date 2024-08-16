import React from "react";
import Input from "../../../Input/Input";
import InputSelect from "../../../InputSelect/InputSelect";
import InputTime from "../../../InputTime/InputTime";
import Button from "../../../Button/Button";
import Ball1 from '~/assets/images/ClubList/ball1.svg';
import Ball2 from '~/assets/images/ClubList/ball2.svg';

function SearchClb() {
  return (
    <div className="pt-24 pb-5 md:pb-12 relative"
      style={{background: 'linear-gradient(180deg, #4A40FF 0%, rgba(7, 0, 128, 0.00) 104.71%)',}}
    >
      <img className="absolute top-1/3 xl:w-16 xl:block hidden" src={Ball1} alt="" />
      <img className="absolute top-2/4 right-0 xl:w-16 xl:block hidden" src={Ball2} alt="" />

      <div className="container mx-auto px-4">
        <div className="text-lg md:text-xl uppercase">TÌM KIẾM</div>
        <div className="text-2xl md:text-4xl mt-1 mb-6">CLB BILLARDS</div>
        <div className="grid gap-8 lg:gap-3 xl:grid-cols-12 lg:grid-cols-11">
          <div className="col-span-12 lg:col-span-3">
            <Input type="text" placeholder="Tìm kiếm tên clb" className="w-full" />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <InputSelect label="Địa điểm" />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <InputTime label="Thời gian mong muốn" />
          </div>
          <div className="col-span-12 lg:col-span-2 flex justify-center">
            <Button className="w-full lg:w-auto">Tìm kiếm</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchClb;
