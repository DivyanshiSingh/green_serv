import React from "react";
import Stepper from "../Stepper";
import "./Home_team.css";

function HomeTeam() {
  return (
    <div className="container">
      <div className="team">
        <div className="heading">
          <hr />
          <h1> A Team United by Shared Values </h1>{" "}
        </div>{" "}
        <div className="outer_team">
          <div className="number_outer">
            <p className="number"> 4 </p>{" "}
            <h1 className="number_tag"> Professional Designers in our team </h1>{" "}
          </div>{" "}
          <div className="image_outer">
            <div className="image_line1">
              <div className="team_img1"> </div>{" "}
              <div className="team_img2"> </div>{" "}
            </div>
            <div className="image_line2">
              <div className="team_img3"> </div>{" "}
              <div className="team_img4"> </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="process">
        <div className="heading">
          <hr />
          <h1>Our process to make you dream true</h1>
        </div>
        <Stepper/>
      </div>
    </div>
  );
}

export default HomeTeam;
