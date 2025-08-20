import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'; // Create this CSS file for styles

const UnderConstructionPage = () => {
  return (
    <div className="container">
      <div className="emoji">🛠️</div>
      <h1>Page Under Construction</h1>
      <p>
        Oops! This page is currently under development.<br />
        But don’t worry — we’re working hard to bring you something awesome soon! 🚧
      </p>

      <div className="contact-info">
        <p><strong>💬 Need Help or Looking for Something Specific?</strong></p>
        <p>
          📧 Email: <a href="mailto:info@xenturaltcodes.in">info@xenturaltcodes.in</a>
        </p>

        <div className="social-links">
          🔗 Follow us on:{' '}
          <a href="https://www.facebook.com/profile.php?id=61572697829955" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="#">Instagram</a> |
          <a href="https://www.linkedin.com/company/xenturalt-codes-it-solution/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://api.whatsapp.com/send?phone=+917980110265" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <a href="/" className="home-btn">🔗 Go to Homepage</a>
    </div>
  );
};

export default UnderConstructionPage;
