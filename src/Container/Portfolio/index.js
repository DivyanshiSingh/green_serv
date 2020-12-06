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
        <div className="portfolio_left"></div>
        <div className="portfolio_right">
          <div className="portfolio-image-frame"> 
            {/* <img src="https://elanta.app/nazar/quarty-demo/dark/img/banners/banner3.jpg" alt="banner"/> */}
            <video autoPlay loop className="qrt-video-background" poster="img/video/bg-video-placeholder.jpg" muted>
                <source src="https://elanta.app/nazar/quarty-demo/dark/img/video/bg-video.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="port-overlay">
            <div className="port-desc">
              <h1>
                Our Works
              </h1>
              <hr/>
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
