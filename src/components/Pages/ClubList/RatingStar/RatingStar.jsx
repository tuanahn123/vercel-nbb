import React from "react";
import Star from '~/assets/images/ClubList/star.svg';

function StarRating({ rating }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(  
            <div key={i}>
                <img src={Star} alt="" />
            </div>
            )
          // } else {
          //   stars.push(
          //   <div key={i}>
          //       <img src={Star} alt="" />
          //   </div>
          //   );
          }
        }
        return stars;
      };
    
      return <div className="flex gap-1">{renderStars()}</div>;
}

export default StarRating;

