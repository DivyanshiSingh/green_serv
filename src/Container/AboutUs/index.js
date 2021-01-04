import React from "react";
import About_banner from "../../Components/About_banner/index";
import "./about.css";
import Bottom from "../../Components/Bottom";
import Person5 from "../../images/divyanshi.jpg";
import Person1 from "../../images/aditya.jpg";
import Person2 from "../../images/golu.jpg";
import Person4 from "../../images/rishabh.jpg";
import Person3 from "../../images/golu.jpg";
import Panel from "../../images/image_outer.jpg";

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
import { motion } from "framer-motion";
import { containerVariant } from "../../Utils/config";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
    prevArrow: <PrevArr/>,
    responsive: [
      {
        breakpoint:  480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          dots: true,
        }
      }
    ]
  };
  return (
    <motion.div
      className="main-wrapper footer-space"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="about_heading wrapper">
        <div className="about_left">
          <h1>About Us</h1>
          <h4>Our History</h4>
          <ScrollAnimation animateOnce animateIn="animate__bounceInDown">
            <p>We believe that every customer has a right to know “what is inside”. At Greenserv, we follow a transparent customer centric approach and informs the customer about the raw material used, Quantities, Pricing factors and various other things related the project. This has made us the synonym of Quality and Trust in the market and have helped us in achieving the highest customer satisfaction in the vicinity so far.</p>
          </ScrollAnimation>
        </div>
        <div className="about_right">
          <div className="image_container1">
            <ScrollAnimation animateOnce animateIn="animate__slideInLeft">
              <img src={Service1} alt="service"/>
            </ScrollAnimation>
          </div>
          <div className="image_container2">
            <ScrollAnimation animateOnce animateIn="animate__slideInRight">
            <img src={Service2} alt="service"/>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <About_banner />
      {/* Shared Values */}

      <div className="wrapper">
      <div className="heading">
          <hr />
          <h1> Our Shared Values </h1>{" "}
        </div>{" "}
      <div className="wrapper2">
      <div className="content">
      <p className="bold">
        Hassle Free services- 
        </p>
        
        <p className="non_bold">
        Whenever we think about the home buyers, we feel that they are afflicted from every aspect. So, we have thought of a company where the customer does not feel insecure. We at Greenserv, guarantees you for a hassle free entry in your Dream home.
        </p>
        <br></br>
        <p className="bold">
        Customer is the King- 
        </p>
        <p className="non_bold">
        “Forget about your competitors, just focus on the Customer”- Jack Ma.
We work in the same direction and always show us our flexible attitude be it any kind of situation.

        </p>
        <br></br>
        <p className="bold">
        Excellence gives Success- 
        </p>
        <p className="non_bold">
        There is no life without learning because it helps you to get success. We would like to learn at every stage and in our every project to bring out the excellence. Our vision is just to become a synonym of Quality and excellence in the industry.

        </p>

      </div>
        
      
      <div className="image_wrapper">
      <img src={Panel} alt="panel image"/>

      </div>
      </div>
      </div>

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
            
            <div className="person1_intro">
              <p className="person_p">Director (Sales and marketing)</p>
              
              <p className="person_name">Aditya Bhatnager</p>
              
              <div className="person_footer">
              
        <a className="anchorr" href="https://www.linkedin.com/in/aditya-bhatnagar-54376a36/"><LinkedInIcon  style={{"fontSize": 25, "color": "#1666C2"}}/></a>
              </div>
              
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person2">
            <div className="test_border">
              <img src={Person2} alt="Archit Rathi" className="about_img" />
            </div>
            
            <div className="person1_intro">
              <p className="person_p">Director (Designing and execution)</p>
              
              <p className="person_name">Archit Rathi</p>
              
              <div className="person_footer">
              
        <a href="https://www.linkedin.com/in/archit-rathi-5a9a9a125/"><LinkedInIcon  style={{"fontSize": 25, "color": "#1666C2"}}/></a>
        </div>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person3">
            <div className="test_border">
              <img src={Person3} alt="Kuldeep Bhatnaker" className="about_img" />
            </div>
            
            <div className="person1_intro">
              <p className="person_p">Director (Execution and Planning)</p>
              
              <p className="person_name">Kuldeep Bhatnager</p>
             
              <div className="person_footer">
              
        <a href="#"><LinkedInIcon  style={{"fontSize": 25, "color": "#1666C2"}}/></a>
        </div>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person3">
            <div className="test_border">
              <img src={Person4} alt="Kuldeep Bhatnaker" className="about_img" />
            </div>
            
            <div className="person1_intro">
              <p className="person_p">Senior Designer</p>
              
              <p className="person_name">Rishabh Kankaria</p>
              
              <div className="person_footer">
              
        <a href="#"><LinkedInIcon  style={{"fontSize": 25, "color": "#1666C2"}}/></a>
        </div>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person4">
            <div className="test_border">
              <img src={Person5} alt="Divyanshi Singh" className="about_img" />
            </div>

            
            <div className="person1_intro">
              <p className="person_p">Chief Technical Officer</p>
              
              <p className="person_name">Divyanshi Singh</p>
              
              <div className="person_footer">
              
        <a href="https://www.linkedin.com/in/divyanshi-singh-81a77a18b/"><LinkedInIcon  style={{"fontSize": 25, "color": "#1666C2"}}/></a>
        </div>
        
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
      
    </motion.div>
  );
}

export default About;
