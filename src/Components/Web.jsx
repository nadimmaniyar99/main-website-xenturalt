import React, { useState } from 'react';
import Footer from './Footer';
import './web.css';

const webDevData = {
  html: {
    title: "HTML/CSS Development",
    desc: "Pixel-perfect markup and responsive styling for all devices.",
    delivery: ["Semantic HTML", "CSS Flex/Grid", "Responsive layouts", "Cross-browser testing"],
    tech: ["HTML5", "CSS3", "Sass", "Bootstrap"],
    packages: [
      { title: "Basic", desc: "₹10,000" },
      { title: "Standard", desc: "₹25,000" },
      { title: "Premium", desc: "₹1,25,000" }
    ]
  },
  react: {
    title: "ReactJS Development",
    desc: "Modern single-page apps with React, Redux, and optimized performance.",
    delivery: ["Component design", "State management", "API integration", "Unit testing"],
    tech: ["React", "Redux", "Webpack", "Jest"],
    packages: [
      { title: "Basic", desc: "₹25,000" },
      { title: "Standard", desc: "₹1,25,000" },
      { title: "Premium", desc: "₹2,50,000" }
    ]
  },
  node: {
    title: "NodeJS Backend",
    desc: "Scalable RESTful APIs, real-time services, and database integration.",
    delivery: ["Express setup", "Database schema", "API endpoints", "Auth & security"],
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    packages: [
      { title: "Basic", desc: "₹40,000" },
      { title: "Standard", desc: "₹1,75,000" },
      { title: "Premium", desc: "₹5,50,000" }
    ]
  },
  ecom: {
    title: "E-Commerce Solutions",
    desc: "Full-stack e-commerce websites with payment gateways and inventory management.",
    delivery: ["Shop setup", "Payment integration", "Admin panel", "SEO optimization"],
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    packages: [
      { title: "Basic", desc: "₹40,000" },
      { title: "Standard", desc: "₹1,75,000" },
      { title: "Premium", desc: "₹5,50,000" }
    ]
  }
};

const WebDevelopmentServices = () => {
  const [modalData, setModalData] = useState(null);

  const handleServiceClick = (key) => {
    setModalData(webDevData[key]);
  };

  const closeModal = () => setModalData(null);

  const titles = {
    html: "HTML/CSS",
    react: "ReactJS",
    node: "NodeJS",
    ecom: "E-Commerce"
  };

  const images = {
    html: "img/hm.png",
    react: "img/reactn.png",
    node: "img/node.png",
    ecom: "img/ecom-removebg-preview.png"
  };

  const colors = ["blue", "green", "purple", "orange"];

  return (
    <>
      <div className="service-section">
        <div className="service-container">
          <div className="service-right">
            <h1>Web Development & Design</h1>
            <p>
              We build fast, responsive, and visually appealing websites tailored to your business needs.
            </p>

            <div className="service-boxes">
              {Object.keys(webDevData).map((key, index) => (
                <div
                  key={key}
                  className={`service-box ${colors[index]}`}
                  onClick={() => handleServiceClick(key)}
                >
                  <span className="number">0{index + 1}</span>
                  <img src={images[key]} alt={titles[key]} />
                  <h3>{titles[key]}<br />Development</h3>
                </div>
              ))}
            </div>

            <a href="#" className="explore-button">Explore All Services →</a>
          </div>
        </div>

        {modalData && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>&times;</button>
              <h2>{modalData.title}</h2>
              <p>{modalData.desc}</p>

              <h3>How We Deliver</h3>
              <ul>{modalData.delivery.map((item, i) => <li key={i}>{item}</li>)}</ul>

              <h3>Tech Stack</h3>
              <ul>{modalData.tech.map((item, i) => <li key={i}>{item}</li>)}</ul>

              <h3>Pricing Packages</h3>
              <div className="pkg-grid">
                {modalData.packages.map((pkg, i) => (
                  <div className="pkg-card" key={i}>
                    <h4>{pkg.title}</h4>
                    <p>{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopmentServices;
