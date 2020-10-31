import React from "react";
import About_banner from "../../Components/About_banner/index";
import "./about.css";
import Bottom from "../../Components/Bottom";
import Person4 from "../../images/divyanshi.jpg";
import Person1 from "../../images/golu.jpg";
import Service1 from "../../images/service1.jpg";
import Service2 from "../../images/service2.jpg";
function About() {
  return (
    <div>
      <div className="about_heading wrapper">
        <div className="about_left">
          <h1>About Us</h1>
          <h4>Our History</h4>
          <p>Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.</p>
        </div>
        <div className="about_right">
          <div className="image_container1">
            <img src={Service1} alt="service"/>
          </div>
          <div className="image_container2">
            <img src={Service2} alt="service"/>
          </div>
        </div>
      </div>
      <About_banner />
      {/* INTRO */}
      {/* heading */}
      <div className="wrapper">
        <div className="heading">
          <hr />
          <h1> A Team United by Shared Values </h1>{" "}
        </div>{" "}
        <br></br>
        <br></br>
        {/* team design 2 */}
        <div className="out">
          <div className="person1">
            <div className="test_border">
              <img src={Person1} alt="Divyanshi Singh" className="about_img" />
            </div>
            <br></br>
            <div className="person1_intro">
              <p className="person_p">Chief Technical Officer</p>
              <br></br>
              <p className="person_name">Divyanshi Singh</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person2">
            <div className="test_border">
              <img src={Person1} alt="Divyanshi Singh" className="about_img" />
            </div>
            <br></br>
            <div className="person1_intro">
              <p className="person_p">Chief Technical Officer</p>
              <br></br>
              <p className="person_name">Divyanshi Singh</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person3">
            <div className="test_border">
              <img src={Person4} alt="Divyanshi Singh" className="about_img" />
            </div>
            <br></br>
            <div className="person1_intro">
              <p className="person_p">Chief Technical Officer</p>
              <br></br>
              <p className="person_name">Divyanshi Singh</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
          <div className="extra_out"></div>
          <div className="person4">
            <div className="test_border">
              <img src={Person4} alt="Divyanshi Singh" className="about_img" />
            </div>

            <br></br>
            <div className="person1_intro">
              <p className="person_p">Chief Technical Officer</p>
              <br></br>
              <p className="person_name">Divyanshi Singh</p>
              <br></br>
              <p className="person_introduction">
                Every Home has its own story and so the designing also differs.
                Our experienced designing team takes down your exact requirement
                and challenges in your existing setup. Basis that, we provide
                you with the best suitable designs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="banner2">
        <div className="durability">
          <p className="banner2_1">Durability</p>
          <p className="banner2_2">Exclusive 10 year durable</p>
        </div>
        <div className="modern">
          <p className="banner2_1">Modern interior</p>
          <p className="banner2_2">Exclusive 10 year warranty</p>
        </div>
        <div className="professional">
          <p className="banner2_1">Professional team</p>
          <p className="banner2_2">Many awards in the interior design</p>
        </div>
      </div>
      {/* quote */}
      <div className="extra_small"></div>
      <div className="quote">
        <p className="p_quote">
          “ We design your dreams and paint your imagination.
        </p>
        <p className="p_quote">
          We decorate your living and embelish your relations.”
        </p>
      </div>
      {/* bottom contact */}
      <div className="extra_small"></div>
    </div>
  );
}

export default About;
