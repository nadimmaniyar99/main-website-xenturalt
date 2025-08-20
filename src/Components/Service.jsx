import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '/images/web.jpg',
    title: 'Website Development',
    description:
      'We create engaging, user-friendly websites tailored to your unique business needs, combining responsive design, seamless navigation.',
  },
  {
    icon: '/images/mob.png',
    title: 'Mobile app Development',
    description:
      'We develop powerful, intuitive mobile applications tailored to your business needs, ensuring high performance, seamless user experience',
  },
  {
    icon: '/images/seo.png',
    title: 'SEO',
    description:
      'We enhance your digital presence with strategic SEO solutions designed to improve search engine rankings, drive organic traffic, and increase visibility',
  },
  {
    icon: '/images/word.png',
    title: 'WordPress',
    description:
      'We design custom WordPress websites and online stores optimized for maximum eCommerce success—blending fast performance and user-friendly interfaces',
  },
  {
    icon: '/images/sm.png',
    title: 'Social Media Marketing',
    description:
      'We expand your brand’s reach and boost engagement through expert social media marketing strategies—driving targeted traffic and building loyal audiences',
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-heading">
        We Provide End-to-End Expert Digital Services That <br />
        <span className="highlight">Empower Your Brand</span> and Drive Real Results.
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="explore-link">Explore More →</a>
          </div>
        ))}
      </div>

      <button className="connect-button2">Let's Connect!</button>
    </section>
  );
}
