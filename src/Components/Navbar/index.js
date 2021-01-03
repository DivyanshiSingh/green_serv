import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/Group2.png";
import Drawer from "@material-ui/core/Drawer";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles({
  list: {
    width: 200,
  },
  root: {
    background: "teal",
  },
  fullList: {
    width: "auto",
  },
});
function Navbar() {
  const classes = useStyles();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" style={{ height: "30px", width: "auto" }} />
        <p>GreenServ Interiors</p>
      </div>
      <div className="navbar__hamburger">
        <IconButton>
          <MenuIcon onClick={() => setToggleDrawer(true)} />
        </IconButton>
        <Drawer
          classes={"drawer"}
          anchor="right"
          open={toggleDrawer}
          onClose={() => setToggleDrawer(false)}
        >
          <ul className={`${classes.list} drawer-list`}>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
              <HomeIcon /> |{" "}
              <Link exact activeClassName="active-class" to="/">
                Home
              </Link>
            </li>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
							<InfoIcon/> |
              <Link exact activeClassName="active-class" to="/about">
                About Us
              </Link>
            </li>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
							<EmojiPeopleIcon/> |
              <Link exact activeClassName="active-class" to="/services">
                Services
              </Link>
            </li>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
							<InsertPhotoIcon/> |
              <Link exact activeClassName="active-class" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
							<PhoneIcon/> |
              <Link exact activeClassName="active-class" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
      <div className="navbar__nav">
        <div className="navbar__elements">
          <Link exact activeClassName="active-class" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="navbar__elements">
          <Link exact activeClassName="active-class" to="/portfolio">
            Portfolio
          </Link>
        </div>
        <div className="navbar__elements">
          <Link exact activeClassName="active-class" to="/services">
            Services
          </Link>
        </div>
        <div className="navbar__elements">
          <Link exact activeClassName="active-class" to="/about">
            About Us
          </Link>
        </div>
        <div className="navbar__elements">
          <Link exact activeClassName="active-class" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
