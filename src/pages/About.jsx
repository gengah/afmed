import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1>About AFMED Healthcare</h1>
          <p>Empowering better health through comprehensive, compassionate care.</p>
        </div>
      </div>

      <section className="mission-vision">
        <div className="container">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>Empowering better health through comprehensive, compassionate care. We are committed to providing personalized medical services that address the unique needs of each patient and their family.</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>To be the region's most trusted partner in lifelong wellness. We envision a future where quality healthcare is accessible, affordable, and tailored to every individual's journey toward optimal health.</p>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Compassion</h3>
              <p>We treat every patient with empathy, understanding, and genuine care, recognizing that behind every medical need is a person with unique circumstances.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h3>Integrity</h3>
              <p>We maintain the highest ethical standards in all our interactions, ensuring transparency, honesty, and accountability in everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We embrace cutting-edge medical technologies and approaches, continuously seeking better ways to serve our patients and improve healthcare outcomes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our practice, from clinical care to patient experience, setting the standard for healthcare quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-preview">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-image">
            <img src="https://via.placeholder.com/800x400/0077B6/FFFFFF?text=AFMED+Medical+Team" alt="AFMED Healthcare Medical Team" />
          </div>
          <p>Our dedicated team of physicians, nurses, and support staff work together to provide comprehensive care. Each member brings years of experience and a commitment to patient-centered healthcare.</p>
        </div>
      </section>
    </div>
  );
};

export default About;