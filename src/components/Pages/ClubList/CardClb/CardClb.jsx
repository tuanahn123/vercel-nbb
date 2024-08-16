import React from "react";
import imgClb from '../../../../assets/images/ClubList/imgClb.svg';
import RatingStar from "../RatingStar/RatingStar";
import { generateNameId } from "/src/utils/utils"
import { Link } from "react-router-dom";
import path from "/src/constants/path";

function CardClb(props) {
    const { dataCard } = props;

    return ( 
        <Link to={`${path.clubs}/${generateNameId({ name: dataCard.nameClb, id: dataCard.idClb })}`}>
            <div className="mx-3 cursor-pointer h-full">
                <div className="relative">
                    <img className="w-full" src={imgClb} alt="" />
                    <div className="flex items-center gap-2 absolute w-11/12 top-3/4 left-3">
                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M8.71757 1.0896C7.12869 1.0914 5.6054 1.72338 4.4819 2.84689C3.35839 3.97039 2.72641 5.49368 2.72461 7.08256C2.72461 12.2106 8.17275 16.0836 8.40498 16.2457C8.49659 16.3098 8.60572 16.3443 8.71757 16.3443C8.82942 16.3443 8.93855 16.3098 9.03016 16.2457C9.26238 16.0836 14.7105 12.2106 14.7105 7.08256C14.7087 5.49368 14.0767 3.97039 12.9532 2.84689C11.8297 1.72338 10.3064 1.0914 8.71757 1.0896ZM8.71757 4.9033C9.14859 4.9033 9.56992 5.03111 9.9283 5.27057C10.2867 5.51003 10.566 5.85039 10.7309 6.24859C10.8959 6.6468 10.939 7.08498 10.855 7.50771C10.7709 7.93045 10.5633 8.31875 10.2585 8.62353C9.95376 8.9283 9.56546 9.13586 9.14272 9.21994C8.71999 9.30403 8.28181 9.26087 7.8836 9.09593C7.4854 8.93099 7.14504 8.65167 6.90558 8.29329C6.66612 7.93491 6.53831 7.51358 6.53831 7.08256C6.53831 6.50458 6.76791 5.95028 7.1766 5.54159C7.58529 5.1329 8.13959 4.9033 8.71757 4.9033Z" fill="white"/>
                        </svg>
                        <span className="text-xs xl:text-sm">{dataCard.potitonClb}</span>
                    </div>    
                </div>
                <div className="mt-2 w-full">
                    <div className="text-2xl">{dataCard.nameClb}</div>
                    <div className="flex justify-start items-center gap-5 mt-2">
                        <RatingStar rating={dataCard.rating}/>
                        <div className="text-sm">{dataCard.rating} lượt đánh giá</div>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                        <div className="text-xl text-[#FF1F1F]">{dataCard.price} đ/1h</div>
                        <div className="bg-[#E13535] px-2 rounded text-center text-xs h-full">-{dataCard.discount}%</div>
                    </div>
                </div>
            </div>
        </Link>
     );
}

export default CardClb;
