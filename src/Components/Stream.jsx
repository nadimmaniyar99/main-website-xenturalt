import React from 'react';
import './stream.css';

export default function DigitalProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy Planning',
      desc: 'We begin by analyzing your business objectives and target audience to develop a customized digital strategy.',
      color: 'blue',
    },
    {
      number: '02',
      title: 'Design & Development',
      desc: 'Our expert team creates visually appealing, user-centric designs and builds scalable, high-performance websites and apps.',
      color: 'green',
    },
    {
      number: '03',
      title: 'Testing & Quality Assurance',
      desc: 'Comprehensive testing ensures your digital product is secure, responsive, and ready for a seamless launch.',
      color: 'orange',
    },
    {
      number: '04',
      title: 'Launch, Support & Growth',
      desc: 'We deploy your project smoothly and provide continuous maintenance and optimization to drive ongoing growth.',
      color: 'purple',
    },
  ];

  return (
    <section className="digital-process-section">
      <div className="process-container">
        <div className="process-text">
          <h2>Our Streamlined</h2>
          <h3 className="gradient-text">4-Step Digital Process</h3>
          <p>
            Choosing Xenturalt Codes means partnering with a team dedicated to transforming your digital vision into reality.
            We combine tailored strategies, cutting-edge technology, and deep industry expertise to deliver solutions that drive real business growth.
            Our transparent communication ensures you stay informed and engaged throughout the process, while our results-driven mindset guarantees measurable success.
            From web development and app design to SEO and digital marketing, we provide comprehensive, end-to-end services that empower your brand to thrive in today’s competitive online landscape.
          </p>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className={`step-number ${step.color}`}>{step.number}</div>
              <div className="step-details">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
