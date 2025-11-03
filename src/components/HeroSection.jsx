import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Your Partner in Family Medicine and Wellness</h1>
        <p>Providing compassionate, personalized care for your whole family.</p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">Book an Appointment</Link>
          <Link to="/providers" className="btn-secondary">Find a Provider</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;