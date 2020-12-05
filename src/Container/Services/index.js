import React from "react";
import "./services.css";
import Bottom from "../../Components/Bottom";

function Services() {
  return (
    <div>
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
      <div className="service_body">
        <div className="second">
          <div className="heading">
            <hr />
            <h1> We are ready to offer you following services </h1>{" "}
          </div>{" "}
          <br></br>
          <br></br>
        </div>

        {/* third divs containing services */}

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
      </div>
    </div>
  );
}

export default Services;
