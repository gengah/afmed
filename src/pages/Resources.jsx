import React, { useState } from 'react';
import './Resources.css';

const Resources = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const resources = [
    {
      title: 'Insurance & Billing',
      content: (
        <div>
          <p>We accept most major insurance plans. Here's what you need to know:</p>
          <ul>
            <li>Check your coverage before your visit</li>
            <li>Bring your insurance card and ID</li>
            <li>Co-pays are due at time of service</li>
            <li>Contact us for billing questions</li>
          </ul>
          <div className="download-section">
            <a href="#" className="download-link">📄 Insurance Information Form</a>
          </div>
        </div>
      )
    },
    {
      title: 'Patient Forms',
      content: (
        <div>
          <p>Download and complete forms before your appointment:</p>
          <div className="download-section">
            <a href="#" className="download-link">📄 New Patient Registration</a>
            <a href="#" className="download-link">📄 Medical History Form</a>
            <a href="#" className="download-link">📄 HIPAA Privacy Notice</a>
            <a href="#" className="download-link">📄 Consent for Treatment</a>
          </div>
        </div>
      )
    },
    {
      title: 'FAQ',
      content: (
        <div>
          <h4>How do I schedule an appointment?</h4>
          <p>You can schedule online through our patient portal, call us at (555) 123-4567, or visit our office during business hours.</p>

          <h4>What should I bring to my first appointment?</h4>
          <p>Please bring your insurance card, photo ID, list of current medications, and any relevant medical records.</p>

          <h4>Do you offer telemedicine?</h4>
          <p>Yes, we offer virtual consultations for many services. Contact us to see if telemedicine is right for you.</p>

          <h4>How do I request prescription refills?</h4>
          <p>You can request refills through our patient portal, by phone, or in person. Please allow 48 hours for processing.</p>
        </div>
      )
    },
    {
      title: 'Telehealth Instructions',
      content: (
        <div>
          <p>Getting started with telehealth is easy:</p>
          <ol>
            <li>Ensure you have a smartphone, tablet, or computer with internet access</li>
            <li>Test your camera and microphone before the appointment</li>
            <li>Find a private, quiet location</li>
            <li>Have your medications and medical questions ready</li>
            <li>Log in 5 minutes early to avoid technical issues</li>
          </ol>
          <div className="download-section">
            <a href="#" className="download-link">📄 Telehealth Setup Guide</a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="resources">
      <div className="resources-hero">
        <div className="container">
          <h1>Patient Resources</h1>
          <p>Everything you need to know about our services and policies</p>
        </div>
      </div>

      <section className="resources-section">
        <div className="container">
          <div className="accordion">
            {resources.map((resource, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-header ${openAccordion === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{resource.title}</span>
                  <span className="accordion-icon">{openAccordion === index ? '−' : '+'}</span>
                </button>
                <div className={`accordion-content ${openAccordion === index ? 'open' : ''}`}>
                  <div className="accordion-body">
                    {resource.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;