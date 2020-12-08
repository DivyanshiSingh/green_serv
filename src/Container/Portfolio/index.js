import React from "react";
import "./portfolio.css";
import Service1 from "../../images/service1.jpg";
import Service2 from "../../images/service2.jpg";
import Service3 from "../../images/service3.jpg";
import Service4 from "../../images/service4.jpg";
import NextArr from "../../Components/Projects/NextArr";
import PrevArr from "../../Components/Projects/PrevArr";
import Carousel from "../../Components/Carousel";
import { motion } from "framer-motion";
import { containerVariant } from "../../Utils/config";
import { Link } from "react-router-dom";
import GridImg1 from "../../images/service1.jpg";
import GridImg2 from "../../images/service3.jpg";
function Portfolio() {
  return (
    <motion.div
      className="main-wrapper"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="portfolio">
        {/* For left */}
        <div className="portfolio_left">
          <div className="port-grid">
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg1}
                    alt="study_image"
                    className="grid-left-image"
                  />
                </div>
                <div className="grid-left-heading">
                  <p className="grid-heading-left-1">Make Decor Lively</p>
                  <p className="grid-heading-left-2">Design / Lively</p>
                </div>
              </div>
              <div className="grid-right">
                <div className="grid-right-img">
                  <img
                    src={GridImg2}
                    alt="study_image"
                    className="grid-right-image"
                  />
                </div>
                <div className="grid-right-heading">
                  <p className="grid-heading-right-1">Welcome To The Future</p>
                  <p className="grid-heading-right-2">Architecture / Interior</p>
                </div>
              </div>
            </div>
            {/* second */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg1}
                    alt="study_image"
                    className="grid-left-image"
                  />
                </div>
                <div className="grid-left-heading">
                  <p className="grid-heading-left-1">Make Decor Lively</p>
                  <p className="grid-heading-left-2">Design / Lively</p>
                </div>
              </div>
              <div className="grid-right">
                <div className="grid-right-img">
                  <img
                    src={GridImg2}
                    alt="study_image"
                    className="grid-right-image"
                  />
                </div>
                <div className="grid-right-heading">
                  <p className="grid-heading-right-1">Welcome To The Future</p>
                  <p className="grid-heading-right-2">Architecture / Interior</p>
                </div>
              </div>
            </div>
            {/* third */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg1}
                    alt="study_image"
                    className="grid-left-image"
                  />
                </div>
                <div className="grid-left-heading">
                  <p className="grid-heading-left-1">Make Decor Lively</p>
                  <p className="grid-heading-left-2">Design / Lively</p>
                </div>
              </div>
              <div className="grid-right">
                <div className="grid-right-img">
                  <img
                    src={GridImg2}
                    alt="study_image"
                    className="grid-right-image"
                  />
                </div>
                <div className="grid-right-heading">
                  <p className="grid-heading-right-1">Welcome To The Future</p>
                  <p className="grid-heading-right-2">Architecture / Interior</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For right */}
        <div className="portfolio_right">
          <div className="portfolio-image-frame">
            {/* <img src="https://elanta.app/nazar/quarty-demo/dark/img/banners/banner3.jpg" alt="banner"/> */}
            <video autoPlay loop muted>
              <source
                src="https://elanta.app/nazar/quarty-demo/dark/img/video/bg-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="port-overlay">
            <div className="port-hint">
              <span></span>
            </div>
            <div className="port-desc">
              <h1>Our Works</h1>
              <hr />
              <p>Review Our Works</p>
              <Link to="/contact">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
