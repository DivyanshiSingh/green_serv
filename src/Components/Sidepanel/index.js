import React, { useState } from "react";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocalPhone from "@material-ui/icons/LocalPhone";
import Logo from "../../images/Group2.png";
import Sidebar3 from "../../images/service1.jpg";
import Sidebar4 from "../../images/service4.jpg";
import Sidebar5 from "../../images/service3.jpg";
import { Link } from "react-router-dom";
import './sidepanel.css';
import { motion } from "framer-motion";
const Sidepanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const initial = {
    x: 600,
    opacity: 0
  }
  const animate = {
    // translateX: -100
  }
  return (
    <div  className={sidebarOpen ? 'side_panel sidebar-open': 'side_panel'}>
      <div className="side_panel-btn">
        <div className="action" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <motion.div whileHover={{rotate: [0 ,180]}} transition={{duration: 0.5}}>
            <BubbleChartIcon className="action__icon" />
          </motion.div>
        </div>
        <div className="action_call">
          <LocalPhone className="action__icon-call" />
          <p>8373989676</p>
        </div>
      </div>
      <div className="sidebar">
        < div className="sidebar1">
          <div className="sidebar1_img">
          <img src={Logo} alt="company logo" className="company_logo" />
          </div>
          <div className="sidebar1_name">
          
            <p className="sidebar1_name_p1">GreenServ Interiors </p>
          </div>
        </ div>
        <div className="sidebar2">
          <div className="sidebar2_heading">
            <p className="sidebar2_heading_p">Related Works</p>
          </div>
        </div>
        <div className="sidebar3">
          <div className="sidebar3_img">
          <img src={Sidebar3} alt="company logo" className="sidebar3_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">INTERIOR DESIGNING</Link>
            {/* <p className="sidebar3_label_p">INTERIOR DESIGNING</p> */}
          </div>
        </div>
        <div className="sidebar4">
          <div className="sidebar4_img">
          <img src={Sidebar4} alt="company logo" className="sidebar4_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">QUALITY WOODWORKS</Link>
            {/* <p className="sidebar4_label_p">QUALITY WOODWORKS</p> */}
          </div>
        </div>
        <div className="sidebar4">
          <div className="sidebar4_img">
          <img src={Sidebar5} alt="company logo" className="sidebar4_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">ARCHITECTURE</Link>
            {/* <p className="sidebar4_label_p">ARCHITECTURE</p> */}
          </div>
        </div>
        <div className="sidebar_button">
        <Link to="/portfolio">VIEW ALL WORKS</Link>
           
          
        </div>
        
      </div> 
    </div>
  );
};

export default Sidepanel;