import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowNext from "~/assets/images/ClubList/nextArrow.svg";
import ArrowPrev from "~/assets/images/ClubList/prevArrow.svg";

function SliderIntroClb(props) {
  const { ImgDatas } = props;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setActiveSlideIndex(0);
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img
      {...props}
      className={
        "slick-prev slick-arrow w-12 h-12 -top-14 left-1/2 -translate-x-1/2 rotate-90" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      src={ArrowPrev}
      alt="Prev"
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img
      {...props}
      className={
        "slick-next slick-arrow w-12 h-12 top-full left-1/2 -translate-x-1/2 rotate-90" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      src={ArrowNext}
      alt="Next"
    />
  );

  const getActiveImage = () => {
    return ImgDatas[activeSlideIndex];
  };

  const handleImageClick = (index) => {
    setActiveSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const slideCount = sliderRef.current.props.children.length;
        const nextSlideIndex = (activeSlideIndex + 1) % slideCount;
        setActiveSlideIndex(nextSlideIndex);
      }
    }, 5000); // Thời gian chuyển slide (5 giây)

    return () => {
      clearInterval(interval);
    };
  }, [activeSlideIndex]);

  var settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    initialSlide: 0,
    afterChange: (currentSlide) => {
      setActiveSlideIndex(currentSlide);
    },
  };

  return (
    <div className="grid grid-cols-12 justify-between mt-14">
      <div className="col-span-8 my-auto">
        <img className="w-full" src={getActiveImage()} alt="" />
      </div>
      <div className="col-span-3 col-start-10">
        <Slider ref={sliderRef} {...settings}>
          {ImgDatas.map((img, index) => (
            <div
              className="col-span-4 p-1"
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <img className="w-full h-full" src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderIntroClb;