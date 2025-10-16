import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/college-modal.css';

const Counselling = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Career Guidance & Mentoring',
      description: 'Connect with experienced professionals who understand your journey and can guide you toward your goals',
      features: ['Personalized career roadmap creation', 'Industry insights and trends', 'Skill gap analysis and recommendations', 'Long-term career planning strategies'],
      icon: 'bi-person-video3',
      color: 'primary',
      sessions: '500+',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Resume & Profile Optimization',
      description: 'Learn how to present your experience effectively and stand out to potential employers',
      features: ['Resume structure and formatting tips', 'LinkedIn profile enhancement guide', 'ATS-friendly resume techniques', 'Portfolio and project showcase advice'],
      icon: 'bi-file-person',
      color: 'success',
      sessions: '800+',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Interview Preparation',
      description: 'Build confidence and improve your interview skills through practice and constructive feedback',
      features: ['Technical interview practice', 'Behavioral question preparation', 'System design discussion', 'Communication skills development'],
      icon: 'bi-mic-fill',
      color: 'warning',
      sessions: '300+',
      rating: 4.9
    },
    {
      id: 4,
      title: 'Skill Development Planning',
      description: 'Identify the right skills to learn and create a structured learning path for your career growth',
      features: ['Technology stack recommendations', 'Learning resource suggestions', 'Project ideas for skill building', 'Industry certification guidance'],
      icon: 'bi-graph-up-arrow',
      color: 'info',
      sessions: '200+',
      rating: 4.7
    }
  ];
  const colleges = [
    {
      id: 1,
      name: 'IIT Delhi',
      location: 'New Delhi, India',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop',
      ranking: '#1 NIRF Engineering',
      established: '1961',
      category: 'Premier IIT',
      fees: {
        btech: '₹2.5L per year',
        mtech: '₹2.8L per year',
        phd: '₹1.2L per year'
      },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electrical', 'Mechanical', 'Civil'],
      admissionProcess: {
        exam: 'JEE Advanced',
        cutoff: 'Top 250 ranks',
        seats: '1,138 total seats',
        process: 'JEE Advanced → JoSAA Counselling → Document Verification'
      },
      facilities: ['World-class labs', 'Research centers', 'Industry partnerships', 'Placement cell'],
      placement: {
        average: '₹18.5L',
        highest: '₹2.1Cr',
        companies: 'Google, Microsoft, Amazon, Goldman Sachs',
        percentage: '95%'
      },
      highlights: ['Top Research Output', 'International Collaborations', 'Alumni Network']
    },
    {
      id: 2,
      name: 'IIT Bombay',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=300&fit=crop',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop',
      ranking: '#2 NIRF Engineering',
      established: '1958',
      category: 'Premier IIT',
      fees: {
        btech: '₹2.3L per year',
        mtech: '₹2.6L per year',
        phd: '₹1.1L per year'
      },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electronics', 'Chemical', 'Aerospace'],
      admissionProcess: {
        exam: 'JEE Advanced',
        cutoff: 'Top 200 ranks',
        seats: '1,234 total seats',
        process: 'JEE Advanced → JoSAA Counselling → Seat Allocation'
      },
      facilities: ['Innovation labs', 'Incubation center', 'International collaborations', 'Alumni network'],
      placement: {
        average: '₹19.2L',
        highest: '₹2.5Cr',
        companies: 'Apple, Facebook, Tesla, JP Morgan',
        percentage: '97%'
      },
      highlights: ['Startup Ecosystem', 'Industry Connect', 'Global Rankings']
    },
    {
      id: 3,
      name: 'BITS Pilani',
      location: 'Pilani, Rajasthan',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop',
      ranking: '#8 NIRF Engineering',
      established: '1964',
      category: 'Private Institute',
      fees: {
        btech: '₹4.5L per year',
        mtech: '₹3.8L per year',
        phd: '₹2.2L per year'
      },
      programs: ['B.E.', 'M.E.', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electronics', 'Mechanical', 'Chemical'],
      admissionProcess: {
        exam: 'BITSAT',
        cutoff: '320+ score',
        seats: '4,200 total seats',
        process: 'BITSAT → Merit List → Online Counselling → Admission'
      },
      facilities: ['Modern campus', 'Industry interface', 'Research facilities', 'Global exposure'],
      placement: {
        average: '₹16.8L',
        highest: '₹1.8Cr',
        companies: 'Microsoft, Amazon, Flipkart, Adobe',
        percentage: '92%'
      },
      highlights: ['Flexible Curriculum', 'Industry Exposure', 'Innovation Culture']
    },
    {
      id: 4,
      name: 'IIT Madras',
      location: 'Chennai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
      ranking: '#3 NIRF Engineering',
      established: '1959',
      category: 'Premier IIT',
      fees: {
        btech: '₹2.4L per year',
        mtech: '₹2.7L per year',
        phd: '₹1.1L per year'
      },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Mechanical', 'Electrical', 'Ocean Engineering'],
      admissionProcess: {
        exam: 'JEE Advanced',
        cutoff: 'Top 300 ranks',
        seats: '1,156 total seats',
        process: 'JEE Advanced → JoSAA Counselling → Admission'
      },
      facilities: ['Research park', 'Incubation cell', 'International programs', 'Industry partnerships'],
      placement: {
        average: '₹17.9L',
        highest: '₹1.9Cr',
        companies: 'Google, Microsoft, Qualcomm, Intel',
        percentage: '94%'
      },
      highlights: ['Research Excellence', 'Startup Incubation', 'Industry Partnerships']
    },
    {
      id: 5,
      name: 'NIT Trichy',
      location: 'Tiruchirappalli, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&fit=crop',
      logo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&h=100&fit=crop',
      ranking: '#9 NIRF Engineering',
      established: '1964',
      category: 'National Institute',
      fees: {
        btech: '₹1.8L per year',
        mtech: '₹2.1L per year',
        phd: '₹0.8L per year'
      },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electronics', 'Mechanical', 'Civil'],
      admissionProcess: {
        exam: 'JEE Main',
        cutoff: 'Top 2000 ranks',
        seats: '2,850 total seats',
        process: 'JEE Main → JoSAA Counselling → Seat Allocation'
      },
      facilities: ['Central library', 'Sports complex', 'Hostels', 'Training & placement'],
      placement: {
        average: '₹12.8L',
        highest: '₹1.2Cr',
        companies: 'TCS, Infosys, Wipro, Cognizant',
        percentage: '89%'
      },
      highlights: ['Strong Alumni Base', 'Industry Connect', 'Affordable Education']
    },
    {
      id: 6,
      name: 'IIIT Hyderabad',
      location: 'Hyderabad, Telangana',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
      logo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop',
      ranking: '#12 NIRF Engineering',
      established: '1998',
      category: 'Research Institute',
      fees: {
        btech: '₹3.2L per year',
        mtech: '₹2.9L per year',
        phd: '₹1.5L per year'
      },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MS'],
      specializations: ['Computer Science', 'Electronics', 'Computational Biology', 'AI & ML'],
      admissionProcess: {
        exam: 'UGEE',
        cutoff: 'Top 500 ranks',
        seats: '650 total seats',
        process: 'UGEE → Interview → Merit List → Admission'
      },
      facilities: ['Research labs', 'Innovation hub', 'Industry collaborations', 'International exchange'],
      placement: {
        average: '₹22.5L',
        highest: '₹2.8Cr',
        companies: 'Google, Facebook, Amazon, Microsoft',
        percentage: '98%'
      },
      highlights: ['Research Focus', 'Industry Partnerships', 'Innovation Hub']
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Modern Hero Section */}
      <section className="counselling-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge">
                  <i className="bi bi-star-fill"></i>
                  <span>Rated #1 Career Counselling Platform</span>
                </div>
                <h1 className="hero-title">Navigate Your Tech Career Journey</h1>
                <p className="hero-subtitle">Connect with experienced professionals for guidance, mentorship, and practical advice to help you grow in your technology career</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">2000+</span>
                    <span className="stat-label">Success Stories</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Expert Mentors</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <Link to="/apply" className="btn btn-primary btn-lg">Book Free Consultation</Link>
                  <button className="btn btn-outline-light btn-lg">View Success Stories</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counselling-showcase">
                <div className="showcase-container">
                  <div className="mentor-card main-mentor">
                    <div className="mentor-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Mentor" />
                      <div className="online-indicator"></div>
                    </div>
                    <div className="mentor-info">
                      <h4>Rahul Sharma</h4>
                      <p>Senior EM at Google</p>
                      <div className="mentor-rating">
                        <i className="bi bi-star-fill"></i>
                        <span>4.9 (200+ sessions)</span>
                      </div>
                    </div>
                    <div className="session-preview">
                      <div className="session-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Career Roadmap</span>
                      </div>
                      <div className="session-item">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Interview Prep</span>
                      </div>
                    </div>
                  </div>
                  <div className="floating-elements">
                    <div className="success-bubble bubble-1">
                      <i className="bi bi-trophy-fill"></i>
                      <span>180% Salary Hike</span>
                    </div>
                    <div className="success-bubble bubble-2">
                      <i className="bi bi-building"></i>
                      <span>FAANG Placement</span>
                    </div>
                    <div className="success-bubble bubble-3">
                      <i className="bi bi-graph-up"></i>
                      <span>Career Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services */}
      <section className="interactive-services py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Career Development Services</h2>
            <p className="section-subtitle">Comprehensive support to help you navigate and grow in your technology career</p>
          </div>
          
          <div className="services-container">
            <div className="services-tabs">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`service-tab ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <i className={service.icon}></i>
                  <span>{service.title}</span>
                </button>
              ))}
            </div>
            
            <div className="service-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="service-details">
                    <div className="service-header">
                      <div className={`service-icon-large color-${services[activeService].color}`}>
                        <i className={services[activeService].icon}></i>
                      </div>
                      <div className="service-meta">
                        <h3>{services[activeService].title}</h3>
                        <p>{services[activeService].description}</p>
                      </div>
                    </div>
                    
                    <div className="service-features">
                      {services[activeService].features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <i className="bi bi-check-circle-fill"></i>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="service-stats">
                      <div className="stat">
                        <span className="stat-value">{services[activeService].sessions}</span>
                        <span className="stat-label">Sessions Completed</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{services[activeService].rating}</span>
                        <span className="stat-label">Average Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="service-actions-card">
                    <div className="action-header">
                      <h4>Get Started</h4>
                      <p>Choose how you'd like to connect with our mentors and begin your career development journey</p>
                    </div>
                    <div className="action-options">
                      <div className="action-option">
                        <i className="bi bi-calendar-check"></i>
                        <div className="option-content">
                          <h5>Schedule a Session</h5>
                          <p>Book a one-on-one mentoring session</p>
                        </div>
                      </div>
                      <div className="action-option">
                        <i className="bi bi-file-earmark-text"></i>
                        <div className="option-content">
                          <h5>Resume Review</h5>
                          <p>Get feedback on your resume and profile</p>
                        </div>
                      </div>
                      <div className="action-option">
                        <i className="bi bi-chat-dots"></i>
                        <div className="option-content">
                          <h5>Free Consultation</h5>
                          <p>Start with a complimentary career discussion</p>
                        </div>
                      </div>
                    </div>
                    <div className="action-buttons">
                      <Link to="/apply" className="btn btn-primary btn-lg w-100">Get Started</Link>
                      <button className="btn btn-outline-primary w-100 mt-2">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Information */}
      <section className="college-information py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Top Engineering Colleges</h2>
            <p className="section-subtitle">Comprehensive information about admission process, fees, and placement details</p>
          </div>
          
          <div className="colleges-grid">
            {colleges.map((college) => (
              <Link key={college.id} to={`/college/${college.id}`} className="college-card-minimal">
                <div className="college-header">
                  <img src={college.image} alt={college.name} className="college-banner" />
                  <div className="college-overlay">
                    <div className="college-category-badge">{college.category}</div>
                    <div className="college-basic-info">
                      <h3>{college.name}</h3>
                      <p><i className="bi bi-geo-alt"></i> {college.location}</p>
                      <div className="college-badges">
                        <span className="ranking-badge"><i className="bi bi-trophy"></i> {college.ranking}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="college-content-minimal">
                  <div className="college-highlights">
                    {college.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">
                        <i className="bi bi-star-fill"></i>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="quick-info">
                    <div className="quick-stat">
                      <i className="bi bi-currency-rupee"></i>
                      <span>From {college.fees.btech}</span>
                    </div>
                    <div className="quick-stat">
                      <i className="bi bi-briefcase"></i>
                      <span>{college.placement.average} avg</span>
                    </div>
                    <div className="quick-stat">
                      <i className="bi bi-people"></i>
                      <span>{college.placement.percentage} placed</span>
                    </div>
                  </div>
                  
                  <button className="btn btn-outline-primary view-details-btn">
                    <i className="bi bi-eye"></i>
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="counselling-cta">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Take the Next Step?</h2>
                <p className="cta-subtitle">Join 2000+ professionals who have found clarity and direction in their technology careers through our mentorship community</p>
                <div className="cta-guarantee">
                  <div className="guarantee-item">
                    <i className="bi bi-shield-check"></i>
                    <span>100% Success Guarantee</span>
                  </div>
                  <div className="guarantee-item">
                    <i className="bi bi-arrow-repeat"></i>
                    <span>Money Back Promise</span>
                  </div>
                  <div className="guarantee-item">
                    <i className="bi bi-headset"></i>
                    <span>Lifetime Support</span>
                  </div>
                </div>
                <div className="cta-actions">
                  <Link to="/counselling-dashboard" className="btn btn-primary btn-lg">View Dashboard</Link>
                  <Link to="/apply" className="btn btn-outline-light btn-lg">Start Your Journey</Link>
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

export default Counselling;