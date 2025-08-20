import React from 'react';
import './exp.css';
// import bgImage from '../assets/photosec.png'; // adjust path as needed

export default function ExperienceSection() {
  return (
    <section
      className="experience-section"
      style={{ backgroundImage: `url(${"/images/business.png"})` }}
    >
      <div className="overlay">
        <div className="text-content">
          <p className="subheading">Your Digital Growth Partner</p>
          <h2 className="heading">Building Digital Experiences That Drive Results</h2>
          <p className="description">
            At Xenturalt Codes, we help businesses grow and thrive in the digital world with
            smart, scalable solutions. From custom web development and mobile app creation to SEO,
            WordPress, and social media marketing—we build digital experiences that perform. With a
            focus on creativity, technology
          </p>
          <ul className="features">
            <li>⭐ Future-Driven Innovation</li>
            <li>⭐ Solutions Built Around You</li>
            <li>⭐ Future-Driven Innovation</li>
            <li>⭐ Clear Communication, Always</li>
            <li>⭐ Full-Spectrum Digital Expertise</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
