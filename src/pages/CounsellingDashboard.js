import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/counselling-dashboard.css';

const CounsellingDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="counselling-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
        </div>
        <div className="container">
          <div className="welcome-card">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="welcome-content">
                  <h1 className="welcome-title">Welcome, Priya!</h1>
                  <p className="welcome-subtitle">Track your college application journey and career progress</p>
                  <div className="welcome-stats">
                    <div className="stat-item">
                      <span className="stat-number">8</span>
                      <span className="stat-label">Applications Sent</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">3</span>
                      <span className="stat-label">Interviews Scheduled</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">2</span>
                      <span className="stat-label">Offers Received</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="progress-circle">
                  <div className="circle-progress" data-progress="60">
                    <div className="circle-content">
                      <span className="progress-value">60%</span>
                      <span className="progress-label">Application Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="stat-card primary h-100">
                <div className="stat-icon">
                  <i className="bi bi-building"></i>
                </div>
                <div className="stat-content">
                  <h3>12</h3>
                  <p>Target Colleges</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>+2 this week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card success h-100">
                <div className="stat-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <div className="stat-content">
                  <h3>8</h3>
                  <p>Applications Sent</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>+3 this month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card warning h-100">
                <div className="stat-icon">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <div className="stat-content">
                  <h3>3</h3>
                  <p>Interviews</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>This week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card info h-100">
                <div className="stat-icon">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <div className="stat-content">
                  <h3>2</h3>
                  <p>Offers Received</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>Great progress!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-card">
                <div className="card-header">
                  <div className="nav-tabs">
                    <button 
                      className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
                      onClick={() => setActiveTab('applications')}
                    >
                      Applications
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'interviews' ? 'active' : ''}`}
                      onClick={() => setActiveTab('interviews')}
                    >
                      Interviews
                    </button>
                  </div>
                </div>

                {activeTab === 'overview' && (
                  <div className="tab-content">
                    <h3>Application Timeline</h3>
                    <div className="timeline">
                      <div className="timeline-item completed">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h5>Profile Assessment</h5>
                          <p>Completed comprehensive profile evaluation</p>
                          <span className="timeline-date">2 weeks ago</span>
                        </div>
                      </div>
                      <div className="timeline-item completed">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h5>College Shortlisting</h5>
                          <p>Selected 12 target colleges based on profile</p>
                          <span className="timeline-date">1 week ago</span>
                        </div>
                      </div>
                      <div className="timeline-item active">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h5>Application Submission</h5>
                          <p>Submitted 8 out of 12 applications</p>
                          <span className="timeline-date">In Progress</span>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h5>Interview Preparation</h5>
                          <p>Prepare for upcoming interviews</p>
                          <span className="timeline-date">Next Week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'applications' && (
                  <div className="tab-content">
                    <h3>Application Status</h3>
                    <div className="applications-list">
                      <div className="application-item status-accepted">
                        <div className="college-info">
                          <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop" alt="College" />
                          <div className="college-details">
                            <h5>Stanford University</h5>
                            <p>Computer Science</p>
                          </div>
                        </div>
                        <div className="application-status">
                          <span className="status-badge accepted">Accepted</span>
                          <span className="deadline">Deadline: Dec 1</span>
                        </div>
                      </div>

                      <div className="application-item status-pending">
                        <div className="college-info">
                          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=60&h=60&fit=crop" alt="College" />
                          <div className="college-details">
                            <h5>MIT</h5>
                            <p>Electrical Engineering</p>
                          </div>
                        </div>
                        <div className="application-status">
                          <span className="status-badge pending">Under Review</span>
                          <span className="deadline">Deadline: Jan 1</span>
                        </div>
                      </div>

                      <div className="application-item status-interview">
                        <div className="college-info">
                          <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=60&h=60&fit=crop" alt="College" />
                          <div className="college-details">
                            <h5>UC Berkeley</h5>
                            <p>Data Science</p>
                          </div>
                        </div>
                        <div className="application-status">
                          <span className="status-badge interview">Interview Scheduled</span>
                          <span className="deadline">Interview: Dec 15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'interviews' && (
                  <div className="tab-content">
                    <h3>Upcoming Interviews</h3>
                    <div className="interviews-list">
                      <div className="interview-item">
                        <div className="interview-date">
                          <span className="day">15</span>
                          <span className="month">Dec</span>
                        </div>
                        <div className="interview-details">
                          <h5>UC Berkeley - Data Science</h5>
                          <p>Technical Interview with Prof. Johnson</p>
                          <span className="interview-time">2:00 PM - 3:00 PM (Online)</span>
                        </div>
                        <div className="interview-actions">
                          <button className="btn btn-primary btn-sm">Join Meeting</button>
                        </div>
                      </div>

                      <div className="interview-item">
                        <div className="interview-date">
                          <span className="day">18</span>
                          <span className="month">Dec</span>
                        </div>
                        <div className="interview-details">
                          <h5>Carnegie Mellon - Computer Science</h5>
                          <p>Panel Interview with Admissions Committee</p>
                          <span className="interview-time">10:00 AM - 11:30 AM (Online)</span>
                        </div>
                        <div className="interview-actions">
                          <button className="btn btn-outline-primary btn-sm">Prepare</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content-card">
                <div className="card-header">
                  <h3>Next Steps</h3>
                  <p>Your upcoming tasks</p>
                </div>
                <div className="tasks-list">
                  <div className="task-item urgent">
                    <div className="task-icon">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                    <div className="task-content">
                      <h5>Submit MIT Application</h5>
                      <p>Deadline in 3 days</p>
                    </div>
                  </div>

                  <div className="task-item">
                    <div className="task-icon">
                      <i className="bi bi-calendar-check"></i>
                    </div>
                    <div className="task-content">
                      <h5>Prepare for UC Berkeley Interview</h5>
                      <p>Scheduled for Dec 15</p>
                    </div>
                  </div>

                  <div className="task-item">
                    <div className="task-icon">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div className="task-content">
                      <h5>Update Personal Statement</h5>
                      <p>For remaining applications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card mt-4">
                <div className="card-header">
                  <h3>Counselor Support</h3>
                  <p>Get personalized guidance</p>
                </div>
                <div className="counselor-info">
                  <div className="counselor-profile">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Counselor" />
                    <div className="counselor-details">
                      <h5>Dr. Sarah Wilson</h5>
                      <p>Senior Education Counselor</p>
                      <div className="counselor-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <span>4.9/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="counselor-actions">
                    <button className="btn btn-primary w-100 mb-2">Schedule Session</button>
                    <button className="btn btn-outline-primary w-100">Send Message</button>
                  </div>
                </div>
              </div>

              <div className="content-card mt-4">
                <div className="card-header">
                  <h3>Resources</h3>
                  <p>Helpful materials</p>
                </div>
                <div className="resources-list">
                  <Link to="#" className="resource-item">
                    <i className="bi bi-file-pdf"></i>
                    <span>Interview Preparation Guide</span>
                  </Link>
                  <Link to="#" className="resource-item">
                    <i className="bi bi-file-text"></i>
                    <span>Personal Statement Templates</span>
                  </Link>
                  <Link to="#" className="resource-item">
                    <i className="bi bi-graph-up"></i>
                    <span>College Comparison Tool</span>
                  </Link>
                  <Link to="#" className="resource-item">
                    <i className="bi bi-calendar"></i>
                    <span>Application Deadlines</span>
                  </Link>
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

export default CounsellingDashboard;