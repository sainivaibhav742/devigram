import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/admin-login.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo authentication
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      navigate('/admin');
    } else {
      alert('Invalid credentials. Use admin/admin123');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="admin-icon">
            <i className="bi bi-shield-check"></i>
          </div>
          <h2>Admin Login</h2>
          <p>Access the administrative dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              placeholder="Enter username"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              placeholder="Enter password"
              required
            />
          </div>
          
          <button type="submit" className="login-btn">
            <i className="bi bi-box-arrow-in-right"></i>
            Login to Dashboard
          </button>
        </form>
        
        <div className="login-footer">
          <p>Demo credentials: admin / admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;