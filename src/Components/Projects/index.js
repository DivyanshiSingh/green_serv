import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./styles.css";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "../Carousel";
import { Link } from "react-router-dom";
import Service1 from "../../images/gridImg2.jpg";
import Service2 from "../../images/gridImg25.jpg";
import Service3 from "../../images/gridImg6.jpg";
import Service4 from "../../images/gridImg7.jpg";
import NextArr from "./NextArr";
import PrevArr from "./PrevArr";


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    nextArrow: <NextArr/>,
    prevArrow: <PrevArr/>,
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
    <section className="projects">
      <div className="projects_left">
        <div className="heading">
          <hr />
          <h1>Our latest projects</h1>
        </div>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="projects_desc paragraph">
            <p>
            Since our inception, we never looked back and delivered numerous projects successfully. It includes flats, villas and independent houses. Here is a glimpse of few projects that we have executed the projects.
            </p>
          </div>
        </ScrollAnimation>
        <div className="paragraph__read-more">
          <ArrowRightAltIcon className="arrow" />
          <Link to="/portfolio">View More</Link>
        </div>
      </div>
      <div className="projects_right">
        {/* Use React slick here */}
        <Carousel settings={settings}>
          <div>
            <div className="carousel_img">
              <img src={Service1} alt="service1" />
            </div>
          </div>
          <div>
            <div className="carousel_img">
              <img src={Service2} alt="service1" />
            </div>
          </div>
          <div>
            <div className="carousel_img">
              <img src={Service3} alt="service1" />
            </div>
          </div>
          <div>
            <div className="carousel_img">
              <img src={Service4} alt="service1" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
