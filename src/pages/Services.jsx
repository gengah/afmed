import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Family Medicine',
      description: 'Comprehensive healthcare for all ages',
      icon: '👨‍👩‍👧‍👦',
      details: 'Our family medicine practice provides continuous healthcare for individuals and families across all ages. We focus on preventive care, chronic disease management, and acute illness treatment.'
    },
    {
      id: 2,
      title: 'Pediatrics',
      description: 'Specialized care for children and adolescents',
      icon: '🧒',
      details: 'Our pediatric services include well-child visits, vaccinations, developmental screenings, and treatment of childhood illnesses. We partner with parents to ensure optimal health for growing children.'
    },
    {
      id: 3,
      title: 'Women\'s Health',
      description: 'Comprehensive women\'s healthcare services',
      icon: '👩',
      details: 'From routine gynecological exams to pregnancy care and menopause management, we provide compassionate, comprehensive care for women at every stage of life.'
    },
    {
      id: 4,
      title: 'Diagnostics & Lab Testing',
      description: 'Advanced diagnostic services and laboratory testing',
      icon: '🔬',
      details: 'State-of-the-art diagnostic imaging and comprehensive laboratory services help us accurately diagnose and monitor your health conditions.'
    },
    {
      id: 5,
      title: 'Virtual Care',
      description: 'Convenient telemedicine consultations',
      icon: '💻',
      details: 'Access quality healthcare from home with our secure video consultations. Perfect for follow-ups, prescription renewals, and non-emergency medical advice.'
    },
    {
      id: 6,
      title: 'Chronic Disease Management',
      description: 'Ongoing care for chronic conditions',
      icon: '📊',
      details: 'We provide coordinated care for diabetes, hypertension, asthma, and other chronic conditions, helping you manage your health effectively.'
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive healthcare services tailored to your needs</p>
        </div>
      </div>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-item" onClick={() => openModal(service)}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="learn-more">Click to learn more</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-icon">{selectedService.icon}</div>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;