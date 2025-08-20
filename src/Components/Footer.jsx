import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for scheduling a call! We will contact you shortly.");
    closePopup();
    e.target.reset();
  };

  return (
    <>
      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-container">
          <div className="cta-text">
            <h2>Ready to Elevate Your Digital Presence?</h2>
            <p>Let's turn your vision into a high-performing digital reality.</p>
          </div>
          <div className="cta-button">
            <button className="schedule-btn" onClick={openPopup}>
              Schedule A Call →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src="images/xen.png" alt="Company Logo" className="logo" />
            <p>📞 +91 7980 110 265</p>
            <p>📧 info@xenturaltcodes.in</p>
            <p>📍 SPO 208, Second floor<br />Sector 124, Sunny Enclave Mohali</p>
            <p>UAE (WhatsApp): +971 55 164 9266</p>
            {/* <p>Canada (WhatsApp): +1 (416) 858-7595</p> */}
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h4>COMPANY</h4>
              <ul>
                <li>
                  {/* <a href="About-us.html">About Us</a> */}
                   <Link to="/about">About Us</Link>
                  </li>
              <li>
                <Link to="/blogs">Portfolio</Link>
                  </li>
                <li>
                <Link to="/careers">Career</Link>
                  </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>RESOURCES</h4>
              <ul>
                 <li>
                <Link to="/blogs">Blogs</Link>
                  </li>
                 
            <li>
                <Link to="/faq">FAQ</Link>
                  </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>SERVICES</h4>
              <ul>
                <li>
                 
                <Link to="/webDev">Web Development</Link>
                  </li>
                  <li>
                 
                <Link to="/digiMark">Social Media Marketing</Link>
                  </li>
                   <li>
                 
                <Link to="/mobileApp">Mobile App Development</Link>
                  </li>
                  <li>
                    <li>
                 
                <Link to="/digiMark">SEO Services</Link>
                  </li>
                 
                <Link to="/cms">CMS Development</Link>
                  </li>
                {/* <li><a href="web-development.html">Web Development</a></li>
                <li><a href="Android.html">Mobile App Development</a></li>
                <li><a href="digital-ser.html">SEO Services</a></li>
                <li><a href="wordpress-development.html">WordPress Development</a></li>
                <li><a href="digital-ser.html">Social Media Marketing</a></li> */}
              </ul>
            </div>
            <div className="footer-column">
              <h4>LEGAL</h4>
              <ul>
             <li>
                <Link to="/privacy">Privacy Policy</Link>
                  </li>
                 <li>
                <Link to="/return">Return and Refund policy</Link>
                  </li>
               <li>
                <Link to="/privacy">Terms & Conditions</Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-section">
          <div className="social-icons">
            <div className="social-icons-left">
              <a href="#"><img src="/images/google.jpeg" alt="Agency" /></a>
            </div>
            <div className="social-icons-right">
              <a href="https://www.facebook.com/profile.php?id=61572697829955"><img src="images/facebook.png" alt="Facebook" /></a>
              <a href="https://www.linkedin.com/company/xenturalt-codes-it-solution/posts/?feedView=all"><img src="images/linkd.png" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Powered By Xenturalt Codes IT Solution © 2025. All rights reserved.</p>
          <div className="footer-icons">
            <img src="images/payment.jpeg" alt="Payment Methods" className="payment-icon" />
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="store-badge" />
            </a>
          </div>
          <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            ↑
          </button>
        </div>
      </footer>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={(e) => e.target.className === "popup-overlay" && closePopup()}>
          <div className="popup-content">
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>Schedule a Call with Our Team</h2>
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="popup-group">
                <label htmlFor="popupFirstName">First Name</label>
                <input type="text" id="popupFirstName" name="popupFirstName" required />
              </div>
              <div className="popup-group">
                <label htmlFor="popupLastName">Last Name</label>
                <input type="text" id="popupLastName" name="popupLastName" required />
              </div>
              <div className="popup-group">
                <label htmlFor="popupEmail">E-mail</label>
                <input type="email" id="popupEmail" name="popupEmail" placeholder="@company.com" required />
              </div>
              <div className="popup-group">
                <label htmlFor="popupPhone">Phone Number</label>
                <input type="tel" id="popupPhone" name="popupPhone" placeholder="+123 456 789" required />
              </div>
              <div className="popup-group">
                <label htmlFor="popupDate">Preferred Date</label>
                <input type="date" id="popupDate" name="popupDate" required />
              </div>
              <div className="popup-group">
                <label htmlFor="popupTime">Preferred Time</label>
                <input type="time" id="popupTime" name="popupTime" required />
              </div>
              <div className="popup-group full">
                <label htmlFor="popupServices">Interested Services</label>
                <select id="popupServices" name="popupServices" required>
                  <option value="">-- Select a Service --</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
              <div className="popup-group full">
                <label htmlFor="popupCompany">Company Name</label>
                <input type="text" id="popupCompany" name="popupCompany" placeholder="Company Pvt.Ltd" required />
              </div>
              <div className="popup-group full">
                <button type="submit" className="popup-submit">Schedule a Call</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
