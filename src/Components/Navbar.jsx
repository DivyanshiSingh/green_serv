import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div> 
            
            <img class ="logo" src="images/logo.jpg" alt=" "/>

            
            <NavLink exact activeClassName="active-class" to="/blog">
                <div className="Navbar-elements">Blog</div> 
            </NavLink>
            <NavLink exact activeClassName="active-class" to="/contact">
                <div className="Navbar-elements">Contact Us</div> 
            </NavLink>
            <NavLink exact activeClassName="active-class" to="/portfolio"> 
                <div className="Navbar-elements">Portfolio</div>
            </NavLink>
            <NavLink exact activeClassName="active-class" to="/services"> 
                <div className="Navbar-elements">Services</div>
            </NavLink>
            <NavLink exact activeClassName="active-class" to="/about">
                <div className="Navbar-elements">About Us</div>
            </NavLink>
            <NavLink exact activeClassName="active-class" to="/"> 
                <div className="Navbar-elements">Home</div> 
            </NavLink>  
        </div>
    )
}

export default Navbar
