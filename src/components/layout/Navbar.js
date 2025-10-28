import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: '/courses', label: 'Courses' },
    { path: '/campus', label: 'Campus' },
    { path: '/notes', label: 'Notes' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/hire', label: 'Hire From Us', highlight: true },
    { path: '/counselling', label: 'Counselling' }
  ];

  return (
    <>
      <nav className={`navbar-slim ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <Link to="/" className="nav-brand" aria-label="Devigram">
            <div className="brand-logo">
              {/* Decorative image: hide from assistive tech, label is on the link */}
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" aria-hidden="true" className="brand-image" />
            </div>
            <span className="brand-title">Devigram</span>
          </Link>

          <div className="nav-links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''} ${link.highlight ? 'highlight' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/apply" className="nav-cta">Apply Now</Link>

          <button 
            className={`nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="mobile-nav-brand" aria-label="Devigram">
            <div className="brand-logo">
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" aria-hidden="true" className="brand-image" />
            </div>
            <span className="brand-title">Devigram</span>
          </Link>
          <button 
            className="mobile-nav-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="mobile-nav-content">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''} ${link.highlight ? 'highlight' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/apply" 
            className="mobile-nav-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
