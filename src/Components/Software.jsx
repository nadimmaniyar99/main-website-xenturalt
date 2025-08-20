import React, { useEffect } from 'react';
import './graphic.css';

import { Link } from 'react-router-dom';
import Footer from './Footer';

const Software = () => {
  useEffect(() => {
    fetch('/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      });

    fetch('/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;

        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
          scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }
      });
  }, []);

  return (
    <>
    <div>
      <div id="navbar"></div>

      <div className="breadcrumb">
        {/* <button className="back-button" onClick={() => window.location.href = '/'}>←</button> */}
        <span><strong>Software Design Course</strong></span>
      </div>

      <div className="course-header">
        <div className="left-content">
          <p className="new-label">#New</p>
          <h1 className="course-title">Software Developement Course</h1>
          <p className="course-desc">
            Learn the art of visual storytelling and digital creativity with our hands-on Graphic Design course. Perfect for aspiring designers, freelancers, and marketing professionals.
          </p>

          <p className="enroll-text">Seats Filling Fast. Enroll Now!</p>

          <div className="buttons">
            <button onClick={() => window.location.href = '404.html'}>Buy now</button>
            <button>&#8681;</button>
          </div>

          <p className="emi-text">* EMI Options Available</p>
        </div>

        <div className="right-content">
          <img src="images/software.jpg" alt="Graphic Design Course" />
        </div>
      </div>

      <div className="course-info">
        <div className="info-item">
          <h3>10 June 2025</h3>
          <p>Start Date</p>
        </div>
        <div className="info-item">
          <h3>3 Months</h3>
          <p>Course Duration</p>
        </div>
        <div className="info-item">
          <h3>English + Hindi</h3>
          <p>Language</p>
        </div>
        <div className="info-item">
          <h3>Portfolio + Freelance Projects</h3>
          <p>Career Support</p>
        </div>
        <div className="info-item">
          <h3>Live Sessions + Design Tasks</h3>
          <p>Learning Format</p>
        </div>
      </div>

      <div id="footer-placeholder"></div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Software;
