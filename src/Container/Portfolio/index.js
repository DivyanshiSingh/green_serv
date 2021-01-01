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
import GridImg1 from "../../images/gridImg1.jpg";
import GridImg2 from "../../images/gridImg2.jpg";
import GridImg3 from "../../images/gridImg3.jpg";
import GridImg4 from "../../images/gridImg4.jpg";
import GridImg5 from "../../images/gridImg5.jpg";
import GridImg6 from "../../images/gridImg6.jpg";
import GridImg7 from "../../images/gridImg7.jpg";
import GridImg8 from "../../images/gridImg8.jpg";
import GridImg9 from "../../images/gridImg9.jpg";
import GridImg10 from "../../images/gridImg10.jpg";
import GridImg11 from "../../images/gridImg11.jpg";
import GridImg12 from "../../images/gridImg12.jpg";
import GridImg13 from "../../images/gridImg13.jpg";
import GridImg14 from "../../images/gridImg14.jpg";
import GridImg15 from "../../images/gridImg15.jpg";
import GridImg16 from "../../images/gridImg16.jpg";
import GridImg17 from "../../images/gridImg17.jpg";
import GridImg18 from "../../images/gridImg18.jpg";
import GridImg19 from "../../images/gridImg19.jpg";
import GridImg20 from "../../images/gridImg20.jpg";
import GridImg21 from "../../images/gridImg21.jpg";
import GridImg22 from "../../images/gridImg22.jpg";
import GridImg23 from "../../images/gridImg23.jpg";
import GridImg24 from "../../images/gridImg24.jpg";
import GridImg25 from "../../images/gridImg25.jpg";
import GridImg26 from "../../images/gridImg26.jpg";
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
                    src={GridImg3}
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
                    src={GridImg4}
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

            {/* for third */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg5}
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
                    src={GridImg6}
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


            {/* for forth */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg7}
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
                    src={GridImg8}
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
            {/* fifth */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg9}
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
                    src={GridImg10}
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

            {/* sixth */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg11}
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
                    src={GridImg12}
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

            {/* seventh */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg13}
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
                    src={GridImg14}
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

            {/* eigth */}

            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg15}
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
                    src={GridImg16}
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

            {/* ninth */}

            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg17}
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
                    src={GridImg18}
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

            {/* tenth */}

            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg19}
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
                    src={GridImg20}
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

            {/* eleventh */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg21}
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
                    src={GridImg22}
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
            {/* twelvth */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg23}
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
                    src={GridImg24}
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
            
            {/* fifth */}
            <div className="port-grid-1">
              <div className="grid-left">
                <div className="grid-left-img">
                  <img
                    src={GridImg25}
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
                    src={GridImg26}
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
