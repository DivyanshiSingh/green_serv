import React, { useState } from "react";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocalPhone from "@material-ui/icons/LocalPhone";
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
      
      <div className= 'sidebar'>
        {/* Code the sidebar inside this div */}
        <div className="sidebar__heading">
        <h3>Greenserv Interiors</h3>
        </div>
        
      </div> 
    </div>
  );
};

export default Sidepanel;
