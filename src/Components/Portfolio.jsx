import React from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

export default function PortfolioSection() {
  const projects = [
    {
      bgClass: 'realestate-bg',
      title: 'Real estate website project',
      desc: 'A modern real estate platform showcasing properties with seamless navigation and responsive design.',
    },
    {
      bgClass: 'healthray-bg',
      title: 'Healthray Project',
      desc: 'A healthcare management system offering telemedicine, patient records, and seamless hospital integration.',
    },
    {
      bgClass: 'bondexch-bg',
      title: 'BondExch',
      desc: 'A Cricket Betting Web Application with rich UI and real-time updates.',
    },
    {
      bgClass: 'testbook-bg',
      title: 'Testbook',
      desc: 'Boost your exam preparation with Test Series for Banking, SSC, RRB & all other Govt. Exams.',
    },
  ];

  return (
    <section className="portfolio-section">
      <p className="portfolio-subtitle">Our Portfolio</p>
      <h2 className="portfolio-title">
        Our Portfolio Reflects Our Passion<br />
        <span className="highlight">Real Work, Real Results</span>, Real Impact
      </h2>

      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <div className="portfolio-card" key={i}>
            <div className={`portfolio-image-bg ${project.bgClass}`}></div>
            <div className="portfolio-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-arrow">➜</div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-container">
       <Link to="/ourwork">
            <button className='connect-button' >More Details ➜</button>
          </Link>
      </div>
    </section>
  );
}


          