import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-brand">
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Devigram logo" className="footer-logo" />
              <span>Devigram</span>
            </div>
            <p>Empowering 10,000+ developers to crack top tech interviews with comprehensive algorithm training and personalized mentorship.</p>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5>Learn</h5>
            <ul className="footer-links">
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/notes">Notes</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5>Programs</h5>
            <ul className="footer-links">
              <li><Link to="/campus">Campus</Link></li>
              <li><Link to="/hire">Hire From Us</Link></li>
              <li><Link to="/counselling">Counselling</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link to="/apply">Contact</Link></li>
              <li><Link to="/hire">Careers</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5>Account</h5>
            <ul className="footer-links">
              <li><Link to="/apply">Apply</Link></li>
              <li><Link to="/admin-login">Admin</Link></li>
            </ul>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="footer-copyright">&copy; 2024 Devigram. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-links">
              <a href="https://twitter.com/sainivaibhav742" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
              <a href="https://www.linkedin.com/in/sainivaibhav742" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/sainivaibhav742/devigram" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              <a href="https://sainivaibhav742.github.io/devigram" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;