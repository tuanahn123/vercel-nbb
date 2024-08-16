import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardClb from "../CardClb/CardClb";
import ArrowNext from '../../../../assets/images/ClubList/nextArrow.svg';
import ArrowPrev from '../../../../assets/images/ClubList/prevArrow.svg';

function SliderClb(props) {
  const { CardDatas } = props;
  
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div className="md:block hidden">
      <img
        {...props}
        className={
          "slick-prev slick-arrow w-12 h-12 top-1/3 -left-14" +
          (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        src={ArrowPrev}
        alt="Prev"
      />
    </div>
  );
  
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
   <div className="md:block hidden">
     <img
      {...props}
      className={
        "slick-next slick-arrow w-12 h-12 top-1/3 -right-14" +
        (currentSlide === slideCount - 1 ? "slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      src={ArrowNext}
      alt="Next"
    />
   </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />,
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {CardDatas.map((card, index) => (
          <div className="col-span-4" key={index}>
            <CardClb dataCard={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderClb;
