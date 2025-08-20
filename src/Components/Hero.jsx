import React from 'react';
import Whychoose from "./Whychoose"
import Stats from "./Stats"
 import Tech from "./Tech"
 import Service from "./Service"
import Experience from "./Experience"
 import Portfolio from "./Portfolio"
 import Stream from "./Stream"
import FAQ from "./FAQ"
import Footer from "./Footer"
import './hero.css'; // Make sure this CSS includes your .hero-section and related styles

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="tagline">
          <span className="line"></span> Technology That Elevates.
        </p>
        <h1>
          <span className="blue">India’s Leading Software</span><br />
          <span>Development Company</span>
        </h1>
        <p className="description">
          At Xenturalt Codes, we deliver innovative and result-driven solutions in web development,
          mobile app development, and custom software. Our expert team specializes in crafting tailored
          digital experiences that help businesses grow, streamline operations, and achieve their goals.
          Empower your brand with cutting-edge technology and creative strategies that bring your vision to life.
        </p>
        <button className="quote-btn">Get A Quote ➜</button>
      </div>

      <div className="hero-images">
        <div className="top-images">
          <div className="image-card">
            <img src="/images/lap.png" alt="coding" />
          </div>
          <div className="image-card">
            <img src="/images/build.jpg" alt="tech banner" />
          </div>
        </div>
        <div className="bottom-image">
          <img src="/images/pc.jpg" alt="developer workspace" />
        </div>
      </div>
      <div>
<Whychoose/>
      <Stats/>
      <Tech/>
      <Service/>
      <Experience/>
      <Portfolio/>
      <Stream/>
      <FAQ/>
       <Footer/> 

      </div>
    </section>
  );
};

export default HeroSection;
