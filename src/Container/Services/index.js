import React from "react";
import "./services.css";
import Bottom from "../../Components/Bottom";
import { motion } from "framer-motion";
import { containerVariant } from "../../Utils/config";
import HouseDesign from "../../images/about-03.jpg";
import { Link } from "react-router-dom";
import Stepper from "../../Components/Stepper";
import  {ReactComponent as DesignSerice}  from "../../images/design.svg";
import  {ReactComponent as Handy}  from "../../images/handy.svg";
import {ReactComponent as Home} from '../../images/house.svg';

function Services() {
  return (
    <motion.div
      className="main-wrapper"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="first">
        <div className="chapter">
          <h1 className="chapter1">Services</h1>

          <h3 className="chapter2">Please review our services</h3>
          <p>
            Our mission is to help every home buyer to provide all the Interior
            related services under one roof and that is why we offer a range of
            services to help you achieve the results you’re after.
          </p>
        </div>
        <div className="chapter_holder">
          <div className="chapter_img"></div>
        </div>
      </div>
      {/* second */}

      <div className="service_port">
        <div className="service_port_wrapper">
          <div className="service_port_row">
            <div className="service_port-left">
              <div className="service_port-content">
                <span>Turn A Home Into Your Space</span>
                <div className="headline">
                  <h1>Let's talk interior design</h1>
                </div>
                <div className="headline-content">
                  <p>
                    Our mission is to help every home buyer to provide all the
                    Interior related services under one roof and that is why we
                    offer a range of services to help you achieve the results
                    you’re after.
                  </p>
                </div>
                <div className="headline-btn">
                  <Link to="/portfolio">VIEW PROJECTS</Link>
                </div>
              </div>
            </div>
            <div className="service_port-right">
              <Link to="/portfolio">
                <img src={HouseDesign} alt="design" />

                <div className="design-content">
                  <div className="service_port_img-content">
                    <h3>View More of Our</h3>
                    <h1>Projects</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <hr />
          <div className="service_stepper">{/* <Stepper/> */}</div>
        </div>
      </div>

      <div className="service_desc">
        <div className="service_desc-wrapper">
          <div className="service_desc-header">
            <span>In a nuthell</span>
            <div className="headline">
              <h1>Our Services</h1>
            </div>
            <div className="headline-content">
              Let's build something together. Here are the services we offer.
            </div>
          </div>

          <hr />
          
        </div>
        <div className="service_desc-content">
            <div className="service_desc-item">
              <DesignSerice />
              <div className="service_desc_item_head">
                <h3>Design Services</h3>
              </div>
              <div className="service_desc_item-content">
                <p>
                  Every Home has its own story and so the designing also
                  differs. Our experienced designing team takes down your exact
                  requirement and challenges in your existing setup. Basis that,
                  we provide you with the best suitable designs.
                </p>
              </div>
            </div>
            <div className="service_desc-item">
              <Handy />
              <div className="service_desc_item_head">
                <h3>Quality Woodwork</h3>
              </div>
              <div className="service_desc_item-content">
                <p>
                  If we talk about today’s market condition, we can see that how
                  people are getting fooled by local carpenters on the name of
                  Interior Designing. Being novice, they easily come into their
                  trap and ended up loosing their money for very low quality
                  works. We at Greenserv, assures our customer about the raw
                  material used in the whole process and best quality. Our
                  continuous efforts towards the technological enhancement
                  enables us to achieve the elegant designs.
                </p>
              </div>
            </div>
            <div className="service_desc-item">
              <Home />
              <div className="service_desc_item_head">
                <h3>Home Improvement</h3>
              </div>
              <div className="service_desc_item-content">
                <p>
                  We will not leave until we make your Dream Home and that is
                  why we provide complete interior solutions under one roof.
                  Designer False Ceilings Express Painting Wallpapers Civil
                  Works
                </p>
              </div>
            </div>
          </div>
      </div>

      {/* End of service descriptiom */}
      {/* <div className="service_body">
        <div className="second">
          <div className="heading">
            <hr />
            <h1> We are ready to offer you following services </h1>{" "}
          </div>{" "}
          <br></br>
          <br></br>
        </div>

        

        <div className="service1">
          <div className="service_img1"></div>
          <div className="service_para">
            <p className="service_para_1">Interior design</p>
            <p className="service_para_2">
              If we talk about today’s market condition, we can see that how
              people are getting fooled by local carpenters on the name of
              Interior Designing. Being novice, they easily come into their trap
              and ended up loosing their money for very low quality works. We at
              Greenserv, assures our customer about the raw material used in the
              whole process and best quality.
            </p>
          </div>
        </div>
        <div className="extra_small"></div>
        <div className="service1">
          <div className="service_img2"></div>
          <div className="service_para">
            <p className="service_para_1">Architectural development</p>
            <p className="service_para_2">
              If we talk about today’s market condition, we can see that how
              people are getting fooled by local carpenters on the name of
              Interior Designing. Being novice, they easily come into their trap
              and ended up loosing their money for very low quality works. We at
              Greenserv, assures our customer about the raw material used in the
              whole process and best quality.
            </p>
          </div>
        </div>
        <div className="extra_small"></div>
        <div className="service1">
          <div className="service_img3"></div>
          <div className="service_para">
            <p className="service_para_1">Kitchen interiors</p>
            <p className="service_para_2">
              If we talk about today’s market condition, we can see that how
              people are getting fooled by local carpenters on the name of
              Interior Designing. Being novice, they easily come into their trap
              and ended up loosing their money for very low quality works. We at
              Greenserv, assures our customer about the raw material used in the
              whole process and best quality.
            </p>
          </div>
        </div>
        <div className="extra_small"></div>
        <div className="service1">
          <div className="service_img4"></div>
          <div className="service_para">
            <p className="service_para_1">Furniture</p>
            <p className="service_para_2">
              If we talk about today’s market condition, we can see that how
              people are getting fooled by local carpenters on the name of
              Interior Designing. Being novice, they easily come into their trap
              and ended up loosing their money for very low quality works. We at
              Greenserv, assures our customer about the raw material used in the
              whole process and best quality.
            </p>
          </div>
        </div>
        <div className="extra"></div>
      </div> */}
    </motion.div>
  );
}

export default Services;
