import React, { useState } from "react";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocalPhone from "@material-ui/icons/LocalPhone";
import './sidepanel.css';
const Sidepanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="side_panel">
      <div className="side_panel-btn">
        <div className="action" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <BubbleChartIcon className="action__icon" />
        </div>
        <div className="action_call">
          <LocalPhone className="action__icon-call" />
          <p>9616457330</p>
        </div>
      </div>
      {sidebarOpen ? 
      <div className="sidebar">
        {/* Code the sidebar inside this div */}
      </div> 
      : null}
    </div>
  );
};

export default Sidepanel;
