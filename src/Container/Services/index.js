import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import { containerVariant } from "../../Utils/config";
import HouseDesign from "../../images/about-03.jpg";
import { Link } from "react-router-dom";
import { ReactComponent as DesignSerice } from "../../images/design.svg";
import { ReactComponent as Handy } from "../../images/handy.svg";
import { ReactComponent as Home } from "../../images/house.svg";
import { ReactComponent as Decorator } from "../../images/decorator.svg";

function Services() {
  return (
    <motion.div
      className="main-wrapper footer-space"
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
            Today, every home is not Vastu compliant. Hence , we do the
            designing inspired by Vastu Shastra and helps our Clients in getting
            maximum benefits from each direction.
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
              <h3>Construction Services</h3>
            </div>
            <div className="service_desc_item-content">
              <p>
                It would not be wrong if say that the construction is in our
                blood. We have been into construction industry from past 30
                years and have delivered numerous projects like residential
                buildings, Temples and Ashrams, Permanent and temporary
                structures of Factories, Hospitals. We have a dedicated team of
                Architects, Civil Engineers, Finishing engineers which make us a
                one stop solution for all your construction related
                requirements.
              </p>
            </div>
          </div>
          <div className="service_desc-item">
            <Handy />
            <div className="service_desc_item_head">
              <h3>High Quality Woodwork</h3>
            </div>
            <div className="service_desc_item-content">
              <p>
                If we talk about today’s market condition, we can see that how
                people are getting fooled by local carpenters on the name of
                Interior Designing. Being novice, they easily come into their
                trap and ended up losing their money for very low quality works.
                We at Greenserv, assures our customer about the raw material
                used in the whole process and best quality. Our continuous
                efforts towards the technological enhancement enable us to
                achieve the elegant designs be it Wardrobes, Modular Kitchen,
                study table, Crockery unit, Led Console etc.
              </p>
            </div>
          </div>
          <div className="service_desc-item">
            <Home />
            <div className="service_desc_item_head">
              <h3>Interior Design</h3>
            </div>
            <div className="service_desc_item-content">
              <p>
                Most of the Interior design companies work with the freelancers
                or outsource their designing task. But we believe that the
                design is a very first stage of any furniture item and should be
                taken care of like an infant. If we outsource it to the other
                person who does not have feelings attached to it, he would not
                be able to make it in a proper way.
              </p>
            </div>
          </div>
          <div className="service_desc-item">
            <Decorator />
            <div className="service_desc_item_head">
              <h3>Interior Decorator</h3>
            </div>
            <div className="service_desc_item-content">
              <p>
                Interiors decoration is not just putting decorative items in the
                house, it is all about aesthetics. We first fetch out the
                customer taste and then put all our efforts to make their raw
                place a “jhakkas one”. Be it false ceiling, wallpapers, paint
                services, complete decoration, we have a separate in-house
                division for all the interior requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </motion.div>
  );
}

export default Services;
