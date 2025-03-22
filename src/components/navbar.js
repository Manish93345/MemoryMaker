import React from "react";
import demoImage from './demo.png'
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        
        <div className='nav_bar'>
          <div className='logo'>
            <img src={demoImage} className='logo_image'/>
            <p className="logo_name"><a href="#">Memory Maker</a></p>
          </div>

          <div className='menu'>
            <ul className="menu_items">
              <li><a href='#' className='navmenu_link'>Home</a></li>
              <li><a href='#' className='navmenu_link'>Portfolio</a></li>
              <li><a href='#' className='navmenu_link'>Blog</a></li>
              <li><a href='#' className='navmenu_link'>Contact Us</a></li>
              <li><a href='#' className='primary_btn' id='book'>Book Now</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;