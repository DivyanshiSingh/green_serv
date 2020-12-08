import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Logo from '../../images/Group2.png';
function Navbar() {
    return (
        <div className="navbar"> 
            <div className="navbar__logo">
                <img src={Logo} alt="logo" style={{height: "30px", width:"auto"}} />
                <p>GreenServ Interiors</p>
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
    )
}

export default Navbar
