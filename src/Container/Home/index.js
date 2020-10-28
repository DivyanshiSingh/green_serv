import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Home_team from "../../Components/Home_team";

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
      <h1>GreenServ Interiors</h1>
    </div>
    <div className="flex-container">
  <div className="img1"></div>
  <div className="img2"></div>
  <div className="text"> 
  <h1>History of Our Creation</h1>
  <div className="paragraph">
  <p>
  We believe that every customer has a right to know “what is inside”. At Greenserv, we follow a transparent customer centric approach and informs the customer about the raw material used, Quantities, Pricing factors and various other things related the project. This has made us the synonym of Quality and Trust in the market and have helped us in achieving the highest customer satisfaction in the vicinity so far.
  </p>
  <div className="extra"></div>
  <ArrowRightAltIcon style={{color:" #02375e" ,fontSize: 80 }}></ArrowRightAltIcon>
  </div>

  
  </div>  

  </div>
  <div className="extra"></div>
  <Home_team/>
    </>
  );
    
}

export default Home;
