import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';
import Slider from 'react-slick';
import Service1 from '../../images/service1.jpg';
import Service2 from '../../images/service2.jpg';
import Service3 from '../../images/service3.jpg';
import Service4 from '../../images/service4.jpg';
import './styles.css';
const NextArr = (props) => {
  return (
    <div className="arr_next"  {...props}>
      <ArrowForwardIosIcon />
    </div>
  )
}
const PrevArr = (props) => {
  return (
    <div {...props}>
      <ArrowBackIosIcon/>
    </div>
  )
}
const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    nextArrow: <NextArr/>,
    prevArrow: <PrevArr/>
  };
  return (
    <div className="car_container">
      <Slider {...settings}>
        <div>
          <div className="carousel_img">
            <img src={Service1} alt= "service1" />
          </div>
          </div>
          <div>
          <div className="carousel_img">
            <img src={Service2} alt= "service1" />
          </div>
          </div>
          <div>
          <div className="carousel_img">
            <img src={Service3} alt= "service1" />
          </div>
          </div>
          <div>
          <div className="carousel_img">
            <img src={Service4} alt= "service1" />
          </div>
          </div>
        </Slider>
    </div>
  );
};

export default Carousel;
