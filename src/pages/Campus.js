import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Campus = () => {

  const programs = [
    {
      id: 1,
      title: 'DSA Bootcamp',
      duration: '6 months',
      type: 'Intensive',
      description: 'Complete data structures and algorithms mastery program',
      features: ['Live Classes', 'Mock Interviews', 'Placement Support', '1-on-1 Mentoring'],
      price: '₹49,999',
      originalPrice: '₹99,999',
      badge: 'Most Popular',
      icon: 'bi-code-slash'
    },
    {
      id: 2,
      title: 'System Design Pro',
      duration: '4 months',
      type: 'Advanced',
      description: 'Master scalable system architecture and design patterns',
      features: ['Real Projects', 'Industry Mentors', 'Portfolio Building', 'Job Referrals'],
      price: '₹39,999',
      originalPrice: '₹79,999',
      badge: 'Premium',
      icon: 'bi-diagram-3'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      duration: '8 months',
      type: 'Comprehensive',
      description: 'End-to-end web development with modern technologies',
      features: ['MERN Stack', 'DevOps', 'Testing', 'Deployment'],
      price: '₹59,999',
      originalPrice: '₹119,999',
      badge: 'Complete',
      icon: 'bi-layers'
    }
  ];

  const campusFeatures = [
    {
      icon: 'bi-mortarboard-fill',
      title: 'On-Campus Training',
      description: 'Intensive bootcamps conducted directly at your campus with expert instructors'
    },
    {
      icon: 'bi-people-fill',
      title: 'Dedicated Mentors',
      description: 'Personal mentors assigned to each student for guidance and support'
    },
    {
      icon: 'bi-trophy-fill',
      title: 'Placement Assistance',
      description: '100% placement support with direct company tie-ups and referrals'
    },
    {
      icon: 'bi-laptop',
      title: 'Modern Infrastructure',
      description: 'State-of-the-art labs and equipment for hands-on learning experience'
    },
    {
      icon: 'bi-calendar-check',
      title: 'Flexible Scheduling',
      description: 'Programs designed to fit your academic calendar and requirements'
    },
    {
      icon: 'bi-award',
      title: 'Industry Certification',
      description: 'Recognized certificates that add value to your professional profile'
    }
  ];

  const successStories = [
    {
      name: 'Rahul Sharma',
      university: 'IIT Delhi',
      company: 'Google',
      package: '₹45L',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      story: 'Campus program helped me crack Google interview in final year'
    },
    {
      name: 'Priya Patel',
      university: 'BITS Pilani',
      company: 'Microsoft',
      package: '₹42L',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      story: 'Got placed at Microsoft through campus recruitment drive'
    },
    {
      name: 'Arjun Kumar',
      university: 'NIT Trichy',
      company: 'Amazon',
      package: '₹38L',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      story: 'System design course was key to my Amazon placement'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="campus-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Campus Partnership Program</h1>
                <p className="hero-subtitle">Empowering 200+ universities with cutting-edge tech education and guaranteed placement support</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Universities</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50K+</span>
                    <span className="stat-label">Students</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Placement</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <Link to="/apply" className="btn btn-primary btn-lg">Join Program</Link>
                  <Link to="/counselling" className="btn btn-outline-light btn-lg">Schedule Demo</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="campus-visual">
                <div className="campus-illustration">
                  <div className="campus-card main-card">
                    <div className="card-header">
                      <i className="bi bi-mortarboard-fill"></i>
                      <h4>Campus Program</h4>
                    </div>
                    <div className="card-content">
                      <div className="progress-ring">
                        <div className="progress-circle">
                          <span>95%</span>
                        </div>
                      </div>
                      <p>Placement Success Rate</p>
                    </div>
                  </div>
                  <div className="floating-cards">
                    <div className="mini-card card-1">
                      <i className="bi bi-people-fill"></i>
                      <span>50K+ Students</span>
                    </div>
                    <div className="mini-card card-2">
                      <i className="bi bi-building"></i>
                      <span>200+ Universities</span>
                    </div>
                    <div className="mini-card card-3">
                      <i className="bi bi-trophy-fill"></i>
                      <span>Top Placements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Programs Section */}
      <section className="campus-programs py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Campus Programs</h2>
            <p className="section-subtitle">Comprehensive training programs designed for university students</p>
          </div>
          
          <div className="row g-4">
            {programs.map(program => (
              <div key={program.id} className="col-lg-4">
                <div className="program-card">
                  <div className="program-badge">{program.badge}</div>
                  <div className="program-header">
                    <div className="program-icon">
                      <i className={program.icon}></i>
                    </div>
                    <div className="program-info">
                      <h4>{program.title}</h4>
                      <div className="program-meta">
                        <span className="duration">{program.duration}</span>
                        <span className="type">{program.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="program-description">{program.description}</p>
                  <ul className="program-features">
                    {program.features.map((feature, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="program-pricing">
                    <span className="price">{program.price}</span>
                    <span className="original-price">{program.originalPrice}</span>
                  </div>
                  <Link to="/apply" className="btn btn-primary program-btn">Enroll Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="campus-features py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Our Campus Program?</h2>
            <p className="section-subtitle">Comprehensive on-campus training with guaranteed results</p>
          </div>
          
          <div className="row g-4">
            {campusFeatures.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Visits */}
      <section className="campus-visits py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Campus Visits & Activities</h2>
            <p className="section-subtitle">Engaging activities and visits to enhance learning experience</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="visit-card">
                <div className="visit-image">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop" alt="Tech Company Visit" />
                  <div className="visit-badge">Monthly</div>
                </div>
                <div className="visit-content">
                  <h4>Tech Company Visits</h4>
                  <p>Regular visits to top tech companies like Google, Microsoft, Amazon to understand industry practices and culture.</p>
                  <div className="visit-features">
                    <span className="feature-tag"><i className="bi bi-building"></i> 15+ Companies</span>
                    <span className="feature-tag"><i className="bi bi-people"></i> Interactive Sessions</span>
                    <span className="feature-tag"><i className="bi bi-camera"></i> Behind the Scenes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="visit-card">
                <div className="visit-image">
                  <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=300&fit=crop" alt="Hackathon" />
                  <div className="visit-badge">Quarterly</div>
                </div>
                <div className="visit-content">
                  <h4>Inter-Campus Hackathons</h4>
                  <p>Competitive coding events bringing together students from multiple campuses to solve real-world problems.</p>
                  <div className="visit-features">
                    <span className="feature-tag"><i className="bi bi-trophy"></i> ₹5L Prize Pool</span>
                    <span className="feature-tag"><i className="bi bi-clock"></i> 48 Hours</span>
                    <span className="feature-tag"><i className="bi bi-award"></i> Certificates</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="visit-card">
                <div className="visit-image">
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop" alt="Industry Expert Session" />
                  <div className="visit-badge">Weekly</div>
                </div>
                <div className="visit-content">
                  <h4>Industry Expert Sessions</h4>
                  <p>Weekly sessions with industry leaders sharing insights on latest technologies, career guidance, and market trends.</p>
                  <div className="visit-features">
                    <span className="feature-tag"><i className="bi bi-person-badge"></i> 100+ Experts</span>
                    <span className="feature-tag"><i className="bi bi-mic"></i> Live Q&A</span>
                    <span className="feature-tag"><i className="bi bi-camera-video"></i> Recorded</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="visit-card">
                <div className="visit-image">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop" alt="Project Showcase" />
                  <div className="visit-badge">Bi-Annual</div>
                </div>
                <div className="visit-content">
                  <h4>Project Showcase Events</h4>
                  <p>Students present their innovative projects to industry panels, investors, and potential employers for feedback and opportunities.</p>
                  <div className="visit-features">
                    <span className="feature-tag"><i className="bi bi-lightbulb"></i> Innovation</span>
                    <span className="feature-tag"><i className="bi bi-graph-up"></i> Funding Opportunities</span>
                    <span className="feature-tag"><i className="bi bi-handshake"></i> Networking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organized Activities */}
      <section className="organized-activities py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Student Activities & Programs</h2>
            <p className="section-subtitle">Comprehensive extracurricular programs for holistic development</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <h5>Coding Clubs</h5>
                <p>Weekly coding practice sessions, algorithm discussions, and peer learning groups.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-people"></i> 500+ Members</span>
                  <span><i className="bi bi-calendar"></i> Weekly</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>
                <h5>Innovation Labs</h5>
                <p>Hands-on workshops on emerging technologies like AI, ML, Blockchain, and IoT.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-gear"></i> 20+ Labs</span>
                  <span><i className="bi bi-calendar"></i> Monthly</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h5>Mentorship Program</h5>
                <p>One-on-one mentoring with industry professionals and senior students.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-person-check"></i> 200+ Mentors</span>
                  <span><i className="bi bi-calendar"></i> Ongoing</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h5>Career Fairs</h5>
                <p>Regular job fairs with 50+ companies offering internships and full-time positions.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-building"></i> 50+ Companies</span>
                  <span><i className="bi bi-calendar"></i> Quarterly</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-trophy"></i>
                </div>
                <h5>Competitive Programming</h5>
                <p>Training for ACM ICPC, CodeChef, Codeforces, and other programming contests.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-award"></i> Top Rankings</span>
                  <span><i className="bi bi-calendar"></i> Daily</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <h5>Tech Talks</h5>
                <p>Regular seminars on latest technology trends, startup stories, and career guidance.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-mic"></i> 100+ Talks</span>
                  <span><i className="bi bi-calendar"></i> Bi-weekly</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-globe"></i>
                </div>
                <h5>Open Source Contributions</h5>
                <p>Guided contributions to popular open source projects and building GitHub profiles.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-github"></i> 1000+ PRs</span>
                  <span><i className="bi bi-calendar"></i> Ongoing</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="bi bi-camera"></i>
                </div>
                <h5>Tech Conferences</h5>
                <p>Sponsored attendance to major tech conferences like Google I/O, AWS Summit, and more.</p>
                <div className="activity-stats">
                  <span><i className="bi bi-ticket"></i> Free Passes</span>
                  <span><i className="bi bi-calendar"></i> Annual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="campus-success py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real students, real placements, real success</p>
          </div>
          
          <div className="row g-4">
            {successStories.map((story, index) => (
              <div key={index} className="col-lg-4">
                <div className="success-card">
                  <div className="success-background">
                    <div className="success-pattern"></div>
                  </div>
                  <div className="success-content">
                    <div className="student-profile">
                      <div className="avatar-container">
                        <img src={story.image} alt={story.name} className="student-avatar" />
                        <div className="avatar-ring"></div>
                      </div>
                      <div className="student-details">
                        <h5 className="student-name">{story.name}</h5>
                        <p className="university-name">{story.university}</p>
                      </div>
                    </div>
                    
                    <div className="placement-info">
                      <div className="company-logo">
                        <i className="bi bi-building-fill"></i>
                      </div>
                      <div className="placement-details">
                        <span className="company-name">{story.company}</span>
                        <span className="package-amount">{story.package}</span>
                      </div>
                      <div className="success-badge">
                        <i className="bi bi-trophy-fill"></i>
                      </div>
                    </div>
                    
                    <div className="story-quote">
                      <div className="quote-icon">
                        <i className="bi bi-quote"></i>
                      </div>
                      <p className="story-text">{story.story}</p>
                    </div>
                    
                    <div className="success-metrics">
                      <div className="metric">
                        <i className="bi bi-calendar-check"></i>
                        <span>Placed in Final Year</span>
                      </div>
                      <div className="rating-stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <span className="rating-text">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="campus-cta">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="cta-title">Ready to Transform Your Campus?</h2>
              <p className="cta-subtitle">Join 200+ universities already partnering with us for student success</p>
              <div className="cta-features mb-4">
                <div className="row">
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Free Campus Setup</span>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Dedicated Support</span>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Placement Guarantee</span>
                  </div>
                </div>
              </div>
              <div className="cta-actions">
                <Link to="/apply" className="btn btn-primary btn-lg me-3">Partner With Us</Link>
                <Link to="/counselling" className="btn btn-outline-light btn-lg">Schedule Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Campus;