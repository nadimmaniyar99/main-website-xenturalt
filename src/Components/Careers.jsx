import React, { useState, useEffect } from 'react';
import "./careers.css"
import Footer from "./Footer";


const jobList = [
  {
    title: 'Web Designer (WordPress/Wix)',
    experience: '1+ years',
    location: 'Remote / On-site',
    description: 'Create beautiful and responsive websites using WordPress or Wix. Must know basic SEO and have an eye for modern design.'
  },
  {
    title: 'Digital Marketing Executive',
    experience: '1–2 years',
    location: 'Remote / On-site',
    description: 'Looking for someone experienced in Facebook Ads, Google Ads, Canva, SEO and Google My Business.'
  },
  {
    title: 'Graphic Designer (Freelance)',
    experience: '1+ years',
    location: 'Remote',
    description: 'Design engaging graphics using Canva and Adobe Photoshop/Illustrator. Must submit a portfolio.'
  }
];

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const openModal = (job) => {
    setSelectedJob(job);
    setFormVisible(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const submitApplication = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    e.target.reset();
    closeModal();
  };

  return (
    <>
    <div>
      <div className="header">
        <h1>Career With Us</h1>
        <p>We care about everyone. What’s your next is our first.</p>
      </div>

      <div className="containerr">
        <div className="intro-section">
          <h2>Careers at Xenturalt Codes IT Solution Pvt Ltd</h2>
          <p>We’re more than a tech company — we’re a team of innovators, creators, and problem-solvers who believe in transforming businesses through smart technology, web design, and digital marketing.</p>
          <p>If you're passionate, curious, and ready to grow, we’d love to work with you.</p>

          <h3>Why Work With Us?</h3>
          <ul>
            <li>A creative and collaborative work culture</li>
            <li>Opportunities for skill development and career growth</li>
            <li>Flexible work environment (remote options available)</li>
            <li>Hands-on experience with real projects</li>
            <li>Work with domestic, international, and local clients</li>
          </ul>
        </div>

        <h2 style={{ marginBottom: '20px' }}>Open Positions</h2>
        <div className="cards-container">
          {jobList.map((job, index) => (
            <div className="card" key={index}>
              <h3>{job.title}</h3>
              <p className="info"><strong>Experience:</strong> {job.experience}</p>
              <p className="info"><strong>Location:</strong> {job.location}</p>
              <button className="btn" onClick={() => openModal(job)}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedJob.title}</h3>
            <p>{selectedJob.description}</p>
            <button className="btn" onClick={() => setFormVisible(true)}>Apply Now</button>

            {formVisible && (
              <form onSubmit={submitApplication} className="apply-form">
                <input type="hidden" name="jobRole" value={selectedJob.title} />
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="tel" name="phone" placeholder="Your Phone Number" pattern="[0-9]{10}" required />
                <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
                <textarea name="message" rows="4" placeholder="Why do you want to apply?" required></textarea>
                <button type="submit">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
    <div>
      <Footer/>
    </div>
    </>
    
  );
  
} 
