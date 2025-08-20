import React from "react";
import "./stats.css";
// import Illustration from "./xen4.png";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-illustration">
        <img src="/images/svg.jpg" alt="Illustration" />
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="icon">
            <img src="/images/100.png" alt="Projects" />
          </div>
          <h3>100+ Projects Delivered</h3>
          <p>Successfully completed a wide range of projects across industries.</p>
        </div>

        <div className="stat-card">
          <div className="icon">
            <img src="/images/50.jpg" alt="Clients" />
          </div>
          <h3>50+ Satisfied Clients</h3>
          <p>Trusted by startups, SMEs, and growing brands.</p>
        </div>

        <div className="stat-card">
          <div className="icon">
            <img src="/images/24.png" alt="Retention" />
          </div>
          <h3>95% Client Retention Rate</h3>
          <p>Our clients keep coming back as we deliver outstanding results.</p>
        </div>

        <div className="stat-card">
          <div className="icon">
            <img src="/images/95.jpg" alt="Support" />
          </div>
          <h3>24/7 Support</h3>
          <p>Dedicated client assistance and technical support.</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
