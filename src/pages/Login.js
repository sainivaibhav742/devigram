import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const demoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      {/* Main Content */}
      <div className="login-container">
        {/* Toggle Buttons */}
        <div className="auth-toggle">
          <Link to="/login" className="toggle-btn active">Sign In</Link>
          <Link to="/signup" className="toggle-btn">Sign Up</Link>
        </div>

        {/* Header */}
        <div className="login-header">
          <div className="logo">
            <i className="bi bi-mortarboard-fill"></i>
            <span>Devigram</span>
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to continue your learning journey</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
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
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className={`login-btn ${loading ? 'loading' : ''}`} disabled={loading}>
            <span className="btn-text">Sign In</span>
            <span className="btn-loading">
              <i className="bi bi-arrow-clockwise"></i>
            </span>
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-btn google" onClick={demoLogin}>
              <i className="bi bi-google"></i>
              Google
            </button>
            <button type="button" className="social-btn github" onClick={demoLogin}>
              <i className="bi bi-github"></i>
              GitHub
            </button>
          </div>

          <div className="guest-access">
            <Link to="/dashboard?visitor=true" className="guest-link">
              <i className="bi bi-person-circle"></i>
              Continue as Guest
            </Link>
          </div>

          <div className="explore-option">
            <Link to="/" className="explore-link">
              <i className="bi bi-compass"></i>
              Explore Website
            </Link>
          </div>

          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>

        {/* Features */}
        <div className="features">
          <div className="feature">
            <i className="bi bi-book"></i>
            <span>75+ Courses</span>
          </div>
          <div className="feature">
            <i className="bi bi-trophy"></i>
            <span>Certificates</span>
          </div>
          <div className="feature">
            <i className="bi bi-people"></i>
            <span>10K+ Students</span>
          </div>
        </div>
      </div>

      {/* Side Illustration */}
      <div className="illustration">
        <div className="illustration-content">
          <div className="hero-text">
            <h2>Master Algorithms</h2>
            <p>Learn data structures and algorithms with interactive coding challenges</p>
          </div>
          
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="window-title">binarySearch.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="line-num">1</span>
                <span className="code">function <span className="func">binarySearch</span>(arr, target) {`{`}</span>
              </div>
              <div className="code-line">
                <span className="line-num">2</span>
                <span className="code">  let <span className="var">left</span> = 0, <span className="var">right</span> = arr.length - 1;</span>
              </div>
              <div className="code-line">
                <span className="line-num">3</span>
                <span className="code">  while (left &lt;= right) {`{`}</span>
              </div>
              <div className="code-line">
                <span className="line-num">4</span>
                <span className="code">    const <span className="var">mid</span> = Math.floor((left + right) / 2);</span>
              </div>
              <div className="code-line">
                <span className="line-num">5</span>
                <span className="code">    if (arr[mid] === target) return mid;</span>
              </div>
              <div className="code-line">
                <span className="line-num">6</span>
                <span className="code">    arr[mid] &lt; target ? left = mid + 1 : right = mid - 1;</span>
              </div>
              <div className="code-line">
                <span className="line-num">7</span>
                <span className="code">  {`}`}</span>
              </div>
              <div className="code-line">
                <span className="line-num">8</span>
                <span className="code">  return -1;</span>
              </div>
              <div className="code-line">
                <span className="line-num">9</span>
                <span className="code">{`}`}</span>
              </div>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><i className="bi bi-book"></i></div>
              <div className="stat-info">
                <span className="stat-number">75+</span>
                <span className="stat-label">Courses</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="bi bi-people"></i></div>
              <div className="stat-info">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students</span>
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
    </div>
  );
};

export default Login;