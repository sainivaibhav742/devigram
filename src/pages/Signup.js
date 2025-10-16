import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="login-wrapper">
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      {/* Side Illustration */}
      <div className="illustration">
        <div className="illustration-content">
          <div className="hero-text">
            <h2>Join Our Community</h2>
            <p>Start your journey to master algorithms and land your dream job</p>
          </div>
          
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="window-title">quickSort.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="line-num">1</span>
                <span className="code">function <span className="func">quickSort</span>(arr) {`{`}</span>
              </div>
              <div className="code-line">
                <span className="line-num">2</span>
                <span className="code">  if (arr.length &lt;= 1) return arr;</span>
              </div>
              <div className="code-line">
                <span className="line-num">3</span>
                <span className="code">  const <span className="var">pivot</span> = arr[arr.length - 1];</span>
              </div>
              <div className="code-line">
                <span className="line-num">4</span>
                <span className="code">  const <span className="var">left</span> = [], <span className="var">right</span> = [];</span>
              </div>
              <div className="code-line">
                <span className="line-num">5</span>
                <span className="code">  for (let i = 0; i &lt; arr.length - 1; i++) {`{`}</span>
              </div>
              <div className="code-line">
                <span className="line-num">6</span>
                <span className="code">    arr[i] &lt; pivot ? left.push(arr[i]) : right.push(arr[i]);</span>
              </div>
              <div className="code-line">
                <span className="line-num">7</span>
                <span className="code">  {`}`}</span>
              </div>
              <div className="code-line">
                <span className="line-num">8</span>
                <span className="code">  return [...quickSort(left), pivot, ...quickSort(right)];</span>
              </div>
              <div className="code-line">
                <span className="line-num">9</span>
                <span className="code">{`}`}</span>
              </div>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><i className="bi bi-people"></i></div>
              <div className="stat-info">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="bi bi-briefcase"></i></div>
              <div className="stat-info">
                <span className="stat-number">500+</span>
                <span className="stat-label">Companies</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="bi bi-trophy"></i></div>
              <div className="stat-info">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="floating-elements">
          <div className="float-element element-1">
            <i className="bi bi-code-slash"></i>
          </div>
          <div className="float-element element-2">
            <i className="bi bi-cpu"></i>
          </div>
          <div className="float-element element-3">
            <i className="bi bi-graph-up"></i>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="login-container">
        {/* Toggle Buttons */}
        <div className="auth-toggle">
          <Link to="/login" className="toggle-btn">Sign In</Link>
          <Link to="/signup" className="toggle-btn active">Sign Up</Link>
        </div>

        {/* Header */}
        <div className="login-header">
          <div className="logo">
            <i className="bi bi-mortarboard-fill"></i>
            <span>Devigram</span>
          </div>
          <h1>Create Account</h1>
          <p>Join thousands of developers mastering algorithms</p>
        </div>

        {/* Signup Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="bi bi-person"></i>
            <input type="text" placeholder="Full Name" required />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <i className="bi bi-envelope"></i>
            <input type="email" placeholder="Email address" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <i className="bi bi-lock"></i>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              required 
            />
            <label>Password</label>
            <button 
              type="button" 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </button>
          </div>

          <div className="form-options">
            <label className="checkbox">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className={`login-btn ${loading ? 'loading' : ''}`} disabled={loading}>
            <span className="btn-text">Create Account</span>
            <span className="btn-loading">
              <i className="bi bi-arrow-clockwise"></i>
            </span>
          </button>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-btn google">
              <i className="bi bi-google"></i>
              Google
            </button>
            <button type="button" className="social-btn github">
              <i className="bi bi-github"></i>
              GitHub
            </button>
          </div>

          <div className="signup-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </form>

        {/* Features */}
        <div className="features">
          <div className="feature">
            <i className="bi bi-shield-check"></i>
            <span>Secure</span>
          </div>
          <div className="feature">
            <i className="bi bi-people"></i>
            <span>Community</span>
          </div>
          <div className="feature">
            <i className="bi bi-trophy"></i>
            <span>Success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;