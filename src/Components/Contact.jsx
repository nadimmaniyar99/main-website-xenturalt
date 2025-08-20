import React, { useState } from "react";
import Footer from "./Footer";
import "./contact.css"; // assume you move your styles here

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    setSuccessMessage(
      "Thank you for reaching out! We will get back to you within 12 business hours."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <div id="navbar"></div>

      <section className="contact-section">
        <h1 className="contact-title">
          LET'S BUILD SOMETHING AMAZING TOGETHER
        </h1>

        <div className="contact-card">
          <h2>How can we assist?</h2>
          <p>
            Please provide a brief summary below. Within 12 business hours,
            we'll respond to you...
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group country-code">
                <img src="https://flagcdn.com/w40/in.png" alt="India Flag" />
                <span style={{ color: "#0f0f0f" }}>+91</span>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
          </form>
        </div>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="whatsapp-btn"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
      </section>

      <section className="contact-info-section">
        <div className="contact-address">
          <h3>
            <strong>How to Find Us</strong>
          </h3>

          <p>
            <strong>Our Main Branch</strong>
            <br />
            SPO 208
            <br />
            Second floor
            <br />
            Sector 124
            <br />
            Sunny Enclave Mohali
          </p>

          <p>
            <strong>Our Other Branch</strong>
            <br />
            11/2B Baishnabpara, 1st Lane (Mahesh)
            <br />
            Mahesh -1, Serampur Uttarpara
            <br />
            Hooghly-712202, West Bengal
          </p>

          <h3>
            <strong>Office Timing</strong>
          </h3>
          <pre>
            Monday to Friday: 10 AM - 7 PM <br />Saturday & Sunday : Closed 
          </pre>
          <p>
            <strong>Email:</strong> info@xenturaltcodes.in
          </p>
          <p>
            <strong>Phone:</strong> +91 7980 110 265
          </p>
          <p>UAE (WhatsApp): +971 55 164 9266</p>
          <p>Canada (WhatsApp): +1 (416) 858-7595</p>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.154075813367!2d76.6752913754461!3d30.747346374603736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedc6fe963c67%3A0x59acfa434b77c1b6!2sSunny%20Enclave%2C%20Kharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1716447622740!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </section>

      <div id="footer-placeholder"></div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
