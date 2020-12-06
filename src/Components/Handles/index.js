import React from "react";
import "./handles.css";
import Fb from "@material-ui/icons/Facebook";
import Insta from "@material-ui/icons/Instagram";
import Whatsapp from "@material-ui/icons/WhatsApp";
function Handles() {
  return (
    <div className="sticky_handles">
      <div className="icon2">
      <Insta style={{"fontSize": 35, "color": "#2b6b68"}}/>
        <a href="https://www.instagram.com/p/CHUkVjEjk5e/?igshid=xucg687ifvhq">GreenServ</a>
      </div>
      <div className="icon2">
      <Fb  style={{"fontSize": 35, "color": "#2b6b68"}}/>
        <a href="https://www.facebook.com/GreenservInteriors">GreenservInteriors</a>
      </div>
      <div className="icon2">
        <Whatsapp style={{"fontSize": 35, "color": "#2b6b68"}}/>
        <a>8373989676</a>
      </div>
    </div>
  );
}
export default Handles;
