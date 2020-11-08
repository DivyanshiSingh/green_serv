import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import HomeTeam from "../../Components/Home_team";
import HomeHistoryImage1 from '../../images/home_history_img1.jpg';
import HomeHistoryImage2 from '../../images/home_history_img2.jpg';
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__tagline">
          <h1>iNNOVATE . iNNITIATE . iNTEGRATE</h1>
          <p>We make happy customers not sale.</p>
        </div>
        <div className="home__action">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="home__extra">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h1>GreenServ Interiors</h1>
        </ScrollAnimation>
      </div>
      <div className="flex-container">
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <img src={HomeHistoryImage1} className="img1" alt="study_image"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce>
        <img src={HomeHistoryImage2} className="img2" alt="study_image"/>
        </ScrollAnimation>
        <div className="text">
          <h1>History of Our Creation</h1>
          <div className="paragraph">
            <p>
              We believe that every customer has a right to know “what is
              inside”. At Greenserv, we follow a transparent customer centric
              approach and informs the customer about the raw material used,
              Quantities, Pricing factors and various other things related the
              project. This has made us the synonym of Quality and Trust in the
              market and have helped us in achieving the highest customer
              satisfaction in the vicinity so far.
            </p>
          </div>
          <div className="paragraph__read-more">
            <ArrowRightAltIcon className="arrow"/>
            <Link to="/about"> Read More </Link>
          </div>
          
        </div>
      </div>
      <div className="extra"></div>
      <HomeTeam />
    </>
  );
}

export default Home;
