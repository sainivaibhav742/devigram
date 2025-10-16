import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand enhanced-brand" to="/">
          <div className="brand-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <span className="brand-text">Devigram</span>
        </Link>
        
        <button className="navbar-toggler enhanced-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto enhanced-nav">
            <li className="nav-item">
              <Link className={`nav-link enhanced-link ${location.pathname === '/courses' ? 'active' : ''}`} to="/courses">
                <span>Courses</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link enhanced-link ${location.pathname === '/campus' ? 'active' : ''}`} to="/campus">
                <span>Campus Program</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link enhanced-link ${location.pathname === '/notes' ? 'active' : ''}`} to="/notes">
                <span>Notes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link enhanced-link ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">
                <span>Blogs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link enhanced-link ${location.pathname === '/hire' ? 'active' : ''}`} to="/hire">
                <span>Hire From Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link enhanced-link ${location.pathname === '/counselling' ? 'active' : ''}`} to="/counselling">
                <span>Counselling</span>
              </Link>
            </li>
          </ul>
          
          <div className="navbar-actions">
            <Link to="/apply" className="btn btn-primary enhanced-cta">
              <span>Apply Now</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;