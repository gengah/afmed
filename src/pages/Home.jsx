import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Top Action Bar */}
      <div className="top-action-bar">
        <div className="container">
          <div className="brand-section">
            <h1 className="brand-title">AFMED Family Medicine</h1>
        
          </div>

          <div className="actions-section">
            <a href="#appointment" className="action-item">
              <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Appointment</span>
            </a>

            <a href="#virtual" className="action-item">
              <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>24/7 Virtual Care</span>
            </a>

            <a href="#billing" className="action-item">
              <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Pay Your Bill</span>
            </a>

            <Link to="/portal" className="action-item">
              <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Patient Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="secondary-nav">
        <div className="container">
          <div className="proudly-text">Proudly Part of Privia Health</div>
          <nav className="main-navigation">
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/team" className="nav-link">The Team</Link>
            <Link to="/locations" className="nav-link">Locations</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/resources" className="nav-link">Patient Resources ▾</Link>
          </nav>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h1>Services</h1>
          
          <h2>Core Services</h2>
          <ul className="services-list">
            <li>Allergy testing (OncImmune, ImmunoCap, and ELISA-ACT Biotechnologies)</li>
            <li>Cardiac evaluations (including EKGs)</li>
            <li>Chronic disease management</li>
            <li>Diabetes care</li>
            <li>DOT exams</li>
            <li>Gynecological services</li>
            <li>Hypertension management</li>
            <li>Immunizations and vaccinations</li>
            <li>Joint injections</li>
            <li>Minor office procedures</li>
            <li>Occupational health services</li>
            <li>Physicals (annual, sports, employment, immigration)</li>
            <li>Preventive care and health screenings</li>
            <li>Primary care for all ages</li>
            <li>Sick visits and urgent care</li>
            <li>Telemedicine appointments</li>
            <li>Travel medicine consultations</li>
            <li>Weight management programs</li>
            <li>Well-child visits and pediatric care</li>
            <li>Women's health services</li>
          </ul>

          <h2>Diagnostic Services</h2>
          <ul className="services-list">
            <li>Blood work and laboratory testing</li>
            <li>In-office lab services</li>
            <li>Pulmonary function testing</li>
            <li>Rapid strep and flu testing</li>
            <li>Urinalysis and urine cultures</li>
            <li>X-ray services (referral based)</li>
          </ul>

          <h2>Specialized Care</h2>
          <ul className="services-list">
            <li>Asthma management</li>
            <li>Chronic pain management</li>
            <li>Mental health consultations</li>
            <li>Nutritional counseling</li>
            <li>Smoking cessation programs</li>
          </ul>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <h2>About AFMED Healthcare</h2>
          <p>
            AFMED Healthcare is a trusted family medicine practice dedicated to providing comprehensive, 
            compassionate care to patients of all ages. Our experienced team of healthcare professionals 
            is committed to helping you achieve and maintain optimal health through preventive care, 
            chronic disease management, and acute care services.
          </p>
          <p>
            As part of Privia Health, we are connected with leading doctors in the community to deliver 
            high-quality, coordinated care centered on our patients' needs. We accept most major insurance 
            plans and offer convenient scheduling options, including telemedicine appointments.
          </p>
        </div>
      </section>

      {/* Footer Info */}
      <section className="footer-info">
        <div className="container">
          <div className="footer-column">
            <h3>Annandale Office</h3>
            <p>7617 Little River Turnpike</p>
            <p>Suite 710</p>
            <p>Annandale, VA 22003</p>
            <p style={{ marginTop: '1rem' }}>
              Office <a href="tel:7039410267" className="phone-link">(703) 941-0267</a>
            </p>
            <p>
              Fax <a href="tel:7039412018" className="phone-link">(703) 941-2018</a>
            </p>
          </div>

          <div className="footer-column">
            <h3>Connect with Us</h3>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Download the App</h3>
            <div className="app-download">
              <ul>
                <li>Make appointments</li>
                <li>Message your provider</li>
                <li>Manage Medications</li>
                <li>Get care on the go</li>
              </ul>
              <div className="app-buttons">
                <a href="#appstore" className="app-button">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on App Store" />
                </a>
                <a href="#playstore" className="app-button">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="login-buttons">
              <a href="#patient-login" className="btn-login btn-patient-login">Patient Login</a>
              <a href="#physician-login" className="btn-login btn-physician-login">For Physicians</a>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <div className="copyright-footer">
        <div className="container">
          <p>© 2025 Privia Health</p>
          <div className="footer-links">
            <a href="#privacy">SMS Privacy Policy</a>
            <span>|</span>
            <a href="#nondiscrimination">Nondiscrimination Policy</a>
            <span>|</span>
            <a href="#notice">Notice of Privacy Practices</a>
            <span>|</span>
            <a href="#surprises">No Surprises Act</a>
            <span>|</span>
            <a href="#sitemap">Sitemap</a>
            <span>|</span>
            <a href="#california">California Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;