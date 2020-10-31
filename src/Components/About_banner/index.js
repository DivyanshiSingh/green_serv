import React from "react";
import "./About_banner.css";

function About_banner() {
  return (
    <div className="banner">
      <div className="tag">
        <p className="tag_p"> Architects with different approach</p>
      </div>
      <div className="awards">
        <p className="awards_no">4</p>
        <p className="awards_line">Awards Gained</p>
      </div>
      <div className="customers">
        <p className="customers_no">50</p>
        <p className="customers_line">Happy Customers</p>
      </div>
      <div className="years">
        <p className="years_no">5</p>
        <p className="years_line">Years Experience</p>
      </div>
    </div>
  );
}

export default About_banner;
