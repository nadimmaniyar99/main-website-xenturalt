import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does a typical website or app take to build?",
      answer:
        "Project timelines vary depending on the scope and complexity of the work involved. However, most standard projects are typically completed within 2 to 8 weeks. We ensure timely delivery by following a structured development process throughout the project.",
    },
    {
      question: "Can I request changes after project delivery?",
      answer:
        "Yes, we offer a post-delivery support window during which changes can be requested.",
    },
    {
      question: "Will I get support after the project is launched?",
      answer:
        "Absolutely. We provide ongoing support and maintenance packages tailored to your needs.",
    },
    {
      question:
        "What is the typical timeline for completing a digital project, and what factors influence the overall duration?",
      answer:
        "The timeline depends on project scope, client feedback speed, and technical complexity.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>
          We Provide End-to-End Expert Digital Services That <br />
          <span className="highlight">Empower Your Brand</span> and Drive Real
          Results.
        </h1>
      </div>
      <div className="faq-main">
        <div className="faq-left">
          <h2>Everything You Need to Know, All in One Place</h2>
          <p>
            At Xenturalit Codes, we believe in clear, transparent communication.
            Our FAQs are designed to quickly address your most common questions
            — from project timelines to support policies — so you can feel
            confident and informed every step of the way.
          </p>
          <button className="explore-button">Explore More →</button>
        </div>
        <div className="faq-right1">
          <ul>
            {faqData.map((faq, index) => (
              <li
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className="toggle-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
