import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar"> 
            <div className="navbar__logo">
                
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
