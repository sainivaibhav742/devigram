import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Hire = () => {
  const [selectedRole, setSelectedRole] = useState('all');

  const talentPool = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Senior Full Stack Developer',
      experience: '5+ years',
      skills: ['React', 'Node.js', 'AWS', 'System Design'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      projects: 25,
      availability: 'Available',
      salary: '₹35L',
      location: 'Bangalore',
      category: 'senior'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Frontend Developer',
      experience: '3 years',
      skills: ['React', 'TypeScript', 'Next.js', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      projects: 18,
      availability: 'Available',
      salary: '₹22L',
      location: 'Mumbai',
      category: 'mid'
    },
    {
      id: 3,
      name: 'Arjun Kumar',
      role: 'Backend Developer',
      experience: '4 years',
      skills: ['Java', 'Spring Boot', 'Microservices', 'Docker'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 4.7,
      projects: 22,
      availability: 'Available',
      salary: '₹28L',
      location: 'Hyderabad',
      category: 'mid'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Data Scientist',
      experience: '2 years',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 4.6,
      projects: 12,
      availability: 'Available',
      salary: '₹18L',
      location: 'Chennai',
      category: 'junior'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'DevOps Engineer',
      experience: '6+ years',
      skills: ['AWS', 'Kubernetes', 'Jenkins', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      projects: 30,
      availability: 'Available',
      salary: '₹42L',
      location: 'Delhi',
      category: 'senior'
    },
    {
      id: 6,
      name: 'Anita Sharma',
      role: 'Mobile Developer',
      experience: '3 years',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      projects: 16,
      availability: 'Available',
      salary: '₹25L',
      location: 'Pune',
      category: 'mid'
    }
  ];



  const filteredTalent = selectedRole === 'all' ? talentPool : talentPool.filter(person => person.category === selectedRole);

  return (
    <>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="hire-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Hire Elite Developers</h1>
                <p className="hero-subtitle">Access our curated pool of 5,000+ skilled developers trained in algorithms, system design, and modern technologies with proven track records</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">5K+</span>
                    <span className="stat-label">Developers</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Companies</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Retention</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <Link to="/apply" className="btn btn-primary btn-lg">Start Hiring</Link>
                  <button className="btn btn-outline-light btn-lg">View Talent Pool</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hire-showcase">
                <div className="talent-preview">
                  <div className="preview-card main-card">
                    <div className="card-header">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Developer" />
                      <div className="developer-info">
                        <h4>Senior Developer</h4>
                        <p>5+ Years Experience</p>
                      </div>
                      <div className="availability-badge">Available</div>
                    </div>
                    <div className="skills-preview">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">AWS</span>
                    </div>
                    <div className="card-stats">
                      <div className="stat">
                        <span className="stat-value">4.9</span>
                        <span className="stat-label">Rating</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">₹35L</span>
                        <span className="stat-label">Expected</span>
                      </div>
                    </div>
                  </div>
                  <div className="floating-profiles">
                    <div className="mini-profile profile-1">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Developer" />
                      <span>Frontend</span>
                    </div>
                    <div className="mini-profile profile-2">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Developer" />
                      <span>Backend</span>
                    </div>
                    <div className="mini-profile profile-3">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Developer" />
                      <span>Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Filter */}
      <section className="talent-filter py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Browse Our Talent Pool</h2>
            <p className="section-subtitle">Filter by experience level and find the perfect match</p>
          </div>
          
          <div className="filter-tabs">
            <button 
              className={`filter-btn ${selectedRole === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedRole('all')}
            >
              All Developers ({talentPool.length})
            </button>
            <button 
              className={`filter-btn ${selectedRole === 'junior' ? 'active' : ''}`}
              onClick={() => setSelectedRole('junior')}
            >
              Junior (0-2 years)
            </button>
            <button 
              className={`filter-btn ${selectedRole === 'mid' ? 'active' : ''}`}
              onClick={() => setSelectedRole('mid')}
            >
              Mid-Level (2-5 years)
            </button>
            <button 
              className={`filter-btn ${selectedRole === 'senior' ? 'active' : ''}`}
              onClick={() => setSelectedRole('senior')}
            >
              Senior (5+ years)
            </button>
          </div>
        </div>
      </section>

      {/* Talent Profiles */}
      <section className="talent-profiles py-5">
        <div className="container">
          <div className="row g-4">
            {filteredTalent.map(person => (
              <div key={person.id} className="col-lg-4 col-md-6">
                <div className="talent-profile-card">
                  <div className="profile-header">
                    <img src={person.image} alt={person.name} className="profile-avatar" />
                    <div className="availability-status">{person.availability}</div>
                  </div>
                  <div className="profile-content">
                    <h3 className="profile-name">{person.name}</h3>
                    <p className="profile-role">{person.role}</p>
                    <div className="profile-meta">
                      <span className="experience">{person.experience}</span>
                      <span className="location">{person.location}</span>
                    </div>
                    <div className="profile-skills">
                      {person.skills.map((skill, index) => (
                        <span key={index} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                    <div className="profile-stats">
                      <div className="stat-group">
                        <div className="stat-item">
                          <i className="bi bi-star-fill"></i>
                          <span>{person.rating}</span>
                        </div>
                        <div className="stat-item">
                          <i className="bi bi-briefcase-fill"></i>
                          <span>{person.projects} projects</span>
                        </div>
                      </div>
                      <div className="salary-info">{person.salary}</div>
                    </div>
                    <div className="profile-actions">
                      <button className="btn btn-outline-primary">View Profile</button>
                      <button className="btn btn-primary">Contact</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies */}
      <section className="trusted-companies py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Trusted by Leading Companies</h2>
            <p className="section-subtitle">Our learners work at top companies</p>
          </div>

          <div style={{position: 'relative', overflow: 'hidden', width: '100%'}}>
            <style>{`
              @keyframes scroll-brands {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .brand-slider {
                display: flex;
                animation: scroll-brands 35s linear infinite;
                gap: 60px;
                align-items: center;
              }
              .brand-slider:hover {
                animation-play-state: paused;
              }
              .brand-logo-wrapper {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 10px 18px;
                background: transparent;
                border-radius: 10px;
                transition: all 0.3s ease;
                min-width: 120px;
              }
              .brand-logo-wrapper:hover {
                background: transparent;
                transform: translateY(-2px);
              }
            `}</style>
            <div className="brand-slider">
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{height: '35px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{height: '40px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" style={{height: '35px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="X (Twitter)" style={{height: '28px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" style={{height: '28px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{height: '28px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Flipkart_logo.svg" alt="Flipkart" style={{height: '32px', objectFit: 'contain'}} />
              </div>

              {/* Duplicate for seamless loop */}
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{height: '35px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{height: '40px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" style={{height: '35px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="X (Twitter)" style={{height: '28px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" style={{height: '28px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{height: '28px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" style={{height: '32px', objectFit: 'contain'}} />
              </div>
              <div className="brand-logo-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Flipkart_logo.svg" alt="Flipkart" style={{height: '32px', objectFit: 'contain'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="hiring-process py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Simple 4-Step Hiring Process</h2>
            <p className="section-subtitle">Get matched with top talent in just 48 hours</p>
          </div>
          
          <div className="process-steps">
            <div className="step-card">
              <div className="step-icon">
                <i className="bi bi-clipboard-check"></i>
              </div>
              <div className="step-number">01</div>
              <h4>Share Requirements</h4>
              <p>Tell us about your role, required skills, team culture, and project details</p>
            </div>
            
            <div className="step-card">
              <div className="step-icon">
                <i className="bi bi-people-fill"></i>
              </div>
              <div className="step-number">02</div>
              <h4>Get Matched Profiles</h4>
              <p>Receive 3-5 pre-screened, perfectly matched candidate profiles within 48 hours</p>
            </div>
            
            <div className="step-card">
              <div className="step-icon">
                <i className="bi bi-chat-dots"></i>
              </div>
              <div className="step-number">03</div>
              <h4>Interview & Select</h4>
              <p>Conduct interviews with our support and select your ideal candidate</p>
            </div>
            
            <div className="step-card">
              <div className="step-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <div className="step-number">04</div>
              <h4>Onboard & Support</h4>
              <p>We assist with smooth onboarding and provide ongoing support for success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hire-cta">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Build Your Dream Team?</h2>
                <p className="cta-subtitle">Join 500+ companies that trust Devigram for their hiring needs. Get started today and hire your first developer within 48 hours.</p>
                <div className="cta-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Pre-screened Candidates</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>48-hour Matching</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>95% Retention Rate</span>
                  </div>
                </div>
                <div className="cta-actions">
                  <Link to="/apply" className="btn btn-primary btn-lg">Start Hiring Now</Link>
                  <Link to="/counselling" className="btn btn-outline-light btn-lg">Schedule Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hire;