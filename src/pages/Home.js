import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All Courses');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const courses = [
    {
      id: 1,
      title: 'Mastering DSA & System Design',
      badge: 'Professional',
      category: 'Software Development',
      outcomes: [
        'Complete understanding of basic to advance problem solving',
        'Ability to approach a problem with multiple solution',
        'Proficiency in System Design (LLD + HLD)',
        'Ability to convert algorithms to working code',
        'Case studies with implementation'
      ]
    },
    {
      id: 2,
      title: 'Mastering DSA & System Design with Full Stack Specialization',
      badge: 'Professional',
      category: 'Web Development',
      outcomes: [
        'Complete understanding of basic to advance problem solving',
        'Ability to approach a problem with multiple solution',
        'Proficiency in System Design (LLD + HLD)',
        'Ability to convert algorithms to working code',
        'Web development using MERN Stack'
      ]
    },
    {
      id: 3,
      title: 'Advanced Data Science and Generative AI Course',
      badge: 'Professional',
      category: 'Data Science',
      outcomes: [
        'Solid understanding of fundamentals of AI & ML',
        'Statistical thinking and descriptive analysis',
        'Building your own GPT/LLM model',
        'Business case studies and real-life projects using Generative AI',
        'Advanced concepts of Excel, Tableau & Power BI'
      ]
    },
    {
      id: 4,
      title: 'Complete Placement Package for College Students',
      badge: 'Student',
      category: 'Software Development',
      outcomes: [
        'Complete understanding of basic to advance problem solving',
        'Ability to approach a problem with multiple solution',
        'Computer fundaments with projects',
        'Ability to convert algorithms to working code',
        'Web development using MERN Stack with projects'
      ]
    },
    {
      id: 5,
      title: 'Full Stack Web Development - MERN',
      badge: 'Professional',
      category: 'Web Development',
      outcomes: [
        'Basics of web development using HTML, CSS and Javascript',
        'Building web applications using React, Next.js and MongoDB',
        'Backend development using next.js and node',
        'Fundamentals of building API and microservices',
        'Live project development'
      ]
    },
    {
      id: 6,
      title: 'Tech Interview Preparation - Mock Interviews',
      badge: 'Professional',
      category: 'Interview Preparation',
      outcomes: [
        '1:1 Mentorship with Mentors from MAANG',
        'Weekly sessions on interview preparation',
        'Mock interview with feedback sessions and guidance',
        'Session on resume review, Naukri and LinkedIn profiles',
        'Referral in your dream company'
      ]
    }
  ];

  const filteredCourses = activeFilter === 'All Courses' ? courses : courses.filter(course => course.category === activeFilter);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)', 
        position: 'relative', 
        overflow: 'hidden', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '80px', 
        paddingBottom: '60px'
      }}>
        {/* Animated background elements */}
        <div className="hero-bg-animation">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="row align-items-center g-5 justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="hero-content" style={{width: '100%'}}>
                <div className="hero-badge d-inline-flex align-items-center gap-2 mb-4" style={{
                  background: 'rgba(255, 255, 255, 0.15)', 
                  backdropFilter: 'blur(10px)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)', 
                  borderRadius: '50px', 
                  padding: '10px 24px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}>
                  <i className="bi bi-check-circle-fill" style={{fontSize: '18px', color: '#fff'}}></i>
                  <span style={{color: '#fff', fontWeight: '700', fontSize: '15px', letterSpacing: '0.5px'}}>Job Ready Program</span>
                </div>

                <h1 className="hero-title" style={{fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: '900', color: '#fff', lineHeight: '1.05', marginBottom: '1.5rem', letterSpacing: '-0.02em'}}>
                  DSA Mastery<br/>Bootcamp
                </h1>

                {/* Brand Line Added Here */}
                <div className="brand-line" style={{marginBottom: '2rem'}}>
                  <p style={{
                    fontSize: '1.3rem', 
                    fontWeight: '600', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    marginBottom: '0', 
                    letterSpacing: '0.5px'
                  }}>
                    Devigram: Code Your Future, Shape Tomorrow
                  </p>
                </div>

                <div className="hero-buttons d-flex flex-wrap gap-3 mb-4" style={{justifyContent: 'center', width: '100%'}}>
                  <Link to="/apply" className="btn btn-lg hero-btn-primary" style={{background: '#fff', color: '#667eea', border: 'none', padding: '15px 35px', fontSize: '1.1rem', fontWeight: '700', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none'}}>
                    Start Learning Now
                  </Link>
                  <Link to="/courses" className="btn btn-outline-light btn-lg hero-btn-secondary" style={{
                    border: '2px solid rgba(255,255,255,0.5)', 
                    padding: '15px 35px', 
                    fontSize: '1.1rem', 
                    fontWeight: '700', 
                    borderRadius: '12px', 
                    color: '#fff', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}>
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
                <div style={{
                  background: 'rgba(255,255,255,0.98)', 
                  borderRadius: '28px', 
                  padding: '40px', 
                  boxShadow: '0 30px 80px rgba(0,0,0,0.35)', 
                  backdropFilter: 'blur(10px)', 
                  maxWidth: '480px', 
                  width: '100%',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'transform 0.5s ease'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #f0f0ff 0%, #e8e4ff 100%)', 
                    borderRadius: '20px', 
                    padding: '30px', 
                    marginBottom: '24px', 
                    minHeight: '140px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(99, 102, 241, 0.1)'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <i className="bi bi-code-square" style={{fontSize: '3rem', color: '#6366f1'}}></i>
                      <p style={{marginTop: '10px', color: '#6366f1', fontWeight: '600', fontSize: '1.1rem', marginBottom: 0}}>Premium Course Access</p>
                    </div>
                  </div>

                  <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '16px', padding: '20px', marginBottom: '24px', textAlign: 'center', boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                      <i className="bi bi-trophy-fill" style={{fontSize: '1.5rem', color: '#ffd700'}}></i>
                      <span style={{fontSize: '1.1rem', fontWeight: '700', color: '#fff'}}>95% Placement Success</span>
                    </div>
                  </div>

                  <div style={{borderTop: '2px dashed #ddd', paddingTop: '24px', marginTop: '24px'}}>
                    <div style={{color: '#666', fontSize: '15px', marginBottom: '12px', fontWeight: '500'}}>Total program fee:</div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px'}}>
                      <span style={{fontSize: '1.75rem', fontWeight: '700', color: '#999', textDecoration: 'line-through'}}>₹50,000/-</span>
                      <span style={{fontSize: '2rem', fontWeight: '900', color: '#000'}}>₹30,000/-</span>
                      <span style={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', 
                        padding: '6px 14px', 
                        borderRadius: '8px', 
                        fontSize: '15px', 
                        fontWeight: '700', 
                        color: '#fff', 
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                      }}>Save 40%</span>
                    </div>

                    <Link to="/apply" className="btn w-100" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '20px', fontSize: '1.3rem', fontWeight: '700', borderRadius: '14px', border: 'none', boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)', transition: 'all 0.3s'}}>
                      Apply Now
                    </Link>

                    <p style={{fontSize: '11px', color: '#999', marginTop: '16px', lineHeight: '1.5', marginBottom: 0, textAlign: 'center'}}>
                      By continuing, you agree to Devigram's Privacy Policy and Terms & Conditions. The fee can be paid via custom payment link at enrollment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Logos Slider */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.15)', 
            marginTop: '60px', 
            paddingTop: '30px', 
            paddingBottom: '20px'
          }}>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
              <p style={{
                fontSize: '0.8rem', 
                marginBottom: '0', 
                fontWeight: '600', 
                color: 'rgba(255,255,255,0.7)', 
                letterSpacing: '1.5px', 
                textTransform: 'uppercase'
              }}>Our learners work at top companies</p>
            </div>

            <div style={{position: 'relative', overflow: 'hidden', width: '100%'}}>
              <style>{`
                @keyframes scroll-brands {
                    0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
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
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 10px;
                  transition: all 0.3s ease;
                  min-width: 120px;
                }
                .brand-logo-wrapper:hover {
                  background: rgba(255, 255, 255, 0.2);
                  transform: translateY(-2px);
                }
                .floating-shape {
                  position: absolute;
                  border-radius: 50%;
                  background: rgba(255, 255, 255, 0.1);
                  backdrop-filter: blur(5px);
                }
                .shape-1 {
                  width: 300px;
                  height: 300px;
                  top: -150px;
                  left: -150px;
                  animation: float 20s infinite ease-in-out;
                }
                .shape-2 {
                  width: 200px;
                  height: 200px;
                  bottom: -100px;
                  right: -100px;
                  animation: float 15s infinite ease-in-out reverse;
                }
                .shape-3 {
                  width: 150px;
                  height: 150px;
                  top: 50%;
                  right: 10%;
                  animation: float 25s infinite ease-in-out;
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0) rotate(0deg); }
                  50% { transform: translateY(-20px) rotate(10deg); }
                }
              `}</style>
              <div className="hero-bg-animation">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
              </div>
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
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="stats-banner-card" style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <div className="row text-center">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value" style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#6366f1',
                    marginBottom: '10px'
                  }}>147%</div>
                  <div className="stat-desc" style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    fontWeight: '600'
                  }}>Avg. CTC Hike</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value" style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#8b5cf6',
                    marginBottom: '10px'
                  }}>10,000+</div>
                  <div className="stat-desc" style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    fontWeight: '600'
                  }}>Careers Transformed</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value" style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#d946ef',
                    marginBottom: '10px'
                  }}>5,000+</div>
                  <div className="stat-desc" style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    fontWeight: '600'
                  }}>Learners Community</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value" style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#f43f5e',
                    marginBottom: '10px'
                  }}>100+</div>
                  <div className="stat-desc" style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    fontWeight: '600'
                  }}>Experienced Mentors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Advantage of Joining Devigram</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>Transform your career with our comprehensive learning ecosystem</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="advantage-card blue-theme" style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="advantage-image" style={{height: '200px', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" alt="Tech Professionals" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }} />
                </div>
                <div className="advantage-content" style={{padding: '30px'}}>
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>Upskill with Top Tech Industry Professionals</h4>
                  <ul className="advantage-list" style={{
                    paddingLeft: '20px',
                    color: '#475569',
                    lineHeight: '1.8',
                    textAlign: 'left',
                    maxWidth: '90%',
                    margin: '0 auto'
                  }}>
                    <li style={{marginBottom: '10px'}}>Gain knowledge from professionals working at Microsoft, Goldman Sachs etc</li>
                    <li style={{marginBottom: '10px'}}>Doubt clearing session with dedicated teaching assistant</li>
                    <li style={{marginBottom: '10px'}}>1:1 Mentorship with professionals from top tech company. Option to choose your Mentor based on your target company or experience</li>
                    <li style={{marginBottom: '10px'}}>Live interactive classes with small batch size and open discussion with instructor</li>
                    <li style={{marginBottom: '10px'}}>Lifetime access to learning content including Class recordings, notes and assignments</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="advantage-card green-theme" style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="advantage-image" style={{height: '200px', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop" alt="Job Assistance" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }} />
                </div>
                <div className="advantage-content" style={{padding: '30px'}}>
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>Guaranteed Job Assistance and Interview Preparation</h4>
                  <ul className="advantage-list" style={{
                    paddingLeft: '20px',
                    color: '#475569',
                    lineHeight: '1.8',
                    textAlign: 'left',
                    maxWidth: '90%',
                    margin: '0 auto'
                  }}>
                    <li style={{marginBottom: '10px'}}>Dedicated placement team to track your application and provide opportunities</li>
                    <li style={{marginBottom: '10px'}}>Access to algoTutor's job portal where you can apply and track your applications</li>
                    <li style={{marginBottom: '10px'}}>Dedicated mentor to guide for company specific interview</li>
                    <li style={{marginBottom: '10px'}}>Regular mock interviews including feedback sharing session until get placed. No cap on total mock interview count</li>
                    <li style={{marginBottom: '10px'}}>1:1 Session with mentor for resume review, interview tips and career guidance</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="advantage-card purple-theme" style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="advantage-image" style={{height: '200px', overflow: 'hidden'}}>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" alt="Practice Platform" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }} />
                </div>
                <div className="advantage-content" style={{padding: '30px'}}>
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>Platform to Practice, Support and Track Progress</h4>
                  <ul className="advantage-list" style={{
                    paddingLeft: '20px',
                    color: '#475569',
                    lineHeight: '1.8',
                    textAlign: 'left',
                    maxWidth: '90%',
                    margin: '0 auto'
                  }}>
                    <li style={{marginBottom: '10px'}}>Practice problems on our own portal, no need to visit third party website to practice</li>
                    <li style={{marginBottom: '10px'}}>Raise help request in case you face any issues while solving the problem</li>
                    <li style={{marginBottom: '10px'}}>Book and track mentorship sessions with your mentor based on available time slot</li>
                    <li style={{marginBottom: '10px'}}>Access to alumni Card, even after placement you can request to access live classes for upcoming interview preparation</li>
                    <li style={{marginBottom: '10px'}}>Pause/Resume course in case of any other priorities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Courses Section */}
      <section className="explore-courses py-5" style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Explore Our Courses</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>Choose from our comprehensive range of professional courses</p>
          </div>
          
          <div className="course-filters mb-5">
            <div className="filter-tabs" style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '30px'
            }}>
              {['All Courses', 'Data Science', 'Software Development', 'Web Development', 'Interview Preparation'].map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => handleFilterClick(filter)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '50px',
                    border: 'none',
                    background: activeFilter === filter 
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' 
                      : 'white',
                    color: activeFilter === filter ? 'white' : '#475569',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="row g-4">
            {filteredCourses.map((course) => (
              <div key={course.id} className="col-lg-6">
                <div className="course-card" style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className={`course-badge ${course.badge === 'Student' ? 'student' : ''}`} style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: course.badge === 'Student' 
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                      : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}>{course.badge}</div>
                  <div className="course-content">
                    <h4 style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '20px',
                      paddingRight: '100px'
                    }}>{course.title}</h4>
                    <div className="learning-outcomes" style={{marginBottom: '25px'}}>
                      <h6 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#475569',
                        marginBottom: '15px'
                      }}>Learning Outcomes:</h6>
                      <ul style={{
                        paddingLeft: '20px',
                        color: '#64748b',
                        lineHeight: '1.8'
                      }}>
                        {course.outcomes.map((outcome, index) => (
                          <li key={index} style={{marginBottom: '8px'}}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="course-actions" style={{
                      display: 'flex',
                      gap: '15px'
                    }}>
                      <Link to="/courses" className="btn btn-outline-primary" style={{
                        padding: '12px 24px',
                        borderRadius: '10px',
                        border: '2px solid #6366f1',
                        color: '#6366f1',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}>Brochure</Link>
                      <Link to="/courses" className="btn btn-primary" style={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '10px',
                        color: 'white',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                      }}>View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Why Choose Devigram?</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>Everything you need to ace technical interviews and advance your career</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="feature-icon" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
                }}>
                  <i className="bi bi-book" style={{
                    fontSize: '2rem',
                    color: 'white'
                  }}></i>
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>75+ Premium Courses</h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.7'
                }}>Structured learning paths covering Arrays, Trees, Graphs, Dynamic Programming, System Design, and more with hands-on coding practice</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="feature-icon" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                }}>
                  <i className="bi bi-building" style={{
                    fontSize: '2rem',
                    color: 'white'
                  }}></i>
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>Campus Programs</h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.7'
                }}>Partnership with 200+ universities offering on-campus workshops, hackathons, and placement preparation programs</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="feature-icon" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)'
                }}>
                  <i className="bi bi-journal-text" style={{
                    fontSize: '2rem',
                    color: 'white'
                  }}></i>
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>Comprehensive Notes</h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.7'
                }}>Detailed study materials, algorithm cheat sheets, complexity analysis guides, and interview preparation notes</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="feature-icon" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)'
                }}>
                  <i className="bi bi-chat-dots" style={{
                    fontSize: '2rem',
                    color: 'white'
                  }}></i>
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>Expert Blogs</h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.7'
                }}>Weekly insights from FAANG engineers, industry trends, interview experiences, and career advancement tips</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="feature-icon" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
                }}>
                  <i className="bi bi-people" style={{
                    fontSize: '2rem',
                    color: 'white'
                  }}></i>
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>Talent Hiring</h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.7'
                }}>Connect with our pool of 5000+ skilled developers. 95% placement rate with average package of ₹15L+</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="feature-icon" style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  boxShadow: '0 10px 25px rgba(6, 182, 212, 0.3)'
                }}>
                  <i className="bi bi-headset" style={{
                    fontSize: '2rem',
                    color: 'white'
                  }}></i>
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '15px'
                }}>1-on-1 Mentorship</h4>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.7'
                }}>Personalized career guidance, mock interviews, resume reviews, and job referrals from industry experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories py-5" style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Success Stories</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>Real students, real results</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="story-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="story-avatar" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 20px',
                  border: '4px solid #f1f5f9'
                }}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Rahul" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                </div>
                <h5 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '5px'
                }}>Rahul Sharma</h5>
                <p className="story-role" style={{
                  color: '#6366f1',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>Software Engineer at Google</p>
                <p className="story-text" style={{
                  color: '#64748b',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>"Devigram's systematic approach helped me crack Google's interview. The mock interviews were exactly like the real thing!"</p>
                <div className="story-package" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontWeight: '700',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  display: 'inline-block'
                }}>Package: ₹45L</div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="story-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="story-avatar" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 20px',
                  border: '4px solid #f1f5f9'
                }}>
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" alt="Priya" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                </div>
                <h5 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '5px'
                }}>Priya Patel</h5>
                <p className="story-role" style={{
                  color: '#6366f1',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>Senior SDE at Amazon</p>
                <p className="story-text" style={{
                  color: '#64748b',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>"From zero coding experience to Amazon in 8 months. The structured learning path made all the difference."</p>
                <div className="story-package" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontWeight: '700',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  display: 'inline-block'
                }}>Package: ₹38L</div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="story-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="story-avatar" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 20px',
                  border: '4px solid #f1f5f9'
                }}>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Arjun" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                </div>
                <h5 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '5px'
                }}>Arjun Kumar</h5>
                <p className="story-role" style={{
                  color: '#6366f1',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>Tech Lead at Microsoft</p>
                <p className="story-text" style={{
                  color: '#64748b',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>"The system design course was phenomenal. Got promoted to Tech Lead within 2 years of joining Microsoft."</p>
                <div className="story-package" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontWeight: '700',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  display: 'inline-block'
                }}>Package: ₹52L</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className="enhanced-statistics py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{color: 'black !important'}}>Our Impact in Numbers</h2>
            <p className="section-subtitle">Transforming careers with proven results</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="stat-icon-wrapper" style={{marginBottom: '20px'}}>
                  <div className="stat-icon blue-gradient" style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
                  }}>
                    <i className="bi bi-people-fill" style={{
                      fontSize: '1.8rem',
                      color: 'white'
                    }}></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number" style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#6366f1',
                    marginBottom: '10px'
                  }}>10,000+</h3>
                  <p className="enhanced-stat-label" style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>Students Trained</p>
                  <div className="stat-description" style={{
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}>Successful learners across the globe</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="stat-icon-wrapper" style={{marginBottom: '20px'}}>
                  <div className="stat-icon green-gradient" style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                  }}>
                    <i className="bi bi-building" style={{
                      fontSize: '1.8rem',
                      color: 'white'
                    }}></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number">20,000+</h3>
                  <p className="enhanced-stat-label">Partner Companies</p>
                  <div className="stat-description">Top tech companies hiring our graduates</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="stat-icon-wrapper" style={{marginBottom: '20px'}}>
                  <div className="stat-icon purple-gradient" style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
                  }}>
                    <i className="bi bi-trophy-fill" style={{
                      fontSize: '1.8rem',
                      color: 'white'
                    }}></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number" style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#8b5cf6',
                    marginBottom: '10px'
                  }}>95%</h3>
                  <p className="enhanced-stat-label" style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>Placement Rate</p>
                  <div className="stat-description" style={{
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}>Industry-leading success rate</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <div className="stat-icon-wrapper" style={{marginBottom: '20px'}}>
                  <div className="stat-icon orange-gradient" style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)'
                  }}>
                    <i className="bi bi-currency-rupee" style={{
                      fontSize: '1.8rem',
                      color: 'white'
                    }}></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number" style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#f59e0b',
                    marginBottom: '10px'
                  }}>₹15L+</h3>
                  <p className="enhanced-stat-label" style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>Average Package</p>
                  <div className="stat-description" style={{
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}>Competitive salary packages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experts Section */}
      <section className="industry-experts py-5" style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Industry Experts as Mentors</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>We have Industry Experts as Mentor who guide you with Career Planning & Interview Preparation</p>
          </div>
          
          <div className="mentors-slider-container" style={{position: 'relative', overflow: 'hidden'}}>
            <style>{`
              @keyframes scroll-mentors {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .mentors-slider-track {
                display: flex;
                animation: scroll-mentors 40s linear infinite;
                gap: 25px;
              }
              .mentors-slider-track:hover {
                animation-play-state: paused;
              }
              .mentor-card {
                min-width: 280px;
                background: white;
                border-radius: 16px;
                padding: 25px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
              .mentor-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              }
              .mentor-image {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin: 0 auto 15px;
                border: 3px solid #f1f5f9;
              }
              .mentor-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              .mentor-info {
                text-align: center;
              }
              .mentor-info h5 {
                font-size: 1.1rem;
                font-weight: 700;
                color: #1e293b;
                margin-bottom: 5px;
              }
              .mentor-role {
                color: #6366f1;
                font-weight: 600;
                font-size: 0.9rem;
                margin-bottom: 5px;
              }
              .mentor-experience {
                color: #64748b;
                font-size: 0.85rem;
                margin-bottom: 15px;
              }
              .mentor-skills {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                justify-content: center;
              }
              .skill-tag {
                background: #f1f5f9;
                color: #475569;
                padding: 4px 12px;
                border-radius: 50px;
                font-size: 0.75rem;
                font-weight: 600;
              }
            `}</style>
            <div className="mentors-slider-track">
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Rajesh Kumar</h5>
                  <p className="mentor-role">Senior SDE at Google</p>
                  <p className="mentor-experience">8+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">System Design</span>
                    <span className="skill-tag">DSA</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Priya Sharma</h5>
                  <p className="mentor-role">Tech Lead at Microsoft</p>
                  <p className="mentor-experience">10+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Full Stack</span>
                    <span className="skill-tag">Leadership</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Amit Patel</h5>
                  <p className="mentor-role">Principal Engineer at Amazon</p>
                  <p className="mentor-experience">12+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Cloud</span>
                    <span className="skill-tag">Architecture</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Sneha Gupta</h5>
                  <p className="mentor-role">Data Scientist at Meta</p>
                  <p className="mentor-experience">7+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">ML/AI</span>
                    <span className="skill-tag">Python</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Vikram Singh</h5>
                  <p className="mentor-role">Staff Engineer at Netflix</p>
                  <p className="mentor-experience">15+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Microservices</span>
                    <span className="skill-tag">Scalability</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Anita Desai</h5>
                  <p className="mentor-role">Engineering Manager at Uber</p>
                  <p className="mentor-experience">11+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Team Lead</span>
                    <span className="skill-tag">Strategy</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Rohit Agarwal</h5>
                  <p className="mentor-role">Senior Architect at Salesforce</p>
                  <p className="mentor-experience">13+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Enterprise</span>
                    <span className="skill-tag">CRM</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Kavya Reddy</h5>
                  <p className="mentor-role">Principal SDE at Adobe</p>
                  <p className="mentor-experience">9+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Frontend</span>
                    <span className="skill-tag">UX</span>
                  </div>
                </div>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Rajesh Kumar</h5>
                  <p className="mentor-role">Senior SDE at Google</p>
                  <p className="mentor-experience">8+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">System Design</span>
                    <span className="skill-tag">DSA</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Priya Sharma</h5>
                  <p className="mentor-role">Tech Lead at Microsoft</p>
                  <p className="mentor-experience">10+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Full Stack</span>
                    <span className="skill-tag">Leadership</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Amit Patel</h5>
                  <p className="mentor-role">Principal Engineer at Amazon</p>
                  <p className="mentor-experience">12+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Cloud</span>
                    <span className="skill-tag">Architecture</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Sneha Gupta</h5>
                  <p className="mentor-role">Data Scientist at Meta</p>
                  <p className="mentor-experience">7+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">ML/AI</span>
                    <span className="skill-tag">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/counselling" className="btn btn-primary btn-lg" style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: '700',
              borderRadius: '50px',
              boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.3s ease'
            }}>Meet Your Mentor</Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Devigram : Where Code Meets Career</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>Transform your career with industry-leading training and guaranteed results</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="advantage-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="advantage-icon" style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '25px',
                  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)',
                  flexShrink: 0
                }}>
                  <i className="bi bi-rocket-takeoff" style={{
                    fontSize: '1.8rem',
                    color: 'white'
                  }}></i>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>Fast-Track Your Career</h4>
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    margin: 0
                  }}>Land your dream job 3x faster with our proven methodology. 95% of our students get placed within 6 months.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="advantage-icon" style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '25px',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                  flexShrink: 0
                }}>
                  <i className="bi bi-currency-rupee" style={{
                    fontSize: '1.8rem',
                    color: 'white'
                  }}></i>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>Guaranteed Salary Boost</h4>
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    margin: 0
                  }}>Average 150% salary increase post-completion. Our alumni earn ₹15L+ at top companies like Google, Amazon, Microsoft.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="advantage-icon" style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '25px',
                  boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
                  flexShrink: 0
                }}>
                  <i className="bi bi-people-fill" style={{
                    fontSize: '1.8rem',
                    color: 'white'
                  }}></i>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>Elite Community Access</h4>
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    margin: 0
                  }}>Join 10,000+ successful developers. Network with industry leaders and get exclusive job referrals.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="advantage-icon" style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '25px',
                  boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)',
                  flexShrink: 0
                }}>
                  <i className="bi bi-award-fill" style={{
                    fontSize: '1.8rem',
                    color: 'white'
                  }}></i>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '10px'
                  }}>Industry-Recognized Certification</h4>
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    margin: 0
                  }}>Get certificates valued by 500+ partner companies. Direct placement assistance with guaranteed interviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="alumni py-5" style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Our Alumni Are Changing the World</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>From students to tech leaders at global companies</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Alumni" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  border: '4px solid #f1f5f9'
                }} />
                <h5 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '5px'
                }}>Arjun Mehta</h5>
                <p className="company" style={{
                  color: '#6366f1',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>Senior SDE at Google</p>
                <p className="package" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontWeight: '700',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  display: 'inline-block',
                  marginBottom: '15px'
                }}>₹45L Package</p>
                <div className="rating" style={{color: '#f59e0b'}}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Alumni" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  border: '4px solid #f1f5f9'
                }} />
                <h5 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '5px'
                }}>Priya Sharma</h5>
                <p className="company" style={{
                  color: '#6366f1',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>Tech Lead at Amazon</p>
                <p className="package" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontWeight: '700',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  display: 'inline-block',
                  marginBottom: '15px'
                }}>₹52L Package</p>
                <div className="rating" style={{color: '#f59e0b'}}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Alumni" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  border: '4px solid #f1f5f9'
                }} />
                <h5 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '5px'
                }}>Rohit Kumar</h5>
                <p className="company" style={{
                  color: '#6366f1',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>Principal Engineer at Microsoft</p>
                <p className="package" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontWeight: '700',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  display: 'inline-block',
                  marginBottom: '15px'
                }}>₹65L Package</p>
                <div className="rating" style={{color: '#f59e0b'}}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%'
              }}>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Alumni" style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '20px',
                  border: '4px solid #f1f5f9'
                }} />
                <h5 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '5px'
                }}>Sneha Patel</h5>
                <p className="company" style={{
                  color: '#6366f1',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>Staff Engineer at Netflix</p>
                <p className="package" style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: 'white',
                  fontWeight: '700',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  display: 'inline-block',
                  marginBottom: '15px'
                }}>₹70L Package</p>
                <div className="rating" style={{color: '#f59e0b'}}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Slider - Changed Heading */}
      <section className="reviews py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Success Stories From Our Learners</h2>
            <div className="google-rating" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '10px'
            }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="30" />
              <span className="rating-score" style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b'
              }}>4.9</span>
              <div className="stars" style={{color: '#f59e0b'}}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <span className="review-count" style={{
                color: '#64748b',
                fontWeight: '600'
              }}>(2,847 reviews)</span>
            </div>
          </div>
          
          <div className="reviews-slider-container" style={{position: 'relative', overflow: 'hidden'}}>
            <style>{`
              @keyframes scroll-reviews {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .reviews-slider-track {
                display: flex;
                animation: scroll-reviews 45s linear infinite;
                gap: 25px;
              }
              .reviews-slider-track:hover {
                animation-play-state: paused;
              }
              .review-card {
                min-width: 350px;
                background: white;
                border-radius: 16px;
                padding: 30px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
              .review-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              }
              .review-stars {
                color: #f59e0b;
                margin-bottom: 15px;
              }
              .review-card p {
                color: #475569;
                line-height: 1.6;
                margin-bottom: 20px;
                font-style: italic;
              }
              .reviewer strong {
                color: #1e293b;
                display: block;
                margin-bottom: 5px;
              }
              .reviewer span {
                color: #6366f1;
                font-size: 0.9rem;
              }
            `}</style>
            <div className="reviews-slider-track">
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Devigram transformed my career completely.<br/>The structured approach helped me land<br/>my dream job at Google. Best investment!"</p>
                <div className="reviewer">
                  <strong>Amit Sharma</strong>
                  <span>Software Engineer, Google</span>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"The mock interviews were game-changers.<br/>Went from failing interviews to getting<br/>multiple offers. Highly recommend!"</p>
                <div className="reviewer">
                  <strong>Neha Gupta</strong>
                  <span>Senior Developer, Amazon</span>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Exceptional quality content and<br/>world-class mentors. The system design<br/>course alone is worth the entire program!"</p>
                <div className="reviewer">
                  <strong>Karan Singh</strong>
                  <span>Tech Lead, Microsoft</span>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Amazing platform! The DSA course<br/>helped me crack interviews at 3 top<br/>companies. Mentors are incredible!"</p>
                <div className="reviewer">
                  <strong>Ravi Patel</strong>
                  <span>SDE-2, Meta</span>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"From non-CS background to Netflix<br/>in 10 months! Career guidance and<br/>interview prep were outstanding."</p>
                <div className="reviewer">
                  <strong>Priya Jain</strong>
                  <span>Software Engineer, Netflix</span>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"The full-stack course is comprehensive.<br/>Got placed at Uber with 180% salary hike.<br/>Investment paid off incredibly well!"</p>
                <div className="reviewer">
                  <strong>Vikash Kumar</strong>
                  <span>Full Stack Developer, Uber</span>
                </div>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Devigram transformed my career completely.<br/>The structured approach helped me land<br/>my dream job at Google. Best investment!"</p>
                <div className="reviewer">
                  <strong>Amit Sharma</strong>
                  <span>Software Engineer, Google</span>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"The mock interviews were game-changers.<br/>Went from failing interviews to getting<br/>multiple offers. Highly recommend!"</p>
                <div className="reviewer">
                  <strong>Neha Gupta</strong>
                  <span>Senior Developer, Amazon</span>
                </div>
              </div>
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Exceptional quality content and<br/>world-class mentors. The system design<br/>course alone is worth the entire program!"</p>
                <div className="reviewer">
                  <strong>Karan Singh</strong>
                  <span>Tech Lead, Microsoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


            
      {/* Global Companies Section 
      <section className="global-companies py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px',
              letterSpacing: '-0.02em'
            }}>Launch Your Career at Top Tech Companies</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>Join our elite program and become part of the world's leading technology innovators</p>
          </div>
          
          <div className="companies-showcase" style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
            background: 'white'
          }}>
            <div className="showcase-background" style={{position: 'relative'}}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" alt="Modern Office" className="bg-image" style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }} />
              <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(51, 65, 85, 0.85) 100%)'
              }}></div>
            </div>
            
            <div className="companies-content" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}>
              <div className="companies-intro" style={{
                textAlign: 'center',
                marginBottom: '40px',
                maxWidth: '700px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '15px'
                }}>Our Graduates Work At</h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.6'
                }}>Devigram alumni are making an impact at the world's most innovative companies</p>
              </div>
              
              <div className="companies-grid" style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '30px',
                maxWidth: '900px'
              }}>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="X (Twitter)" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
                <div className="company-card" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '12px',
                  padding: '15px 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '80px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="Database" style={{maxHeight: '40px', maxWidth: '100%', filter: 'brightness(0) invert(1)'}} />
                </div>
              </div>
              
              <div className="cta-button" style={{marginTop: '40px'}}>
                <Link to="/apply" className="btn" style={{
                  background: 'white',
                  color: '#1e293b',
                  padding: '15px 35px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
                }}>Start Your Journey</Link>
              </div>
            </div>
          </div>
          
          <div className="stats-row" style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            gap: '40px'
          }}>
            <div className="stat-item" style={{textAlign: 'center'}}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#6366f1',
                marginBottom: '5px'
              }}>500+</div>
              <div style={{
                fontSize: '1rem',
                color: '#64748b',
                fontWeight: '600'
              }}>Partner Companies</div>
            </div>
            <div className="stat-item" style={{textAlign: 'center'}}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#8b5cf6',
                marginBottom: '5px'
              }}>10,000+</div>
              <div style={{
                fontSize: '1rem',
                color: '#64748b',
                fontWeight: '600'
              }}>Successful Placements</div>
            </div>
            <div className="stat-item" style={{textAlign: 'center'}}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#d946ef',
                marginBottom: '5px'
              }}>95%</div>
              <div style={{
                fontSize: '1rem',
                color: '#64748b',
                fontWeight: '600'
              }}>Placement Rate</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Still Not Sure */}
      <section className="not-sure py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title" style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#1e293b',
                marginBottom: '15px'
              }}>Still Not Sure If Devigram Is Right for You?</h2>
              <p className="section-subtitle" style={{
                fontSize: '1.2rem',
                color: '#64748b',
                marginBottom: '40px'
              }}>You're working hard to take your career to the next level, and you've made it far! Get a glimpse of what it's like to learn at Devigram</p>
              
              <div className="preview-options">
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="preview-card" style={{
                      background: 'white',
                      borderRadius: '20px',
                      padding: '30px',
                      textAlign: 'center',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      height: '100%'
                    }}>
                      <i className="bi bi-play-circle-fill" style={{
                        fontSize: '3rem',
                        color: '#6366f1',
                        marginBottom: '20px'
                      }}></i>
                      <h5 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '15px'
                      }}>Free Demo Class</h5>
                      <p style={{
                        color: '#64748b',
                        marginBottom: '25px'
                      }}>Experience our teaching methodology</p>
                      <Link to="/apply" className="btn btn-outline-primary" style={{
                        padding: '12px 24px',
                        borderRadius: '50px',
                        border: '2px solid #6366f1',
                        color: '#6366f1',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}>Book Demo</Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="preview-card" style={{
                      background: 'white',
                      borderRadius: '20px',
                      padding: '30px',
                      textAlign: 'center',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      height: '100%'
                    }}>
                      <i className="bi bi-chat-dots-fill" style={{
                        fontSize: '3rem',
                        color: '#10b981',
                        marginBottom: '20px'
                      }}></i>
                      <h5 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '15px'
                      }}>Talk to Alumni</h5>
                      <p style={{
                        color: '#64748b',
                        marginBottom: '25px'
                      }}>Hear success stories firsthand</p>
                      <Link to="/counselling" className="btn btn-outline-primary" style={{
                        padding: '12px 24px',
                        borderRadius: '50px',
                        border: '2px solid #10b981',
                        color: '#10b981',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}>Connect Now</Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="preview-card" style={{
                      background: 'white',
                      borderRadius: '20px',
                      padding: '30px',
                      textAlign: 'center',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      height: '100%'
                    }}>
                      <i className="bi bi-calendar-check-fill" style={{
                        fontSize: '3rem',
                        color: '#8b5cf6',
                        marginBottom: '20px'
                      }}></i>
                      <h5 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '15px'
                      }}>Free Consultation</h5>
                      <p style={{
                        color: '#64748b',
                        marginBottom: '25px'
                      }}>Get personalized career guidance</p>
                      <Link to="/counselling" className="btn btn-outline-primary" style={{
                        padding: '12px 24px',
                        borderRadius: '50px',
                        border: '2px solid #8b5cf6',
                        color: '#8b5cf6',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}>Schedule Call</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="cta-title" style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '20px'
              }}>Ready to Transform Your Career?</h2>
              <p className="cta-subtitle" style={{
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px'
              }}>Join 10,000+ developers who've landed their dream jobs with Devigram. Start your journey today!</p>
              <div className="cta-features mb-4">
                <div className="row">
                  <div className="col-md-4" style={{marginBottom: '15px'}}>
                    <i className="bi bi-check-circle-fill me-2" style={{color: '#10b981'}}></i>
                    <span style={{color: 'white', fontWeight: '600'}}>Free Trial Available</span>
                  </div>
                  <div className="col-md-4" style={{marginBottom: '15px'}}>
                    <i className="bi bi-check-circle-fill me-2" style={{color: '#10b981'}}></i>
                    <span style={{color: 'white', fontWeight: '600'}}>Money Back Guarantee</span>
                  </div>
                  <div className="col-md-4" style={{marginBottom: '15px'}}>
                    <i className="bi bi-check-circle-fill me-2" style={{color: '#10b981'}}></i>
                    <span style={{color: 'white', fontWeight: '600'}}>Lifetime Access</span>
                  </div>
                </div>
              </div>
              <div className="cta-actions">
                <Link to="/apply" className="btn btn-light btn-lg me-3" style={{
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}>Start Free Trial</Link>
                <Link to="/counselling" className="btn btn-outline-light btn-lg" style={{
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}>Book Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#1e293b',
              marginBottom: '15px'
            }}>Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>Get answers to common questions about our courses and services</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      How do I enroll in the course?
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      You can enroll by clicking on any course and following the enrollment process. We offer flexible payment options and immediate access to course materials upon successful enrollment.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      How can I access recordings of my previous lectures?
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      All lecture recordings are available in your student dashboard under the "My Courses" section. You can access them anytime during your course duration and even after completion.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      Can I choose my mentor?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      Yes! We provide mentor profiles and you can select your preferred mentor based on their expertise, experience, and availability. Our mentors are industry experts from top tech companies.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      Who will be the instructor for the course?
                    </button>
                  </h2>
                  <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      Our courses are taught by industry veterans from companies like Google, Amazon, Microsoft, and Meta. Each instructor has 8+ years of experience and expertise in their respective domains.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      What kind of placement assistance will be provided post completion of the course?
                    </button>
                  </h2>
                  <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      We provide comprehensive placement support including resume building, mock interviews, company referrals, and direct placement opportunities with our 500+ hiring partners. 95% of our students get placed within 6 months.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq6">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      For how long can I access the recordings?
                    </button>
                  </h2>
                  <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      You get lifetime access to all course recordings and materials. Even after course completion, you can revisit any topic, download resources, and stay updated with course updates.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq7">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      What are the benefits of Alumni card?
                    </button>
                  </h2>
                  <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      Alumni card provides exclusive benefits including access to advanced workshops, networking events, job referrals, discounts on future courses, and lifetime career support from our placement team.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item" style={{
                  background: 'white',
                  borderRadius: '12px',
                  marginBottom: '15px',
                  border: 'none',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}>
                  <h2 className="accordion-header" id="faq8">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" style={{
                      background: 'transparent',
                      color: '#1e293b',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      padding: '20px 25px'
                    }}>
                      What mode of payment are available for paying the course fees?
                    </button>
                  </h2>
                  <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body" style={{
                      padding: '0 25px 20px',
                      color: '#64748b',
                      lineHeight: '1.7'
                    }}>
                      We accept all major payment methods including credit/debit cards, UPI, net banking, EMI options, and international payments. We also offer flexible installment plans to make learning affordable.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-5" style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="newsletter-title" style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '15px'
              }}>Stay Updated</h3>
              <p className="newsletter-subtitle" style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '30px'
              }}>Get weekly algorithm challenges, interview tips, and career insights</p>
              <form className="newsletter-form" style={{maxWidth: '500px', margin: '0 auto'}}>
                <div className="input-group" style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50px',
                  padding: '5px',
                  display: 'flex',
                  backdropFilter: 'blur(10px)'
                }}>
                  <input type="email" className="form-control" placeholder="Enter your email" style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    padding: '12px 20px',
                    fontSize: '1rem',
                    flex: '1'
                  }} />
                  <button className="btn" type="submit" style={{
                    background: 'white',
                    color: '#6366f1',
                    border: 'none',
                    padding: '12px 25px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    borderRadius: '50px'
                  }}>Subscribe</button>
                </div>
              </form>
              <p className="newsletter-note" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginTop: '15px',
                fontSize: '0.9rem'
              }}>Join 25,000+ developers. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
