import React from "react";
import partner1 from '../../assets/images/BusinessPartners/partner1.svg';
import partner2 from '../../assets/images/BusinessPartners/partner2.svg';
import partner3 from '../../assets/images/BusinessPartners/partner3.svg';
import partner4 from '../../assets/images/BusinessPartners/partner4.svg';
import partner5 from '../../assets/images/BusinessPartners/partner5.svg';
import partner6 from '../../assets/images/BusinessPartners/partner6.svg';
import partner7 from '../../assets/images/BusinessPartners/partner7.svg';

function BusinessPartners() {
    return (  
        <div className="flex flex-wrap justify-center my-10 md:my-16 gap-8 px-4">
            <img className="w-32 h-auto object-contain" src={partner1} alt="Partner 1" />
            <img className="w-32 h-auto object-contain" src={partner2} alt="Partner 2" />
            <img className="w-32 h-auto object-contain" src={partner3} alt="Partner 3" />
            <img className="w-32 h-auto object-contain" src={partner4} alt="Partner 4" />
            <img className="w-32 h-auto object-contain" src={partner5} alt="Partner 5" />
            <img className="w-32 h-auto object-contain" src={partner6} alt="Partner 6" />
            <img className="w-32 h-auto object-contain" src={partner7} alt="Partner 7" />
        </div>
    );
}

export default BusinessPartners;
