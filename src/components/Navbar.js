import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg fixed-top scrolled">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-mortarboard-fill"></i>
          Devigram
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`} to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/campus' ? 'active' : ''}`} to="/campus">Campus Program</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/notes' ? 'active' : ''}`} to="/notes">Notes</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                More
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/hire">Hire From Us</Link></li>
                <li><Link className="dropdown-item" to="/counselling">Counselling</Link></li>
              </ul>
            </li>
          </ul>
          
          <div className="navbar-actions">
            <Link to="/login" className="btn btn-outline-primary me-2">Sign In</Link>
            <Link to="/apply" className="btn btn-primary">Apply Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;