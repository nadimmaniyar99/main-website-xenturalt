import React, { useState } from "react";
import Footer from "./Footer"; // Adjust based on your project structure
import "./digital.css"; // Create this CSS file for styles

const digitalMarketingData = {
  seo: {
    title: "Search Engine Optimization",
    desc: "On-page & off-page SEO to boost rankings and traffic.",
    delivery: ["Keyword research", "Technical audit", "Link building", "Monthly reporting"],
    tech: ["Google Analytics", "Ahrefs", "Screaming Frog", "Yoast SEO"],
    packages: { Basic: "$500/mo", Standard: "$1,000/mo", Premium: "$2,000/mo" }
  },
  content: {
    title: "Content Marketing",
    desc: "Strategic content creation to engage and convert audiences.",
    delivery: ["Editorial calendar", "Blog posts", "Infographics", "Distribution"],
    tech: ["Grammarly", "Canva", "WordPress", "BuzzSumo"],
    packages: { Basic: "$800/mo", Standard: "$1,500/mo", Premium: "$2,800/mo" }
  },
  smm: {
    title: "Social Media Marketing",
    desc: "Build brand presence & run targeted ad campaigns.",
    delivery: ["Profile setup", "Daily posts", "Ad management", "Analytics"],
    tech: ["Hootsuite", "Facebook Ads", "Buffer", "LinkedIn Ads"],
    packages: { Basic: "$600/mo", Standard: "$1,200/mo", Premium: "$2,500/mo" }
  },
  email: {
    title: "Email Marketing",
    desc: "Automated campaigns and A/B testing for better conversions.",
    delivery: ["Template design", "Mailchimp setup", "Automation flows", "Reporting"],
    tech: ["Mailchimp", "SendGrid", "HubSpot", "Litmus"],
    packages: { Basic: "$400/mo", Standard: "$800/mo", Premium: "$1,500/mo" }
  }
};

const DigitalMarketingServices = () => {
  const [modalData, setModalData] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const openModal = (key) => {
    setModalData(digitalMarketingData[key]);
    setActiveCard(key);
  };

  const closeModal = () => {
    setModalData(null);
    setActiveCard(null);
  };

  return (
    <>
      <div className="service-section">
        <div className="service-container">
          <div className="service-right">
            <h1>Digital Marketing Services</h1>
            <p>
              We offer comprehensive digital marketing strategies to grow your brand’s online presence effectively.
            </p>

            <div className="service-boxes1">
              {Object.keys(digitalMarketingData).map((key, index) => {
                const titles = {
                  seo: "Search Engine Optimization (SEO)",
                  content: "Content Marketing",
                  smm: "Social Media Marketing (SMM)",
                  email: "Email Marketing"
                };
                const images = {
                  seo: "img/Sxo.png",
                  content: "img/remove.png",
                  smm: "img/call.png",
                  email: "img/mail.png"
                };
                return (
                  <div
                    key={key}
                    className={`service-box service-card ${key} ${activeCard === key ? "active" : ""}`}
                    onClick={() => openModal(key)}
                  >
                    <span className="number">0{index + 1}</span>
                    <img src={images[key]} alt={titles[key]} />
                    <h3 dangerouslySetInnerHTML={{ __html: titles[key].replace("(", "<br>(") }}></h3>
                  </div>
                );
              })}
            </div>

            <a href="404.html" className="explore-button">Explore All Services →</a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{modalData.title}</h2>
            <p>{modalData.desc}</p>

            <h3>How We Deliver</h3>
            <ul>{modalData.delivery.map((item, idx) => <li key={idx}>{item}</li>)}</ul>

            <h3>Tech Stack</h3>
            <ul>{modalData.tech.map((tech, idx) => <li key={idx}>{tech}</li>)}</ul>

            <h3>Pricing Packages</h3>
            <div className="pkg-grid">
              {Object.entries(modalData.packages).map(([title, price], idx) => (
                <div key={idx} className="pkg-card">
                  <h4>{title}</h4>
                  <p>{price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default DigitalMarketingServices;
