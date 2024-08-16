import React from "react";
import SearchClb from "./SearchClb/SearchClb";
import FilterSearchClb from "./FilterSearchClb/FilterSearchClb";
import CardClb from "./CardClb/CardClb";
import SliderClb from "./SliderClb/SliderClb";
import { Tabs, Tab } from "./TabsClb/TabsClb";
import Navbar from "../../common/Navbar";
import { Footer } from "../../common/Footer";
function ClubList() {
      const CardDatas = [
        {
            "idClb": 1,
            "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân", 
            "nameClb": "Ozy Billiards Club",
            "rating": 4,
            "price": 100000,
            "discount": 20
          },
          {
            "idClb": 2,
            "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân2", 
            "nameClb": "Ozy Billiards Club",
            "rating": 3,
            "price": 100000,
            "discount": 20
          },{
            "idClb": 3,
            "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân3", 
            "nameClb": "Ozy Billiards Club",
            "rating": 2,
            "price": 100000,
            "discount": 20
          },{
            "idClb": 4,
            "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân4", 
            "nameClb": "Ozy Billiards Club",
            "rating": 3,
            "price": 100000,
            "discount": 20
          },{
            "idClb": 5,
            "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân5", 
            "nameClb": "Ozy Billiards Club",
            "rating": 4,
            "price": 100000,
            "discount": 20
          },
          {
            "idClb": 6,
            "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân6", 
            "nameClb": "Ozy Billiards Club",
            "rating": 3,
            "price": 100000,
            "discount": 20
          },{
            "idClb": 6,
            "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân7", 
            "nameClb": "Ozy Billiards Club",
            "rating": 2,
            "price": 100000,
            "discount": 20
          },
    
    ]
    const ClbOutstandingDatas = [
            {
              "location": "Khương Đình",
              "dataCards": [
                {
                    "idClb": 1,
                  "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                  "nameClb": "Ozy Billiards Club",
                  "rating": 4,
                  "price": 100000,
                  "discount": 20
                },
                {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Đình, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
              ]
            },
            {
              "location": "Khương Trung",
              "dataCards": [
                {
                  "idClb": 1,
                  "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                  "nameClb": "Ozy Billiards Club",
                  "rating": 4,
                  "price": 100000,
                  "discount": 20
                },
                {
                    "idClb": 2,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 3,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 4,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Trung, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
              ]
            },
            {
              "location": "Khương Thượng",
              "dataCards": [
                {
                  "idClb": 1,
                  "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                  "nameClb": "Ozy Billiards Club",
                  "rating": 4,
                  "price": 100000,
                  "discount": 20
                },
                {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
                  {
                    "idClb": 1,
                    "potitonClb": "461 Vũ Tông Phan, Khương Thượng, Thanh Xuân",
                    "nameClb": "Ozy Billiards Club",
                    "rating": 4,
                    "price": 100000,
                    "discount": 20
                  },
              ]
            }
          
    ]
    return ( 
      <div>
        <Navbar />
      <SearchClb />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 mt-6 gap-4">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <FilterSearchClb />
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-9 lg:col-start-4">
          <div className="mb-11 text-3xl text-center font-semibold">CLB nổi bật</div>
          <SliderClb CardDatas={CardDatas} />
          <div className="mt-14 text-3xl text-start">CLB nổi bật</div>
          <div className="mt-2 pt-1 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z"
                fill="url(#paint0_linear_539_8521)"
              />
              <defs>
                <linearGradient id="paint0_linear_539_8521" x1="12" y1="1.5" x2="12" y2="22.4998" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0C53FF" />
                  <stop offset="1" stopColor="#E011FF" />
                </linearGradient>
              </defs>
            </svg>
            <div>Khương Đình, Thanh Xuân</div>
          </div>
          <div className="mt-4">
            <Tabs>
              {ClbOutstandingDatas.map((dataClb, index) => (
                <Tab label={dataClb.location} key={index}>
                  <div className="grid grid-cols-12 gap-4 mt-9">
                    {dataClb.dataCards.map((dataCard, id) => (
                      <div className="col-span-12 sm:col-span-6 lg:col-span-4" key={id}>
                        <CardClb dataCard={dataCard} />
                      </div>
                    ))}
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
     );
}

export default ClubList;