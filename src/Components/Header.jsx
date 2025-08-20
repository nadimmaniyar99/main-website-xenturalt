import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);


  
  return (
    <div className="header-wrapper">
      <div className="top-bar">
        <div className="contact-info">
          <span className="icon">📧</span>
          <a href="mailto:info@xenturaltcodes.in">info@xenturaltcodes.in</a>
          <span className="icon phone">📞</span>
          <a href="tel:+917980110265">+91 7980 110 265</a>
        </div>
        <div className="offer">
          Book Now – Unlock Exclusive Digital Growth Offers.{' '}
          <a href="#">Claim Your Discount Today</a>
        </div>
      </div>

      <div className="main-nav">
        <div className="logo">
          <Link to="/">
      
       
          <img src="images/xen.png" alt="Xenturalt Logo" />
           </Link> 

        </div>
        <nav className="nav-links">
  <Link to="/about">About Us</Link>
  {/* <Link to="/services">Services
  </Link> */}
 
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-btn">Services ▾</button>
      {isOpen && (
        <ul className="dropdown-content">
          <li>
            {/* <a href="/android-development">Android Development</a> */}
           <Link to="/mobileApp">Android Development</Link>
            </li>
           <li>
            {/* <a href="/android-development">Android Development</a> */}
           <Link to="/webDev">Web Development</Link>
            </li>
         <li>
            {/* <a href="/android-development">Android Development</a> */}
           <Link to="/digiMark">Digital Marketing</Link>
            </li>
           <li>
            {/* <a href="/android-development">Android Development</a> */}
           <Link to="/cms">CMS</Link>
            </li>
        </ul>
      )}
    </div>
  <Link to="/ourwork">Our Work</Link>
  {/* <Link to="/our-work">Our Work</Link> */}
  <Link to="/careers">Career</Link>
  <Link to="/courses">Courses</Link>
  <Link to="/blogs">Blogs</Link>
  <Link to="/contact">Contact Us</Link> 
</nav>


        <div className="nav-buttons">
         
          <Link to="/constructionPage" >
           <button className="outline-btn">Explore Solutions ➜</button>
         
        </Link> 
         <Link to="/consult" >
           <button className="solid-btn">Book A Free Consultation➜</button>
         
        </Link> 
          {/* <button className="solid-btn">Book A Free Consultation ➜</button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
