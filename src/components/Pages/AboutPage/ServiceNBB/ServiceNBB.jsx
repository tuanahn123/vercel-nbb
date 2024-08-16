import React from "react";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";

function ServiceNBB(props) {
    const { className, classNameImage, classNameText, urlImage, pathService, service, detailService } = props;

    return (
        <div className={`flex flex-col md:flex-row ${className} gap-6 px-6 md:px-0`}>
            {/* Image Section */}
            <img
                className={`w-full md:w-1/2 ${classNameImage}`}
                src={urlImage}
                alt=""
            />
            {/* Text Section */}
            <div className={`flex flex-col justify-center ${classNameText}`}>
                <div className="font-sora text-2xl md:text-4xl font-semibold">
                    {service}
                </div>
                <div className="mt-4 md:mt-6 font-sora text-base md:text-lg leading-6">
                    {detailService}
                </div>
                <div className="mt-6">
                    <Link to={pathService}>
                        <Button>
                            Xem thêm
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceNBB;
