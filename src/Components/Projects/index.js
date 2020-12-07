import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./styles.css";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "../Carousel";
import { Link } from "react-router-dom";
import Service1 from "../../images/service1.jpg";
import Service2 from "../../images/service2.jpg";
import Service3 from "../../images/service3.jpg";
import Service4 from "../../images/service4.jpg";
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
    prevArrow: <PrevArr/>
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
              A paragraph is a series of sentences that are organized and
              coherent, and are all related to a single topic. Almost every
              piece of writing you do that is longer than a few sentences should
              be organized into paragraphs. This is because paragraphs show a
              reader where the subdivisions of an essay begin and end, thus help
              the reader see the organization of the essay and grasp its main
              points.
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
