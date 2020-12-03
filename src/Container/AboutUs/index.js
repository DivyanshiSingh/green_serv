import React from "react";
import About_banner from "../../Components/About_banner/index";
import "./about.css";
import Bottom from "../../Components/Bottom";
import Person4 from "../../images/div.png";
import Person1 from "../../images/aditya.jpg";
import Person2 from "../../images/golu.jpg";
import Service1 from "../../images/service1.jpg";
import Service2 from "../../images/service2.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import ThumbsUp from '@material-ui/icons/ThumbUpSharp';
import House from '@material-ui/icons/HouseOutlined';
import Team from '@material-ui/icons/Group';
import { Icon } from "@material-ui/core";
import Carousel from "../../Components/Carousel";
import { testimonialData } from "./constant";
import NextArr from "../../Components/Projects/NextArr";
import PrevArr from "../../Components/Projects/PrevArr";
import StarIcon from '@material-ui/icons/Star';
const renderRating = (data) => {
  let rating= [];
  for(let i = 1; i<= data; i++) {
    rating.push(<StarIcon/>);
  }
  return rating;
}
const Card = ({description, name, location, img_url, rating}) => {
  return (
    <div className="testimonial_card">
      <div className="testimonial_card_head">
        <img src={img_url} alt="customer"/>
        <div className="head_desc">
          <h3>{name}</h3>
          <small>{location}</small>
        </div>
      </div>
      <div className="testimonial_card_body">
        {description}
      </div>
      <div className="testimonial_card_footer">
        {renderRating(rating)}
      </div>
    </div>
  )
}
function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    nextArrow: <NextArr/>,
    prevArrow: <PrevArr/>
  };
  return (
    <>
      <div className="about_heading wrapper">
        <div className="about_left">
          <h1>About Us</h1>
          <h4>Our History</h4>
          <ScrollAnimation animateIn="animate__bounceInDown">
            <p>Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.</p>
          </ScrollAnimation>
        </div>
        <div className="about_right">
          <div className="image_container1">
            <ScrollAnimation animateIn="animate__slideInLeft">
              <img src={Service1} alt="service"/>
            </ScrollAnimation>
          </div>
          <div className="image_container2">
            <ScrollAnimation animateIn="animate__slideInRight">
            <img src={Service2} alt="service"/>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <About_banner />
      {/* INTRO */}
      {/* heading */}
      <div className="wrapper">
        <div className="heading">
          <hr />
          <h1> A Team United by Shared Values </h1>{" "}
        </div>{" "}
        <br></br>
        <br></br>
        {/* team design 2 */}
        <div className="out">
          <div className="person1">
            <div className="test_border">
              <img src={Person1} alt="Aditya Bhatnaker" className="about_img" />
            </div>
            <br></br>
            <div className="person1_intro">
              <p className="person_p">Director (Sales and marketing)</p>
              <br></br>
              <p className="person_name">Aditya Bhatnaker</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person2">
            <div className="test_border">
              <img src={Person2} alt="Archit Rathi" className="about_img" />
            </div>
            <br></br>
            <div className="person1_intro">
              <p className="person_p">Director (Designing and execution)</p>
              <br></br>
              <p className="person_name">Archit Rathi</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person3">
            <div className="test_border">
              <img src={Person2} alt="Divyanshi Singh" className="about_img" />
            </div>
            <br></br>
            <div className="person1_intro">
              <p className="person_p">Director (Execution and Planning)</p>
              <br></br>
              <p className="person_name">Kuldeep Bhatnaker</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person4">
            <div className="test_border">
              <img src={Person4} alt="Divyanshi Singh" className="about_img" />
            </div>

            <br></br>
            <div className="person1_intro">
              <p className="person_p">Chief Technical Officer</p>
              <br></br>
              <p className="person_name">Divyanshi Singh</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="banner2">
        <div className="durability">
          <ThumbsUp className="banner2_icon"/>
          <p className="banner2_1">Durability</p>
          <p className="banner2_2">Exclusive 10 year durable</p>
        </div>
        <div className="modern">
          <House className="banner2_icon"/>
          <p className="banner2_1">Modern interior</p>
          <p className="banner2_2">Exclusive 10 year warranty</p>
        </div>
        <div className="professional">
          <Team className="banner2_icon"/>
          <p className="banner2_1">Professional team</p>
          <p className="banner2_2">Many awards in the interior design</p>
        </div>
      </div>
      {/* quote */}
      <div className="extra_small"></div>
      <div className="quote">
        <p className="p_quote">
          “ We design your dreams and paint your imagination.
        </p>
        <p className="p_quote">
          We decorate your living and embelish your relations.”
        </p>
      </div>
      {/* Testimonial */}
      
      <div className="testimonial">
        <div className="heading">
          <hr />
          <h1>Thanks for your sweet words</h1>
        </div>
        <Carousel settings={settings}>
          {testimonialData.map((data) => (
            <div>
              <Card {...data}/>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default About;
