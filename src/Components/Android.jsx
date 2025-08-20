import React, { useState } from 'react';
import Footer from "./Footer";
import './android.css'; // You can style accordingly

const appDevelopmentPackages = {
  ios: {
    title: "iOS App Development",
    desc: "Native Swift/Obj-C apps, Apple HIG compliance, App Store submission.",
    delivery: ["UI/UX prototyping", "Swift coding", "Automated QA", "App Store support"],
    tech: ["Swift", "Xcode", "UIKit", "TestFlight"],
    packages: [
      { title: "Starter", desc: "₹1,25,000 - Basic UI & MVP" },
      { title: "Growth", desc: "₹2,50,000 - Full features & APIs" },
      { title: "Enterprise", desc: "₹4,50,000 - Advanced scalability" }
    ]
  },
  android: {
    title: "Android App Development",
    desc: "We develop high-performance, scalable Android applications using Kotlin/Java tailored for all devices.",
    delivery: ["Material UI design", "Kotlin coding", "Play Store support", "Crash-free release"],
    tech: ["Kotlin", "Java", "Android Studio", "Firebase"],
    packages: [
      { title: "Starter", desc: "₹1,10,000 - Core features" },
      { title: "Professional", desc: "₹2,00,000 - Full features & Play Store" },
      { title: "Enterprise", desc: "₹3,75,000 - API integration + scaling" }
    ]
  },
  flutter: {
    title: "Flutter App Development",
    desc: "Cross-platform mobile apps with beautiful UI and native performance using Flutter.",
    delivery: ["UI/UX design", "Dart development", "Cross-device testing", "App deployment"],
    tech: ["Flutter", "Dart", "Firebase", "GetX/Bloc"],
    packages: [
      { title: "Starter", desc: "₹90,000 - MVP app" },
      { title: "Growth", desc: "₹1,75,000 - Core features" },
      { title: "Enterprise", desc: "₹3,25,000 - Advanced app with API" }
    ]
  },
  react: {
    title: "React Native Development",
    desc: "Cross-platform development with React Native for both iOS and Android using a single codebase.",
    delivery: ["Component design", "Reusable code", "API integration", "OTA updates"],
    tech: ["React Native", "Expo", "Redux", "TypeScript"],
    packages: [
      { title: "Starter", desc: "₹1,00,000 - Basic features" },
      { title: "Growth", desc: "₹2,00,000 - Native modules included" },
      { title: "Enterprise", desc: "₹3,50,000 - Scalable architecture" }
    ]
  }
};

const MobileAppServices = () => {
  const [modalData, setModalData] = useState(null);

  const handleServiceClick = (key) => {
    setModalData(appDevelopmentPackages[key]);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
    <div className="service-section">
      <div className="service-container">
        <div className="service-right">
          <h1>Mobile App Development & Design</h1>
          <p>We design and develop a reliable and efficient mobile application that meets your requirements.</p>

          <div className="tab-buttons">
            <button className="active">Development</button>
            <button>Design</button>
          </div>

          <div className="service-boxes">
            {["ios", "android", "flutter", "react"].map((key, index) => {
              const titles = {
                ios: "iOS App",
                android: "Android App",
                flutter: "Flutter App",
                react: "React App"
              };
              const images = {
                ios: "img/apple.png",
                android: "img/android.png",
                flutter: "img/flutter.png",
                react: "img/reactn.png"
              };
              const colors = ["blue", "android", "pink", "orange"];
              return (
                <div
                  key={key}
                  className={`service-box ${colors[index]}`}
                  onClick={() => handleServiceClick(key)}
                >
                  <span className="number">0{index + 1}</span>
                  <img src={images[key]} alt={titles[key]} />
                  <h3>{titles[key]}<br />Development</h3>
                </div>
              );
            })}
          </div>

          <a href="#" className="explore-button">Explore All Services →</a>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{modalData.title}</h2>
            <p>{modalData.desc}</p>

            <h3>How We Deliver</h3>
            <ul>{modalData.delivery.map((item, i) => <li key={i}>{item}</li>)}</ul>

            <h3>Tech Stack</h3>
            <ul>{modalData.tech.map((tech, i) => <li key={i}>{tech}</li>)}</ul>

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
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default MobileAppServices;
