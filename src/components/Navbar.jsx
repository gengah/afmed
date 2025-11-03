import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AFMED Healthcare
        </Link>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</Link>
          <div className="navbar-dropdown">
            <span className="navbar-link dropdown-toggle">Services</span>
            <div className="dropdown-menu">
              <Link to="/services" onClick={() => setIsOpen(false)}>All Services</Link>
              <Link to="/services#family-medicine" onClick={() => setIsOpen(false)}>Family Medicine</Link>
              <Link to="/services#diagnostics" onClick={() => setIsOpen(false)}>Diagnostics</Link>
              <Link to="/services#virtual-care" onClick={() => setIsOpen(false)}>Virtual Care</Link>
            </div>
          </div>
          <Link to="/providers" className="navbar-link" onClick={() => setIsOpen(false)}>Providers</Link>
          <Link to="/resources" className="navbar-link" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;