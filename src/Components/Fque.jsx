import React, { useState } from 'react';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import './fque.css'; // Optional, or use inline styles

const faqItems = [
  {
    question: 'How can I contact customer support?',
    answer:
      'You can contact our support team via live chat, email, or by submitting a ticket through your dashboard.',
  },
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes, we offer a 7-day free trial so you can experience our platform before making a commitment.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept credit cards, PayPal, and bank transfers depending on your region.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription anytime from your account settings without any penalties.',
  },
  {
    question: 'Will my data be secure?',
    answer:
      'Absolutely. We use industry-standard encryption and data protection practices to secure all user data.',
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div>
      {/* Navbar HTML directly included */}
      {/* <div className="navbar">
        <div className="fallback-nav">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="faq-wrapper">
        <h1>Frequently asked questions</h1>
        <p className="subheading">General questions about our services</p>

        <div className="faq-container1">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {item.question}
                <span className="arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer HTML directly included */}
      {/* <footer className="fallback-footer">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Scroll to Top
        </button>
      </footer> */}
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default FaqPage;
