import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./consult.css"

// EmailJS import and initialization removed as requested.
// This will break the form's submission functionality.

const ConsultationForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    language: '',
    service: '',
    description: '',
    budget: '',
    startDate: '',
    preferredDate: '',
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setIsError(false);

    // --- WARNING: The following block for emailjs.sendForm will cause an error
    // --- because emailjs is no longer imported or initialized.
    // --- You need to replace this with your actual submission logic.
    try {
      // Placeholder for your new submission logic
      // Example: If sending to your own API:
      /*
      const response = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      */

      // Simulating a successful submission since EmailJS is removed
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay
      setMessage("✅ Form data processed successfully (Email not sent without EmailJS)");
      setIsSubmitting(false);
      // Reset form fields after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        language: '',
        service: '',
        description: '',
        budget: '',
        startDate: '',
        preferredDate: '',
      });
    } catch (error) {
      setMessage(`❌ Submission Failed: ${error.message || 'An unknown error occurred.'}`);
      setIsError(true);
      setIsSubmitting(false);
    }
    // --- END WARNING BLOCK
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      language: '',
      service: '',
      description: '',
      budget: '',
      startDate: '',
      preferredDate: '',
    });
    setMessage('');
    setIsError(false);
  };

  return (
    <form id="consultationForm" className="form-container" onSubmit={handleSubmit}>
      <h2>Book a Free Consultation</h2>

      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="language">Preferred Language *</label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
        >
          <option value="">Select Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Others</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Interested In *</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option>Web App Development</option>
          <option>Mobile App Development</option>
          <option>UI/UX Design</option>
          <option>IT Consulting</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="budget">Budget</label>
        <input
          type="text"
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Project Start Date</label>
        <select
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option>Immediately</option>
          <option>1-3 Months</option>
          <option>3-6 Months</option>
          <option>6+ Months</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredDate">Preferred Date & Time *</label>
        <input
          type="datetime-local"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={handleReset} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {message && (
        <p className={isError ? 'error-message' : 'success-message'}>
          {message}
        </p>
      )}
    </form>
  );
};

export default ConsultationForm;