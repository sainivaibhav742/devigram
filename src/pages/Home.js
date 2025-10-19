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
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Master Algorithms & Land Your Dream Job</h1>
                <p className="hero-subtitle">Join 10,000+ developers who've cracked top tech interviews with our comprehensive algorithm training program.</p>
                
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Companies</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">₹15L+</span>
                    <span className="stat-label">Avg Package</span>
                  </div>
                </div>
                
                <div className="hero-actions">
                  <Link to="/apply" className="btn btn-primary btn-lg">Start Learning</Link>
                  <Link to="/courses" className="btn btn-outline-light btn-lg">View Courses</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="code-editor">
                  <div className="editor-header">
                    <div className="editor-controls">
                      <span className="control red"></span>
                      <span className="control yellow"></span>
                      <span className="control green"></span>
                    </div>
                    <span className="editor-title">solution.py</span>
                  </div>
                  <div className="editor-content">
                    <div className="code-line">
                      <span className="line-num">1</span>
                      <span className="code">def <span className="func">twoSum</span>(nums, target):</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">2</span>
                      <span className="code">    <span className="var">hashmap</span> = {`{}`}</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">3</span>
                      <span className="code">    for i, num in enumerate(nums):</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">4</span>
                      <span className="code">        if target - num in hashmap:</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">5</span>
                      <span className="code">            return [hashmap[target - num], i]</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">6</span>
                      <span className="code">        hashmap[num] = i</span>
                    </div>
                  </div>
                </div>
                
                <div className="floating-elements">
                  <div className="float-card card-1">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Problem Solved!</span>
                  </div>
                  <div className="float-card card-2">
                    <i className="bi bi-lightning-fill"></i>
                    <span>O(n) Solution</span>
                  </div>
                  <div className="float-card card-3">
                    <i className="bi bi-trophy-fill"></i>
                    <span>Interview Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-banner-card">
            <div className="row text-center">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value">147%</div>
                  <div className="stat-desc">Avg. CTC Hike</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value">10000+</div>
                  <div className="stat-desc">Careers Transformed</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value">5000+</div>
                  <div className="stat-desc">Learners Community</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="banner-stat">
                  <div className="stat-value">100+</div>
                  <div className="stat-desc">Experienced Mentors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Advantage of Joining Devigram</h2>
            <p className="section-subtitle">Transform your career with our comprehensive learning ecosystem</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="advantage-card blue-theme">
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" alt="Tech Professionals" />
                </div>
                <div className="advantage-content">
                  <h4>Upskill with Top Tech Industry Professionals</h4>
                  <ul className="advantage-list">
                    <li>Gain knowledge from professionals working at Microsoft, Goldman Sachs etc</li>
                    <li>Doubt clearing session with dedicated teaching assistant</li>
                    <li>1:1 Mentorship with professionals from top tech company. Option to choose your Mentor based on your target company or experience</li>
                    <li>Live interactive classes with small batch size and open discussion with instructor</li>
                    <li>Lifetime access to learning content including Class recordings, notes and assignments</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="advantage-card green-theme">
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop" alt="Job Assistance" />
                </div>
                <div className="advantage-content">
                  <h4>Guaranteed Job Assistance and Interview Preparation</h4>
                  <ul className="advantage-list">
                    <li>Dedicated placement team to track your application and provide opportunities</li>
                    <li>Access to algoTutor's job portal where you can apply and track your applications</li>
                    <li>Dedicated mentor to guide for company specific interview</li>
                    <li>Regular mock interviews including feedback sharing session until get placed. No cap on total mock interview count</li>
                    <li>1:1 Session with mentor for resume review, interview tips and career guidance</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="advantage-card purple-theme">
                <div className="advantage-image">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" alt="Practice Platform" />
                </div>
                <div className="advantage-content">
                  <h4>Platform to Practice, Support and Track Progress</h4>
                  <ul className="advantage-list">
                    <li>Practice problems on our own portal, no need to visit third party website to practice</li>
                    <li>Raise help request in case you face any issues while solving the problem</li>
                    <li>Book and track mentorship sessions with your mentor based on available time slot</li>
                    <li>Access to alumni Card, even after placement you can request to access live classes for upcoming interview preparation</li>
                    <li>Pause/Resume course in case of any other priorities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Courses Section */}
      <section className="explore-courses py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Explore Our Courses</h2>
            <p className="section-subtitle">Choose from our comprehensive range of professional courses</p>
          </div>
          
          <div className="course-filters mb-5">
            <div className="filter-tabs">
              <button 
                className={`filter-btn ${activeFilter === 'All Courses' ? 'active' : ''}`}
                onClick={() => handleFilterClick('All Courses')}
              >
                All Courses
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'Data Science' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Data Science')}
              >
                Data Science
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'Software Development' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Software Development')}
              >
                Software Development
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'Web Development' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Web Development')}
              >
                Web Development
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'Interview Preparation' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Interview Preparation')}
              >
                Interview Preparation
              </button>
            </div>
          </div>
          
          <div className="row g-4">
            {filteredCourses.map((course) => (
              <div key={course.id} className="col-lg-6">
                <div className="course-card">
                  <div className={`course-badge ${course.badge === 'Student' ? 'student' : ''}`}>{course.badge}</div>
                  <div className="course-content">
                    <h4>{course.title}</h4>
                    <div className="learning-outcomes">
                      <h6>Learning Outcomes:</h6>
                      <ul>
                        {course.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="course-actions">
                      <Link to="/courses" className="btn btn-outline-primary">Brochure</Link>
                      <Link to="/courses" className="btn btn-primary">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Devigram?</h2>
            <p className="section-subtitle">Everything you need to ace technical interviews and advance your career</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-book"></i>
                </div>
                <h4>75+ Premium Courses</h4>
                <p>Structured learning paths covering Arrays, Trees, Graphs, Dynamic Programming, System Design, and more with hands-on coding practice</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h4>Campus Programs</h4>
                <p>Partnership with 200+ universities offering on-campus workshops, hackathons, and placement preparation programs</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-journal-text"></i>
                </div>
                <h4>Comprehensive Notes</h4>
                <p>Detailed study materials, algorithm cheat sheets, complexity analysis guides, and interview preparation notes</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <h4>Expert Blogs</h4>
                <p>Weekly insights from FAANG engineers, industry trends, interview experiences, and career advancement tips</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-people"></i>
                </div>
                <h4>Talent Hiring</h4>
                <p>Connect with our pool of 5000+ skilled developers. 95% placement rate with average package of ₹15L+</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <h4>1-on-1 Mentorship</h4>
                <p>Personalized career guidance, mock interviews, resume reviews, and job referrals from industry experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real students, real results</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="story-card">
                <div className="story-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Rahul" />
                </div>
                <h5>Rahul Sharma</h5>
                <p className="story-role">Software Engineer at Google</p>
                <p className="story-text">"Devigram's systematic approach helped me crack Google's interview. The mock interviews were exactly like the real thing!"</p>
                <div className="story-package">Package: ₹45L</div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="story-card">
                <div className="story-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" alt="Priya" />
                </div>
                <h5>Priya Patel</h5>
                <p className="story-role">Senior SDE at Amazon</p>
                <p className="story-text">"From zero coding experience to Amazon in 8 months. The structured learning path made all the difference."</p>
                <div className="story-package">Package: ₹38L</div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="story-card">
                <div className="story-avatar">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Arjun" />
                </div>
                <h5>Arjun Kumar</h5>
                <p className="story-role">Tech Lead at Microsoft</p>
                <p className="story-text">"The system design course was phenomenal. Got promoted to Tech Lead within 2 years of joining Microsoft."</p>
                <div className="story-package">Package: ₹52L</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className="enhanced-statistics py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="section-subtitle">Transforming careers with proven results</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon blue-gradient">
                    <i className="bi bi-people-fill"></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number">10,000+</h3>
                  <p className="enhanced-stat-label">Students Trained</p>
                  <div className="stat-description">Successful learners across the globe</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon green-gradient">
                    <i className="bi bi-building"></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number">500+</h3>
                  <p className="enhanced-stat-label">Partner Companies</p>
                  <div className="stat-description">Top tech companies hiring our graduates</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon purple-gradient">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number">95%</h3>
                  <p className="enhanced-stat-label">Placement Rate</p>
                  <div className="stat-description">Industry-leading success rate</div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="enhanced-stat-card">
                <div className="stat-icon-wrapper">
                  <div className="stat-icon orange-gradient">
                    <i className="bi bi-currency-rupee"></i>
                  </div>
                </div>
                <div className="stat-content">
                  <h3 className="enhanced-stat-number">₹15L+</h3>
                  <p className="enhanced-stat-label">Average Package</p>
                  <div className="stat-description">Competitive salary packages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experts Section */}
      <section className="industry-experts py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Industry Experts as Mentors</h2>
            <p className="section-subtitle">We have Industry Experts as Mentor who guide you with Career Planning & Interview Preparation</p>
          </div>
          
          <div className="mentors-slider-container">
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
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Arjun Mehta</h5>
                  <p className="mentor-role">VP Engineering at Stripe</p>
                  <p className="mentor-experience">16+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Fintech</span>
                    <span className="skill-tag">Payments</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Deepak Joshi</h5>
                  <p className="mentor-role">Senior ML Engineer at OpenAI</p>
                  <p className="mentor-experience">10+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">AI/ML</span>
                    <span className="skill-tag">NLP</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Meera Nair</h5>
                  <p className="mentor-role">Director of Engineering at Airbnb</p>
                  <p className="mentor-experience">14+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Platform</span>
                    <span className="skill-tag">Growth</span>
                  </div>
                </div>
              </div>
              
              <div className="mentor-card">
                <div className="mentor-image">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="Mentor" />
                </div>
                <div className="mentor-info">
                  <h5>Sanjay Kumar</h5>
                  <p className="mentor-role">CTO at Razorpay</p>
                  <p className="mentor-experience">18+ Years Experience</p>
                  <div className="mentor-skills">
                    <span className="skill-tag">Leadership</span>
                    <span className="skill-tag">Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/counselling" className="btn btn-primary btn-lg">Meet Your Mentor</Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Join Devigram? Your Gateway to Tech Excellence</h2>
            <p className="section-subtitle">Transform your career with industry-leading training and guaranteed results</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h4>Fast-Track Your Career</h4>
                <p>Land your dream job 3x faster with our proven methodology. 95% of our students get placed within 6 months.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-currency-rupee"></i>
                </div>
                <h4>Guaranteed Salary Boost</h4>
                <p>Average 150% salary increase post-completion. Our alumni earn ₹15L+ at top companies like Google, Amazon, Microsoft.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4>Elite Community Access</h4>
                <p>Join 10,000+ successful developers. Network with industry leaders and get exclusive job referrals.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <h4>Industry-Recognized Certification</h4>
                <p>Get certificates valued by 500+ partner companies. Direct placement assistance with guaranteed interviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="alumni py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Alumni Are Changing the World</h2>
            <p className="section-subtitle">From students to tech leaders at global companies</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Arjun Mehta</h5>
                <p className="company">Senior SDE at Google</p>
                <p className="package">₹45L Package</p>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Priya Sharma</h5>
                <p className="company">Tech Lead at Amazon</p>
                <p className="package">₹52L Package</p>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Rohit Kumar</h5>
                <p className="company">Principal Engineer at Microsoft</p>
                <p className="package">₹65L Package</p>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Sneha Patel</h5>
                <p className="company">Staff Engineer at Netflix</p>
                <p className="package">₹70L Package</p>
                <div className="rating">
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

      {/* Student Reviews Slider */}
      <section className="reviews py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Students Say</h2>
            <div className="google-rating">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="30" />
              <span className="rating-score">4.9</span>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <span className="review-count">(2,847 reviews)</span>
            </div>
          </div>
          
          <div className="reviews-slider-container">
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
              
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Best decision of my career! System design<br/>concepts helped me become senior engineer<br/>at Salesforce within 2 years."</p>
                <div className="reviewer">
                  <strong>Anjali Sharma</strong>
                  <span>Senior Engineer, Salesforce</span>
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
                <p>"Outstanding mentorship and placement support.<br/>Got offers from 4 companies and chose<br/>Flipkart. Couldn't be happier!"</p>
                <div className="reviewer">
                  <strong>Rahul Agarwal</strong>
                  <span>Product Engineer, Flipkart</span>
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
                <p>"The live projects and real-world scenarios<br/>prepared me perfectly for industry challenges.<br/>Now working at Zomato as tech lead!"</p>
                <div className="reviewer">
                  <strong>Deepika Rao</strong>
                  <span>Tech Lead, Zomato</span>
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
                <p>"Incredible learning experience! The doubt<br/>resolution sessions were super helpful.<br/>Landed my dream job at Paytm!"</p>
                <div className="reviewer">
                  <strong>Saurabh Joshi</strong>
                  <span>Software Developer, Paytm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Companies Section */}
      <section className="global-companies py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Learn and get trained to be a part of top technology companies and leading startups</h2>
            <p className="section-subtitle">Join thousands of professionals working at world's leading companies</p>
          </div>
          
          <div className="companies-showcase">
            <div className="showcase-background">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop" alt="Modern Office" className="bg-image" />
              <div className="overlay"></div>
            </div>
            
            <div className="companies-grid">
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Adobe_logo.svg" alt="Adobe" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Tesla_logo.png" alt="Tesla" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Uber_logo_2018.svg" alt="Uber" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Spotify_logo_without_text.svg" alt="Spotify" />
              </div>
              <div className="company-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Flipkart_logo.svg" alt="Flipkart" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Not Sure */}
      <section className="not-sure py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Still Not Sure If Devigram Is Right for You?</h2>
              <p className="section-subtitle">You're working hard to take your career to the next level, and you've made it far! Get a glimpse of what it's like to learn at Devigram</p>
              
              <div className="preview-options">
                <div className="row g-4 mt-4">
                  <div className="col-md-4">
                    <div className="preview-card">
                      <i className="bi bi-play-circle-fill"></i>
                      <h5>Free Demo Class</h5>
                      <p>Experience our teaching methodology</p>
                      <Link to="/apply" className="btn btn-outline-primary">Book Demo</Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="preview-card">
                      <i className="bi bi-chat-dots-fill"></i>
                      <h5>Talk to Alumni</h5>
                      <p>Hear success stories firsthand</p>
                      <Link to="/counselling" className="btn btn-outline-primary">Connect Now</Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="preview-card">
                      <i className="bi bi-calendar-check-fill"></i>
                      <h5>Free Consultation</h5>
                      <p>Get personalized career guidance</p>
                      <Link to="/counselling" className="btn btn-outline-primary">Schedule Call</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="cta-title">Ready to Transform Your Career?</h2>
              <p className="cta-subtitle">Join 10,000+ developers who've landed their dream jobs with Devigram. Start your journey today!</p>
              <div className="cta-features mb-4">
                <div className="row">
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Free Trial Available</span>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Money Back Guarantee</span>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Lifetime Access</span>
                  </div>
                </div>
              </div>
              <div className="cta-actions">
                <Link to="/apply" className="btn btn-primary btn-lg me-3">Start Free Trial</Link>
                <Link to="/counselling" className="btn btn-outline-light btn-lg">Book Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Get answers to common questions about our courses and services</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                      How do I enroll in the course?
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can enroll by clicking on any course and following the enrollment process. We offer flexible payment options and immediate access to course materials upon successful enrollment.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                      How can I access recordings of my previous lectures?
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      All lecture recordings are available in your student dashboard under the "My Courses" section. You can access them anytime during your course duration and even after completion.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                      Can I choose my mentor?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! We provide mentor profiles and you can select your preferred mentor based on their expertise, experience, and availability. Our mentors are industry experts from top tech companies.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                      Who will be the instructor for the course?
                    </button>
                  </h2>
                  <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Our courses are taught by industry veterans from companies like Google, Amazon, Microsoft, and Meta. Each instructor has 8+ years of experience and expertise in their respective domains.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
                      What kind of placement assistance will be provided post completion of the course?
                    </button>
                  </h2>
                  <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We provide comprehensive placement support including resume building, mock interviews, company referrals, and direct placement opportunities with our 500+ hiring partners. 95% of our students get placed within 6 months.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq6">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
                      For how long can I access the recordings?
                    </button>
                  </h2>
                  <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You get lifetime access to all course recordings and materials. Even after course completion, you can revisit any topic, download resources, and stay updated with course updates.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq7">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7">
                      What are the benefits of Alumni card?
                    </button>
                  </h2>
                  <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Alumni card provides exclusive benefits including access to advanced workshops, networking events, job referrals, discounts on future courses, and lifetime career support from our placement team.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq8">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8">
                      What mode of payment are available for paying the course fees?
                    </button>
                  </h2>
                  <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
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
      <section className="newsletter py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-subtitle">Get weekly algorithm challenges, interview tips, and career insights</p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
              <p className="newsletter-note">Join 25,000+ developers. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;