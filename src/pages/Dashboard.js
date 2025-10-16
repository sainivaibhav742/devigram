import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/dashboard.css';
import '../styles/dashboard-enhanced.css';
import '../styles/dashboard-premium.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [studyTimer, setStudyTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('daily');
  const location = useLocation();
  const isVisitor = location.search.includes('visitor=true');

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTimerActive) {
        setStudyTimer(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isTimerActive]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsTimerActive(!isTimerActive);
  };

  const resetTimer = () => {
    setStudyTimer(0);
    setIsTimerActive(false);
  };

  return (
    <>
      <Navbar />
      
      {/* Guest Mode Banner */}
      {isVisitor && (
        <div className="guest-banner">
          <div className="container">
            <div className="alert alert-info mb-0">
              <i className="bi bi-info-circle me-2"></i>
              <strong>Guest Mode:</strong> You're viewing the demo in read-only mode.
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="dashboard-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
        </div>
        <div className="container">
          <div className="welcome-card">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="welcome-content">
                  <h1 className="welcome-title">Welcome back, Alex!</h1>
                  <p className="welcome-subtitle">Continue your learning journey and achieve your goals</p>
                  <div className="welcome-stats">
                    <div className="stat-item">
                      <span className="stat-number">12</span>
                      <span className="stat-label">Courses Completed</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">7</span>
                      <span className="stat-label">Day Streak</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">2,450</span>
                      <span className="stat-label">Points Earned</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="progress-circle">
                  <div className="circle-progress" data-progress="75">
                    <div className="circle-content">
                      <span className="progress-value">75%</span>
                      <span className="progress-label">Overall Progress</span>
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
                  <i className="bi bi-book-fill"></i>
                </div>
                <div className="stat-content">
                  <h3>8</h3>
                  <p>Enrolled Courses</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>+2 this month</span>
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
                  <h3>12</h3>
                  <p>Completed</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>+3 this week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-card warning h-100">
                <div className="stat-icon">
                  <i className="bi bi-fire"></i>
                </div>
                <div className="stat-content">
                  <h3>7</h3>
                  <p>Study Streak</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>Keep going!</span>
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
                  <h3>2,450</h3>
                  <p>Total Points</p>
                  <div className="stat-trend">
                    <i className="bi bi-arrow-up"></i>
                    <span>+150 today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="learning-path py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Your Learning Journey</h2>
            <p className="section-subtitle">Track your progress across different skill areas</p>
          </div>
          
          <div className="skills-progress">
            <div className="skill-item">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="skill-info">
                  <h4>Data Structures & Algorithms</h4>
                  <p>Master problem-solving fundamentals</p>
                </div>
                <div className="skill-level">
                  <span className="level-badge advanced">Advanced</span>
                </div>
              </div>
              <div className="skill-progress">
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
                <span className="progress-percentage">85%</span>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className="bi bi-diagram-3"></i>
                </div>
                <div className="skill-info">
                  <h4>System Design</h4>
                  <p>Learn to architect scalable systems</p>
                </div>
                <div className="skill-level">
                  <span className="level-badge intermediate">Intermediate</span>
                </div>
              </div>
              <div className="skill-progress">
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '60%'}}></div>
                </div>
                <span className="progress-percentage">60%</span>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className="bi bi-database"></i>
                </div>
                <div className="skill-info">
                  <h4>Database Design</h4>
                  <p>Master SQL and database optimization</p>
                </div>
                <div className="skill-level">
                  <span className="level-badge beginner">Beginner</span>
                </div>
              </div>
              <div className="skill-progress">
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '30%'}}></div>
                </div>
                <span className="progress-percentage">30%</span>
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
                  <h3>Continue Learning</h3>
                  <p>Pick up where you left off</p>
                </div>
                <div className="courses-list">
                  <div className="course-item">
                    <div className="course-image">
                      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=80&fit=crop" alt="Course" />
                    </div>
                    <div className="course-content">
                      <h4>Dynamic Programming</h4>
                      <p>Master advanced problem-solving techniques</p>
                      <div className="course-progress">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '65%'}}></div>
                        </div>
                        <span className="progress-text">65% Complete</span>
                      </div>
                    </div>
                    <div className="course-action">
                      <button className="btn btn-primary">Continue</button>
                    </div>
                  </div>

                  <div className="course-item">
                    <div className="course-image">
                      <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=80&h=80&fit=crop" alt="Course" />
                    </div>
                    <div className="course-content">
                      <h4>System Design</h4>
                      <p>Learn to design scalable systems</p>
                      <div className="course-progress">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '25%'}}></div>
                        </div>
                        <span className="progress-text">25% Complete</span>
                      </div>
                    </div>
                    <div className="course-action">
                      <button className="btn btn-primary">Continue</button>
                    </div>
                  </div>

                  <div className="course-item completed">
                    <div className="course-image">
                      <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=80&h=80&fit=crop" alt="Course" />
                    </div>
                    <div className="course-content">
                      <h4>Arrays & Strings</h4>
                      <p>Fundamental data structures and algorithms</p>
                      <div className="course-progress">
                        <div className="progress-bar">
                          <div className="progress-fill completed" style={{width: '100%'}}></div>
                        </div>
                        <span className="progress-text">Completed</span>
                      </div>
                    </div>
                    <div className="course-action">
                      <button className="btn btn-outline-primary">Review</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content-card">
                <div className="card-header">
                  <h3>Recent Achievements</h3>
                  <p>Your latest milestones</p>
                </div>
                <div className="achievements-list">
                  <div className="achievement-item">
                    <div className="achievement-icon trophy">
                      <i className="bi bi-trophy-fill"></i>
                    </div>
                    <div className="achievement-content">
                      <h5>First Course Complete</h5>
                      <p>Completed Arrays & Strings</p>
                      <span className="achievement-date">2 days ago</span>
                    </div>
                  </div>

                  <div className="achievement-item">
                    <div className="achievement-icon fire">
                      <i className="bi bi-fire"></i>
                    </div>
                    <div className="achievement-content">
                      <h5>7 Day Streak</h5>
                      <p>Keep up the momentum!</p>
                      <span className="achievement-date">Today</span>
                    </div>
                  </div>

                  <div className="achievement-item">
                    <div className="achievement-icon star">
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="achievement-content">
                      <h5>Top Performer</h5>
                      <p>Top 10% this month</p>
                      <span className="achievement-date">1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card mt-4">
                <div className="card-header">
                  <h3>Quick Actions</h3>
                  <p>What would you like to do?</p>
                </div>
                <div className="quick-actions">
                  <Link to="/courses" className="action-btn">
                    <i className="bi bi-search"></i>
                    <span>Browse Courses</span>
                  </Link>
                  <Link to="/notes" className="action-btn">
                    <i className="bi bi-journal-text"></i>
                    <span>Study Notes</span>
                  </Link>
                  <Link to="/counselling" className="action-btn">
                    <i className="bi bi-person-video3"></i>
                    <span>Get Counselling</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="leaderboard-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-header">
              <div className="trophy-icon">
                <i className="bi bi-trophy-fill"></i>
              </div>
              <h2 className="section-title">Global Leaderboard</h2>
              <p className="section-subtitle">Compete with learners worldwide and climb the ranks</p>
              <div className="leaderboard-filters">
                <button className="filter-btn active">This Week</button>
                <button className="filter-btn">This Month</button>
                <button className="filter-btn">All Time</button>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-8">
              <div className="leaderboard-card">
                <div className="podium-section">
                  <div className="podium-item second">
                    <div className="podium-avatar">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="2nd Place" />
                      <div className="rank-crown silver">2</div>
                    </div>
                    <h6>Maria Rodriguez</h6>
                    <p>3,120 pts</p>
                  </div>
                  
                  <div className="podium-item first">
                    <div className="podium-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=70&h=70&fit=crop&crop=face" alt="1st Place" />
                      <div className="rank-crown gold">
                        <i className="bi bi-crown-fill"></i>
                      </div>
                    </div>
                    <h6>Sarah Chen</h6>
                    <p>3,890 pts</p>
                  </div>
                  
                  <div className="podium-item third">
                    <div className="podium-avatar">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face" alt="3rd Place" />
                      <div className="rank-crown bronze">3</div>
                    </div>
                    <h6>David Kim</h6>
                    <p>2,890 pts</p>
                  </div>
                </div>
                
                <div className="leaderboard-list">
                  <div className="leaderboard-item current-user highlight">
                    <div className="rank-position">
                      <span className="rank-number">4</span>
                      <div className="rank-change up">
                        <i className="bi bi-arrow-up"></i>
                        <span>+2</span>
                      </div>
                    </div>
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="You" />
                        <div className="user-status online"></div>
                        <div className="you-badge">YOU</div>
                      </div>
                      <div className="user-details">
                        <h5>Alex Johnson</h5>
                        <p>Full Stack Developer</p>
                        <div className="user-level">
                          <span className="level-badge">Level 12</span>
                        </div>
                      </div>
                    </div>
                    <div className="user-metrics">
                      <div className="metric-item">
                        <span className="metric-value">2,450</span>
                        <span className="metric-label">Points</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">12</span>
                        <span className="metric-label">Courses</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">7</span>
                        <span className="metric-label">Streak</span>
                      </div>
                    </div>
                  </div>

                  <div className="leaderboard-item">
                    <div className="rank-position">
                      <span className="rank-number">5</span>
                    </div>
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" alt="User" />
                        <div className="user-status online"></div>
                      </div>
                      <div className="user-details">
                        <h5>Emma Wilson</h5>
                        <p>Frontend Developer</p>
                        <div className="user-level">
                          <span className="level-badge">Level 10</span>
                        </div>
                      </div>
                    </div>
                    <div className="user-metrics">
                      <div className="metric-item">
                        <span className="metric-value">2,180</span>
                        <span className="metric-label">Points</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">9</span>
                        <span className="metric-label">Courses</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">5</span>
                        <span className="metric-label">Streak</span>
                      </div>
                    </div>
                  </div>

                  <div className="leaderboard-item">
                    <div className="rank-position">
                      <span className="rank-number">6</span>
                      <div className="rank-change down">
                        <i className="bi bi-arrow-down"></i>
                        <span>-1</span>
                      </div>
                    </div>
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="User" />
                        <div className="user-status away"></div>
                      </div>
                      <div className="user-details">
                        <h5>James Park</h5>
                        <p>Backend Developer</p>
                        <div className="user-level">
                          <span className="level-badge">Level 11</span>
                        </div>
                      </div>
                    </div>
                    <div className="user-metrics">
                      <div className="metric-item">
                        <span className="metric-value">1,950</span>
                        <span className="metric-label">Points</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">8</span>
                        <span className="metric-label">Courses</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">3</span>
                        <span className="metric-label">Streak</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="rank-progress-card">
                <div className="progress-header">
                  <div className="progress-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <h3>Your Progress</h3>
                  <p>Keep climbing the ranks!</p>
                </div>
                
                <div className="current-rank">
                  <div className="rank-display">
                    <div className="rank-number">#4</div>
                    <div className="rank-trend positive">
                      <i className="bi bi-trending-up"></i>
                      <span>+2 this week</span>
                    </div>
                  </div>
                </div>
                
                <div className="progress-stats">
                  <div className="stat-row">
                    <span className="stat-label">Points to #3</span>
                    <span className="stat-value highlight">440 pts</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Weekly gain</span>
                    <span className="stat-value positive">+180 pts</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Global rank</span>
                    <span className="stat-value">Top 15%</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Next milestone</span>
                    <span className="stat-value">Level 13</span>
                  </div>
                </div>
                
                <div className="progress-bar-container">
                  <div className="progress-label">Progress to next rank</div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '65%'}}></div>
                  </div>
                  <div className="progress-text">65% complete</div>
                </div>
              </div>

              <div className="achievements-showcase mt-4">
                <div className="showcase-header">
                  <h3>Recent Achievements</h3>
                  <p>Your latest milestones</p>
                </div>
                <div className="achievement-grid">
                  <div className="achievement-badge earned">
                    <div className="badge-icon">
                      <i className="bi bi-fire"></i>
                    </div>
                    <div className="badge-info">
                      <h6>Week Warrior</h6>
                      <p>7-day streak</p>
                    </div>
                  </div>
                  <div className="achievement-badge earned">
                    <div className="badge-icon">
                      <i className="bi bi-lightning-fill"></i>
                    </div>
                    <div className="badge-info">
                      <h6>Speed Learner</h6>
                      <p>Fast completion</p>
                    </div>
                  </div>
                  <div className="achievement-badge locked">
                    <div className="badge-icon">
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="badge-info">
                      <h6>Top Performer</h6>
                      <p>Reach top 3</p>
                    </div>
                  </div>
                  <div className="achievement-badge locked">
                    <div className="badge-icon">
                      <i className="bi bi-gem"></i>
                    </div>
                    <div className="badge-info">
                      <h6>Master</h6>
                      <p>Complete 20 courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Activity */}
      <section className="activity-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-card">
                <div className="card-header">
                  <h3>Weekly Activity</h3>
                  <p>Your study pattern over the last 7 days</p>
                </div>
                <div className="activity-chart">
                  <div className="chart-container">
                    <div className="chart-bars">
                      <div className="bar-item">
                        <div className="bar" style={{height: '60%'}} data-value="2.5h"></div>
                        <span className="bar-label">Mon</span>
                      </div>
                      <div className="bar-item">
                        <div className="bar" style={{height: '80%'}} data-value="3.2h"></div>
                        <span className="bar-label">Tue</span>
                      </div>
                      <div className="bar-item">
                        <div className="bar" style={{height: '45%'}} data-value="1.8h"></div>
                        <span className="bar-label">Wed</span>
                      </div>
                      <div className="bar-item">
                        <div className="bar" style={{height: '90%'}} data-value="3.6h"></div>
                        <span className="bar-label">Thu</span>
                      </div>
                      <div className="bar-item">
                        <div className="bar" style={{height: '70%'}} data-value="2.8h"></div>
                        <span className="bar-label">Fri</span>
                      </div>
                      <div className="bar-item">
                        <div className="bar" style={{height: '55%'}} data-value="2.2h"></div>
                        <span className="bar-label">Sat</span>
                      </div>
                      <div className="bar-item">
                        <div className="bar active" style={{height: '85%'}} data-value="3.4h"></div>
                        <span className="bar-label">Sun</span>
                      </div>
                    </div>
                  </div>
                  <div className="activity-stats">
                    <div className="stat-box">
                      <span className="stat-value">19.5h</span>
                      <span className="stat-label">Total Hours</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-value">2.8h</span>
                      <span className="stat-label">Daily Average</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-value">+15%</span>
                      <span className="stat-label">vs Last Week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content-card">
                <div className="card-header">
                  <h3>Study Calendar</h3>
                  <p>Your upcoming schedule</p>
                </div>
                <div className="study-calendar">
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="day">15</span>
                      <span className="month">Dec</span>
                    </div>
                    <div className="event-content">
                      <h5>System Design Mock</h5>
                      <p>Practice session with mentor</p>
                      <span className="event-time">2:00 PM - 3:30 PM</span>
                    </div>
                  </div>

                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="day">16</span>
                      <span className="month">Dec</span>
                    </div>
                    <div className="event-content">
                      <h5>Algorithm Contest</h5>
                      <p>Weekly coding challenge</p>
                      <span className="event-time">7:00 PM - 9:00 PM</span>
                    </div>
                  </div>

                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="day">18</span>
                      <span className="month">Dec</span>
                    </div>
                    <div className="event-content">
                      <h5>Database Workshop</h5>
                      <p>Advanced SQL techniques</p>
                      <span className="event-time">10:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card mt-4">
                <div className="card-header">
                  <h3>Learning Streak</h3>
                  <p>Keep the momentum going!</p>
                </div>
                <div className="streak-display">
                  <div className="streak-circle">
                    <div className="streak-number">7</div>
                    <div className="streak-label">Days</div>
                  </div>
                  <div className="streak-info">
                    <p>You're on fire! 🔥</p>
                    <p>Study for 3 more days to reach your 10-day milestone.</p>
                  </div>
                </div>
                <div className="streak-calendar">
                  <div className="streak-days">
                    <div className="streak-day completed">M</div>
                    <div className="streak-day completed">T</div>
                    <div className="streak-day completed">W</div>
                    <div className="streak-day completed">T</div>
                    <div className="streak-day completed">F</div>
                    <div className="streak-day completed">S</div>
                    <div className="streak-day completed current">S</div>
                  </div>
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

export default Dashboard;