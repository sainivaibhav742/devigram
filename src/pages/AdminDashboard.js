import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/admin-dashboard-pro.css';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <>
      <div className="admin-layout">
        {/* Sidebar */}
        <div className={`admin-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-header">
            <div className="admin-logo">
              <i className="bi bi-shield-check"></i>
              {!sidebarCollapsed && <span>Admin Panel</span>}
            </div>
            <button 
              className="sidebar-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
          
          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveSection('overview')}
            >
              <i className="bi bi-grid"></i>
              {!sidebarCollapsed && <span>Overview</span>}
            </button>
            <button 
              className={`nav-item ${activeSection === 'students' ? 'active' : ''}`}
              onClick={() => setActiveSection('students')}
            >
              <i className="bi bi-people"></i>
              {!sidebarCollapsed && <span>Students</span>}
            </button>
            <button 
              className={`nav-item ${activeSection === 'counselors' ? 'active' : ''}`}
              onClick={() => setActiveSection('counselors')}
            >
              <i className="bi bi-person-video3"></i>
              {!sidebarCollapsed && <span>Counselors</span>}
            </button>
            <button 
              className={`nav-item ${activeSection === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveSection('analytics')}
            >
              <i className="bi bi-graph-up"></i>
              {!sidebarCollapsed && <span>Analytics</span>}
            </button>
            <button 
              className={`nav-item ${activeSection === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveSection('settings')}
            >
              <i className="bi bi-gear"></i>
              {!sidebarCollapsed && <span>Settings</span>}
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="admin-main">
          {activeSection === 'overview' && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>Dashboard Overview</h1>
                  <p>Monitor student progress and platform performance</p>
                </div>
                <div className="header-actions">
                  <select className="form-select">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>This quarter</option>
                  </select>
                  <button className="btn btn-primary">
                    <i className="bi bi-download"></i>
                    Export Report
                  </button>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="stat-content">
                    <h3>1,247</h3>
                    <p>Total Students</p>
                    <div className="stat-trend">
                      <i className="bi bi-arrow-up"></i>
                      <span>+12% this month</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card success">
                  <div className="stat-icon">
                    <i className="bi bi-person-video3"></i>
                  </div>
                  <div className="stat-content">
                    <h3>45</h3>
                    <p>Active Counselors</p>
                    <div className="stat-trend">
                      <i className="bi bi-arrow-up"></i>
                      <span>+3 this week</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card warning">
                  <div className="stat-icon">
                    <i className="bi bi-calendar-event"></i>
                  </div>
                  <div className="stat-content">
                    <h3>156</h3>
                    <p>Sessions Today</p>
                    <div className="stat-trend">
                      <i className="bi bi-arrow-up"></i>
                      <span>+8% vs yesterday</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card info">
                  <div className="stat-icon">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <div className="stat-content">
                    <h3>89%</h3>
                    <p>Success Rate</p>
                    <div className="stat-trend">
                      <i className="bi bi-arrow-up"></i>
                      <span>+2% this quarter</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-8">
                  <div className="content-card">
                    <div className="card-header">
                      <h3>Recent Activity</h3>
                      <button className="btn btn-outline-primary btn-sm">View All</button>
                    </div>
                    <div className="activity-list">
                      <div className="activity-item">
                        <div className="activity-avatar">
                          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face" alt="Student" />
                        </div>
                        <div className="activity-content">
                          <h5>Priya Sharma completed college application</h5>
                          <p>Applied to Stanford University - Computer Science</p>
                          <span className="activity-time">2 hours ago</span>
                        </div>
                        <div className="activity-status success">
                          <i className="bi bi-check-circle-fill"></i>
                        </div>
                      </div>

                      <div className="activity-item">
                        <div className="activity-avatar">
                          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" alt="Student" />
                        </div>
                        <div className="activity-content">
                          <h5>Alex Johnson achieved 7-day streak</h5>
                          <p>Completed Dynamic Programming course</p>
                          <span className="activity-time">3 hours ago</span>
                        </div>
                        <div className="activity-status warning">
                          <i className="bi bi-fire"></i>
                        </div>
                      </div>

                      <div className="activity-item">
                        <div className="activity-avatar">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" alt="Student" />
                        </div>
                        <div className="activity-content">
                          <h5>Rahul Patel scheduled interview</h5>
                          <p>UC Berkeley - Data Science program</p>
                          <span className="activity-time">5 hours ago</span>
                        </div>
                        <div className="activity-status info">
                          <i className="bi bi-calendar-check"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="content-card">
                    <div className="card-header">
                      <h3>Quick Actions</h3>
                    </div>
                    <div className="quick-actions">
                      <button className="action-btn">
                        <i className="bi bi-person-plus"></i>
                        <span>Add Student</span>
                      </button>
                      <button className="action-btn">
                        <i className="bi bi-calendar-plus"></i>
                        <span>Schedule Session</span>
                      </button>
                      <button className="action-btn">
                        <i className="bi bi-file-earmark-text"></i>
                        <span>Generate Report</span>
                      </button>
                      <button className="action-btn">
                        <i className="bi bi-bell"></i>
                        <span>Send Notification</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-6">
                  <div className="content-card">
                    <div className="card-header">
                      <h3>Performance Overview</h3>
                      <select className="form-select" style={{width: 'auto'}}>
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>This Quarter</option>
                      </select>
                    </div>
                    <div className="performance-metrics">
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">Student Satisfaction</span>
                          <span className="metric-value">94%</span>
                        </div>
                        <div className="metric-bar">
                          <div className="metric-fill" style={{width: '94%'}}></div>
                        </div>
                      </div>
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">Course Completion Rate</span>
                          <span className="metric-value">87%</span>
                        </div>
                        <div className="metric-bar">
                          <div className="metric-fill" style={{width: '87%'}}></div>
                        </div>
                      </div>
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">Interview Success Rate</span>
                          <span className="metric-value">76%</span>
                        </div>
                        <div className="metric-bar">
                          <div className="metric-fill" style={{width: '76%'}}></div>
                        </div>
                      </div>
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">Counselor Utilization</span>
                          <span className="metric-value">82%</span>
                        </div>
                        <div className="metric-bar">
                          <div className="metric-fill" style={{width: '82%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="content-card">
                    <div className="card-header">
                      <h3>Top Performers</h3>
                      <span className="badge badge-success">This Week</span>
                    </div>
                    <div className="performers-list">
                      <div className="performer-item">
                        <div className="performer-rank">1</div>
                        <div className="performer-avatar">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Dr. Sarah" />
                        </div>
                        <div className="performer-info">
                          <h5>Dr. Sarah Wilson</h5>
                          <p>Career Counselor</p>
                        </div>
                        <div className="performer-score">
                          <span className="score">98%</span>
                          <span className="score-label">Rating</span>
                        </div>
                      </div>

                      <div className="performer-item">
                        <div className="performer-rank">2</div>
                        <div className="performer-avatar">
                          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Priya" />
                        </div>
                        <div className="performer-info">
                          <h5>Priya Sharma</h5>
                          <p>Student - Counselling</p>
                        </div>
                        <div className="performer-score">
                          <span className="score">95%</span>
                          <span className="score-label">Progress</span>
                        </div>
                      </div>

                      <div className="performer-item">
                        <div className="performer-rank">3</div>
                        <div className="performer-avatar">
                          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Alex" />
                        </div>
                        <div className="performer-info">
                          <h5>Alex Johnson</h5>
                          <p>Student - Learning</p>
                        </div>
                        <div className="performer-score">
                          <span className="score">92%</span>
                          <span className="score-label">Completion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12">
                  <div className="content-card">
                    <div className="card-header">
                      <h3>System Health</h3>
                      <div className="health-status">
                        <span className="status-dot online"></span>
                        <span>All Systems Operational</span>
                      </div>
                    </div>
                    <div className="system-metrics">
                      <div className="system-metric">
                        <div className="metric-icon">
                          <i className="bi bi-server"></i>
                        </div>
                        <div className="metric-details">
                          <h4>Server Performance</h4>
                          <div className="metric-value">99.9% Uptime</div>
                          <div className="metric-bar">
                            <div className="metric-fill success" style={{width: '99%'}}></div>
                          </div>
                        </div>
                      </div>

                      <div className="system-metric">
                        <div className="metric-icon">
                          <i className="bi bi-database"></i>
                        </div>
                        <div className="metric-details">
                          <h4>Database Health</h4>
                          <div className="metric-value">Optimal</div>
                          <div className="metric-bar">
                            <div className="metric-fill success" style={{width: '95%'}}></div>
                          </div>
                        </div>
                      </div>

                      <div className="system-metric">
                        <div className="metric-icon">
                          <i className="bi bi-shield-check"></i>
                        </div>
                        <div className="metric-details">
                          <h4>Security Status</h4>
                          <div className="metric-value">Secure</div>
                          <div className="metric-bar">
                            <div className="metric-fill success" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>

                      <div className="system-metric">
                        <div className="metric-icon">
                          <i className="bi bi-speedometer2"></i>
                        </div>
                        <div className="metric-details">
                          <h4>Response Time</h4>
                          <div className="metric-value">120ms avg</div>
                          <div className="metric-bar">
                            <div className="metric-fill warning" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'students' && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>Student Management</h1>
                  <p>Manage and track all student activities</p>
                </div>
                <div className="header-actions">
                  <div className="search-box">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search students..." />
                  </div>
                  <button className="btn btn-primary">
                    <i className="bi bi-person-plus"></i>
                    Add Student
                  </button>
                </div>
              </div>

              <div className="filter-tabs">
                <button className="filter-tab active">All Students</button>
                <button className="filter-tab">Counselling</button>
                <button className="filter-tab">Learning</button>
                <button className="filter-tab">Active</button>
              </div>

              <div className="students-grid">
                <div className="student-card">
                  <div className="student-header">
                    <div className="student-avatar">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" alt="Priya" />
                      <div className="status-indicator active"></div>
                    </div>
                    <div className="student-info">
                      <h4>Priya Sharma</h4>
                      <p>priya@example.com</p>
                      <span className="type-badge counselling">Counselling</span>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Overall Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="student-metrics">
                    <div className="metric">
                      <span className="metric-value">8</span>
                      <span className="metric-label">Applications</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">3</span>
                      <span className="metric-label">Interviews</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">2</span>
                      <span className="metric-label">Offers</span>
                    </div>
                  </div>

                  <div className="student-actions">
                    <button className="btn btn-outline-primary btn-sm">View Profile</button>
                    <button className="btn btn-primary btn-sm">Contact</button>
                  </div>
                </div>

                <div className="student-card">
                  <div className="student-header">
                    <div className="student-avatar">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" alt="Alex" />
                      <div className="status-indicator active"></div>
                    </div>
                    <div className="student-info">
                      <h4>Alex Johnson</h4>
                      <p>alex@example.com</p>
                      <span className="type-badge learning">Learning</span>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Overall Progress</span>
                      <span>85%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div className="student-metrics">
                    <div className="metric">
                      <span className="metric-value">12</span>
                      <span className="metric-label">Courses</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">7</span>
                      <span className="metric-label">Streak</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">2450</span>
                      <span className="metric-label">Points</span>
                    </div>
                  </div>

                  <div className="student-actions">
                    <button className="btn btn-outline-primary btn-sm">View Profile</button>
                    <button className="btn btn-primary btn-sm">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'counselors' && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>Counselor Management</h1>
                  <p>Oversee counselor performance and assignments</p>
                </div>
                <div className="header-actions">
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-calendar-check"></i>
                    View Schedules
                  </button>
                  <button className="btn btn-primary">
                    <i className="bi bi-person-plus"></i>
                    Add Counselor
                  </button>
                </div>
              </div>

              <div className="counselors-grid">
                <div className="counselor-card">
                  <div className="counselor-header">
                    <div className="counselor-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Dr. Sarah" />
                      <div className="status-dot online"></div>
                    </div>
                    <div className="counselor-info">
                      <h4>Dr. Sarah Wilson</h4>
                      <p>Career Counselling</p>
                      <div className="counselor-rating">
                        <i className="bi bi-star-fill"></i>
                        <span>4.9</span>
                      </div>
                    </div>
                  </div>

                  <div className="counselor-stats">
                    <div className="stat-item">
                      <span className="stat-value">25</span>
                      <span className="stat-label">Students</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">150</span>
                      <span className="stat-label">Sessions</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">Online</span>
                      <span className="stat-label">Status</span>
                    </div>
                  </div>

                  <div className="counselor-actions">
                    <button className="btn btn-outline-primary">View Schedule</button>
                    <button className="btn btn-primary">Assign Students</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'analytics' && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>Analytics & Reports</h1>
                  <p>Comprehensive insights and performance metrics</p>
                </div>
                <div className="header-actions">
                  <select className="form-select">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-graph-up"></i>
                    Generate Report
                  </button>
                </div>
              </div>

              <div className="analytics-grid">
                <div className="analytics-card">
                  <h3>Student Enrollment Trends</h3>
                  <div className="chart-placeholder">
                    <i className="bi bi-graph-up"></i>
                    <p>Chart visualization would go here</p>
                  </div>
                </div>

                <div className="analytics-card">
                  <h3>Success Rate by Program</h3>
                  <div className="chart-placeholder">
                    <i className="bi bi-pie-chart"></i>
                    <p>Pie chart visualization would go here</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>System Settings</h1>
                  <p>Configure platform settings and preferences</p>
                </div>
                <div className="header-actions">
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-arrow-clockwise"></i>
                    Reset to Defaults
                  </button>
                  <button className="btn btn-primary">
                    <i className="bi bi-check-circle"></i>
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="settings-grid">
                <div className="settings-card">
                  <div className="settings-header">
                    <h3>Platform Configuration</h3>
                    <p>General platform settings</p>
                  </div>
                  <div className="settings-options">
                    <div className="setting-item">
                      <label>Platform Name</label>
                      <input type="text" value="Devigram" className="form-control" />
                    </div>
                    <div className="setting-item">
                      <label>Support Email</label>
                      <input type="email" value="support@devigram.com" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;