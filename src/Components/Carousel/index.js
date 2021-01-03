
import React from 'react';
import Slider from 'react-slick';
import './styles.css';
const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint:  480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        }
      }
    ]
  };
  return (
    <div className="car_container">
      <Slider {...props.settings}>
          {props.children}
      </Slider>
    </div>
  );
};

export default Carousel;
