import React from 'react';
import './portfolio.css';
import Service1 from "../../images/service1.jpg";
import Service2 from "../../images/service2.jpg";
import Service3 from "../../images/service3.jpg";
import Service4 from "../../images/service4.jpg";
import NextArr from '../../Components/Projects/NextArr';
import PrevArr from '../../Components/Projects/PrevArr';
import Carousel from '../../Components/Carousel';
import { motion } from "framer-motion";

function index() {
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
      <motion.div 
    exit={{opacity:0}} 
    animate={{opacity: 1}}
    exit={{opacity:0}}
     >
        <div>
            <div className="first">
                <div className="chapter">
                    <p className="chapter1">
                        Portfolio
                    </p>
                   
                    <p className="chapter2">
                        Our work cases
                    </p>
                </div>
                <div className="chapter_img2">
                    

                </div>
            </div>

            <div className="extra"></div>
            <div className="extra"></div>
            <div className="extra"></div>
            <div className="second">
            <div className="heading">
            <hr />
            <h1> See our best projects </h1>{" "}
            </div>{" "}
            <br></br>
            
            </div>

            {/* quote */}

            <div className="describe">
                <p className="description">
                Since our humble beginning in 2015, We have significantly expanded our collection of exclusive lamps. Today we are proud to present you our best lighting design solutions. Since our inception, we never looked back and delivered numerous projects successfully. It includes flats, villas and independent houses.
                </p>
            </div>
            {/* carousel */}
            <div className="projects_right">

            
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
        </div>
        </motion.div>
    )
}

export default index
