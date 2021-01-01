import React, { useState } from "react";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocalPhone from "@material-ui/icons/LocalPhone";
import Logo from "../../images/Group2.png";
import Sidebar3 from "../../images/gridImg2.jpg";
import Sidebar4 from "../../images/gridImg5.jpg";
import Sidebar5 from "../../images/gridImg7.jpg";
import Sidebar7 from "../../images/gridImg8.jpg";
import Sidebar8 from "../../images/gridImg12.jpg";
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
        <div className="sidebar-content">

        
        <div className="sidebar1">
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
        <div className="sidebar-list">
          <div className="sidebar3_img">
          <img src={Sidebar5} alt="company logo" className="sidebar3_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">INTERIOR DESIGNING</Link>
            {/* <p className="sidebar3_label_p">INTERIOR DESIGNING</p> */}
          </div>
        </div>
        <div className="sidebar-list">
          <div className="sidebar3_img">
          <img src={Sidebar4} alt="company logo" className="sidebar4_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">QUALITY WOODWORKS</Link>
            {/* <p className="sidebar4_label_p">QUALITY WOODWORKS</p> */}
          </div>
        </div>
        <div className="sidebar-list">
          <div className="sidebar3_img">
          <img src={Sidebar3} alt="company logo" className="sidebar4_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">ARCHITECTURE</Link>
            {/* <p className="sidebar4_label_p">ARCHITECTURE</p> */}
          </div>
        </div>
        <div className="sidebar-list">
          <div className="sidebar3_img">
          <img src={Sidebar7} alt="company logo" className="sidebar3_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">INTERIOR DESIGNING</Link>
            {/* <p className="sidebar3_label_p">INTERIOR DESIGNING</p> */}
          </div>
        </div>
        <div className="sidebar-list">
          <div className="sidebar3_img">
          <img src={Sidebar8} alt="company logo" className="sidebar3_img1" />
          </div>
          <div className="sidebar4_label">
          <Link to="/services">INTERIOR DESIGNING</Link>
            {/* <p className="sidebar3_label_p">INTERIOR DESIGNING</p> */}
          </div>
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
