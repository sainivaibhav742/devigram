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
          <Link to="/" className="nav-brand">
            <div className="brand-logo">
              <i className="bi bi-mortarboard-fill"></i>
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
