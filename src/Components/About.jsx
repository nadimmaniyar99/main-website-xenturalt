import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from "./Footer";

import './about.css';

const AboutUsPage = () => {
  useEffect(() => {
    // Filter Buttons Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.team-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const role = button.getAttribute('data-role');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        cards.forEach(card => {
          const cardRole = card.getAttribute('data-role');
          card.style.display = role === 'all' || cardRole === role ? 'block' : 'none';
        });
      });
    });

    // Stats Counter Logic
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const update = () => {
        const increment = Math.ceil(target / 100);
        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.textContent = formatValue(count, target);
          requestAnimationFrame(update);
        } else {
          counter.textContent = formatValue(target, target);
        }
      };

      const formatValue = (value, target) => {
        if (target === 100) return `${value}%`;
        if (target === 839) return `${value}+`;
        return value;
      };

      update();
    });
  }, []);

  return (
    <>
    <div>
      <section className="about-section">
        <div className="content">
          <h1><span className="highlight"></span>About us</h1>
          <div className="vision-section">
            <div className="text">
              <h2><span className="highlight"></span> Our Vision</h2>
              <p><strong>Xenturalt Codes IT Solutions</strong>,  our vision is to be a global leader in delivering innovative IT solutions that empower businesses to thrive in the digital age. We aim to help our clients unlock their full potential by providing customized, cutting-edge services that drive growth, efficiency, and success.

By staying ahead of industry trends and embracing new technologies, we are committed to helping businesses navigate the digital landscape and turn challenges into opportunities. Our goal is to be the trusted partner that businesses rely on for transformative solutions and lasting results.</p>
            </div>
            <div className="image">
              <img src="https://www.yourwebhub.in/vission.png" alt="Vision and Mission" />
            </div>
          </div>
        </div>
      </section>

      <section className="Team">
        <h1><span>M</span>eet Our Team</h1>
        <div className="filter-buttons">
          {['all', 'directors', 'management', 'web', 'app', 'marketing'].map(role => (
            <button key={role} className={`filter-btn ${role === 'all' ? 'active' : ''}`} data-role={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>

        <div className="team-container" id="team-container">
          {[
            { src: 'images/ronimitra.jpg', name: 'Roni Mitra', role: 'Establisher', type: 'directors' },
            // { src: 'shivam-pandey.jpg', name: 'Shivam Pandey', role: 'Business Associate', type: 'management' },
            // { src: 'tanvi.jpg', name: 'Tanvi', role: 'Business Associate', type: 'management' },
            // { src: 'abhishek.jpg', name: 'Abhishek Thakur', role: 'Front-End Developer', type: 'web' },
            // { src: 'neha.jpg', name: 'Neha Tanwar', role: 'Business Associate', type: 'management' },
          ].map(member => (
            <div key={member.name} className="team-card" data-role={member.type}>
              {/* <img src={`https://www.yourwebhub.in/team/${member.src}`} alt={member.name} /> */}
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

     <section className="stats-section1">
        <div className="stat-item">
          <h2 className="count" data-target="100">0%</h2>
          <p>Satisfaction</p>
        </div>
        <div className="stat-item">
          <h2 className="count" data-target="839">0+</h2>
          <p>Products</p>
        </div>
        <div className="stat-item">
          <h2>
            <span className="count" data-target="365">0</span> / <span className="count" data-target="7">0</span>
          </h2>
          <p>Support</p>
        </div>
      </section>

      <section className="about-details-section">
        <div className="about-left">
          <p>
            CodeMake is a best toolkit,<br />
            This template covers<br />
            beatiful layouts with more<br />
            features that you need.
          </p>
        </div>
     <div className="about-right">
          <p>
            Since 2005, we believe in the good work to deliver for our customers...
          </p>
          <p>
            We work with people who are as dedicated to their efforts...
          </p>
        </div>
      </section>

      <section className="awards-section">
        <div className="award-box">
          <h1>11</h1>
          <p>Best design awarded<br />for best work and<br />design</p>
        </div>
        <div className="award-details">
          {[
            {
              title: 'CSS DESIGN AWARDS',
              desc: 'Best web design works for you',
              subtext: 'High quality design submit your website for Best web design works chance to win site of the day.'
            },
            {
              title: 'UI DESIGN AWARDS',
              desc: 'Keep the interface simple',
              subtext: 'Elements and factors related to the UI design can make the success of your website.'
            }
          ].map((award, index) => (
            <div key={index} className="award-item">
              <img src="https://img.icons8.com/ios-filled/50/2567ff/positive-dynamic.png" alt="icon" />
              <h3>{award.title}</h3>
              <p>{award.desc}</p>
              <p className="subtext">{award.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="brands-section">
        {["facebook-new", "microsoft", "linkedin", "paypal", "youtube-play"].map((brand, idx) => (
          <img key={idx} src={`https://img.icons8.com/color/48/${brand}.png`} alt={brand} />
        ))}
      </section>

      <section className="feedback-section">
        <h1><span className="highlight">Client</span> Feedback</h1>
        <div className="feedback-slider">
          {[
            { name: 'Hiroshi Sato', image: 'men/75.jpg', text: 'Very professional and knowledgeable. I highly recommend Web Hub!' },
            { name: 'Aya Nakamura', image: 'women/65.jpg', text: 'Web Hub went above and beyond to optimize my website performance!' },
            { name: 'Li Wei', image: 'men/45.jpg', text: 'Fast and reliable service. I will definitely work with them again!' },
            { name: 'Sakura Chen', image: 'women/32.jpg', text: 'Great experience working with Web Hub. Highly recommended!' },
            { name: 'Adam Wix', image: 'women/32.jpg', text: 'Great experience working with Web Hub. Highly recommended!' },
            { name: 'Lily James', image: 'women/32.jpg', text: 'Great experience working with Web Hub. Highly recommended!' },
            { name: 'Alex Wing Chen', image: 'women/32.jpg', text: 'Great experience working with Web Hub. Highly recommended!' },
            { name: 'James Boa', image: 'women/32.jpg', text: 'Great experience working with Web Hub. Highly recommended!' },
            { name: 'Wex Chum', image: 'women/32.jpg', text: 'Great experience working with Xenturalt. Highly recommended!' }
          ].map((fb, idx) => (
            <div key={idx} className="feedback-card">
              <img src={`https://randomuser.me/api/portraits/${fb.image}`} alt={fb.name} className="avatar" />
              <div className="stars">★★★★★</div>
              <h3>@<span className="username">{fb.name}</span></h3>
              <p>{fb.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
     <div>
      
          <Footer/>
    </div></>
  );
};

export default AboutUsPage;
