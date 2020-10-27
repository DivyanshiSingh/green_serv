import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
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
    </>
  );
    
}

export default Home;
