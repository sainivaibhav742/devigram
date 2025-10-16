import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/courses', label: 'Courses', icon: 'bi-book' },
    { path: '/campus', label: 'Campus', icon: 'bi-building' },
    { path: '/notes', label: 'Notes', icon: 'bi-journal-text' },
    { path: '/blogs', label: 'Blogs', icon: 'bi-newspaper' },
    { path: '/hire', label: 'Hire From Us', icon: 'bi-briefcase', special: true },
    { path: '/counselling', label: 'Counselling', icon: 'bi-chat-dots' }
  ];

  return (
    <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <div className="brand-container">
            <div className="brand-icon">
              <div className="icon-bg">
                <i className="bi bi-mortarboard-fill"></i>
              </div>
              <div className="icon-glow"></div>
            </div>
            <div className="brand-text">
              <span className="brand-name">Devigram</span>
              <span className="brand-tagline">Learn • Grow • Succeed</span>
            </div>
          </div>
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
        
        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={item.path} className="nav-item" style={{'--delay': `${index * 0.1}s`}}>
                <Link 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''} ${item.special ? 'special-link' : ''}`} 
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="link-content">
                    <i className={`bi ${item.icon}`}></i>
                    <span className="link-text">{item.label}</span>
                    <div className="link-indicator"></div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* CTA Section */}
          <div className="nav-cta">
            <Link to="/apply" className="btn-primary">
              <div className="btn-bg"></div>
              <div className="btn-content">
                <i className="bi bi-rocket-takeoff"></i>
                <span>Apply Now</span>
              </div>
              <div className="btn-shine"></div>
            </Link>
          </div>
        </div>
        
        {/* Background Overlay for Mobile */}
        <div 
          className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;