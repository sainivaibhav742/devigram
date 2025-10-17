import React, { useEffect, useState } from "react";
import "../styles/admin-dashboard-pro.css";
import "../styles/admin-messages.css";
import "../styles/admin-modern-stats.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [timeFilter, setTimeFilter] = useState("Last 7 days");
  const [messageFilter, setMessageFilter] = useState("All Messages");
  const [refreshing, setRefreshing] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loadingApps, setLoadingApps] = useState(false);
  const [appsError, setAppsError] = useState("");

  const fetchApplications = async () => {
    try {
      setAppsError("");
      setLoadingApps(true);
      const res = await fetch("http://localhost:5001/apply"); // dev proxy to server
      if (!res.ok) throw new Error(`Failed to load (${res.status})`);
      const data = await res.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (e) {
      setAppsError(e.message || "Failed to load applications");
    } finally {
      setLoadingApps(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchApplications();
    setRefreshing(false);
  };

  // Load applications when Messages section is opened
  useEffect(() => {
    if (activeSection === "messages") {
      fetchApplications();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  const handleExportReport = () => {
    alert("Exporting report...");
  };

  const handleAddStudent = () => {
    alert("Add Student functionality");
  };

  const handleScheduleSession = () => {
    alert("Schedule Session functionality");
  };

  const handleGenerateReport = () => {
    alert("Generate Report functionality");
  };

  const handleSendNotification = () => {
    alert("Send Notification functionality");
  };

  return (
    <>
      <div className="admin-layout">
        {/* Sidebar */}
        <div className={`admin-sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
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
              className={`nav-item ${
                activeSection === "overview" ? "active" : ""
              }`}
              onClick={() => setActiveSection("overview")}
            >
              <i className="bi bi-grid"></i>
              {!sidebarCollapsed && <span>Overview</span>}
            </button>
            <button
              className={`nav-item ${
                activeSection === "students" ? "active" : ""
              }`}
              onClick={() => setActiveSection("students")}
            >
              <i className="bi bi-people"></i>
              {!sidebarCollapsed && <span>Students</span>}
            </button>
            <button
              className={`nav-item ${
                activeSection === "counselors" ? "active" : ""
              }`}
              onClick={() => setActiveSection("counselors")}
            >
              <i className="bi bi-person-video3"></i>
              {!sidebarCollapsed && <span>Counselors</span>}
            </button>
            <button
              className={`nav-item ${
                activeSection === "messages" ? "active" : ""
              }`}
              onClick={() => setActiveSection("messages")}
            >
              <i className="bi bi-envelope"></i>
              {!sidebarCollapsed && <span>Messages</span>}
            </button>
            <button
              className={`nav-item ${
                activeSection === "analytics" ? "active" : ""
              }`}
              onClick={() => setActiveSection("analytics")}
            >
              <i className="bi bi-graph-up"></i>
              {!sidebarCollapsed && <span>Analytics</span>}
            </button>
            <button
              className={`nav-item ${
                activeSection === "settings" ? "active" : ""
              }`}
              onClick={() => setActiveSection("settings")}
            >
              <i className="bi bi-gear"></i>
              {!sidebarCollapsed && <span>Settings</span>}
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="admin-main">
          {activeSection === "overview" && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>Dashboard Overview</h1>
                  <p>Monitor student progress and platform performance</p>
                </div>
                <div className="header-actions">
                  <select
                    className="form-select"
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value)}
                  >
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>This quarter</option>
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleExportReport}
                  >
                    <i className="bi bi-download"></i>
                    Export Report
                  </button>
                </div>
              </div>

              <div className="modern-stats-grid">
                <div className="modern-stat-card primary-card">
                  <div className="stat-header">
                    <div className="stat-icon-modern">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>+18%</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">10,247</h2>
                    <p className="stat-label-modern">Total Students</p>
                    <span className="stat-period">this month</span>
                  </div>
                  <div className="stat-progress">
                    <div
                      className="progress-bar"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="modern-stat-card success-card">
                  <div className="stat-header">
                    <div className="stat-icon-modern">
                      <i className="bi bi-person-video3"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>+8</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">127</h2>
                    <p className="stat-label-modern">Active Counselors</p>
                    <span className="stat-period">this week</span>
                  </div>
                  <div className="stat-progress">
                    <div
                      className="progress-bar"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="modern-stat-card warning-card">
                  <div className="stat-header">
                    <div className="stat-icon-modern">
                      <i className="bi bi-calendar-event"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>+15%</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">342</h2>
                    <p className="stat-label-modern">Sessions Today</p>
                    <span className="stat-period">vs yesterday</span>
                  </div>
                  <div className="stat-progress">
                    <div
                      className="progress-bar"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div className="modern-stat-card info-card">
                  <div className="stat-header">
                    <div className="stat-icon-modern">
                      <i className="bi bi-trophy-fill"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>+5%</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">94%</h2>
                    <p className="stat-label-modern">Success Rate</p>
                    <span className="stat-period">this quarter</span>
                  </div>
                  <div className="stat-progress">
                    <div
                      className="progress-bar"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-8">
                  <div className="content-card">
                    <div className="card-header">
                      <h3>Recent Activity</h3>
                      <button className="btn btn-outline-primary btn-sm">
                        View All
                      </button>
                    </div>
                    <div className="activity-list">
                      <div className="activity-item">
                        <div className="activity-avatar">
                          <img
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face"
                            alt="Student"
                          />
                        </div>
                        <div className="activity-content">
                          <h5>Priya Sharma completed college application</h5>
                          <p>
                            Applied to Stanford University - Computer Science
                          </p>
                          <span className="activity-time">2 hours ago</span>
                        </div>
                        <div className="activity-status success">
                          <i className="bi bi-check-circle-fill"></i>
                        </div>
                      </div>

                      <div className="activity-item">
                        <div className="activity-avatar">
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
                            alt="Student"
                          />
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
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                            alt="Student"
                          />
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
                      <button className="action-btn" onClick={handleAddStudent}>
                        <i className="bi bi-person-plus"></i>
                        <span>Add Student</span>
                      </button>
                      <button
                        className="action-btn"
                        onClick={handleScheduleSession}
                      >
                        <i className="bi bi-calendar-plus"></i>
                        <span>Schedule Session</span>
                      </button>
                      <button
                        className="action-btn"
                        onClick={handleGenerateReport}
                      >
                        <i className="bi bi-file-earmark-text"></i>
                        <span>Generate Report</span>
                      </button>
                      <button
                        className="action-btn"
                        onClick={handleSendNotification}
                      >
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
                      <select className="form-select" style={{ width: "auto" }}>
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>This Quarter</option>
                      </select>
                    </div>
                    <div className="performance-metrics">
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">
                            Student Satisfaction
                          </span>
                          <span className="metric-value">94%</span>
                        </div>
                        <div className="metric-bar">
                          <div
                            className="metric-fill"
                            style={{ width: "94%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">
                            Course Completion Rate
                          </span>
                          <span className="metric-value">87%</span>
                        </div>
                        <div className="metric-bar">
                          <div
                            className="metric-fill"
                            style={{ width: "87%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">
                            Interview Success Rate
                          </span>
                          <span className="metric-value">76%</span>
                        </div>
                        <div className="metric-bar">
                          <div
                            className="metric-fill"
                            style={{ width: "76%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="metric-row">
                        <div className="metric-info">
                          <span className="metric-label">
                            Counselor Utilization
                          </span>
                          <span className="metric-value">82%</span>
                        </div>
                        <div className="metric-bar">
                          <div
                            className="metric-fill"
                            style={{ width: "82%" }}
                          ></div>
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
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                            alt="Dr. Sarah"
                          />
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
                          <img
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                            alt="Priya"
                          />
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
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                            alt="Alex"
                          />
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
                            <div
                              className="metric-fill success"
                              style={{ width: "99%" }}
                            ></div>
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
                            <div
                              className="metric-fill success"
                              style={{ width: "95%" }}
                            ></div>
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
                            <div
                              className="metric-fill success"
                              style={{ width: "100%" }}
                            ></div>
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
                            <div
                              className="metric-fill warning"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "students" && (
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
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
                        alt="Priya"
                      />
                      <div className="status-indicator active"></div>
                    </div>
                    <div className="student-info">
                      <h4>Priya Sharma</h4>
                      <p>priya@example.com</p>
                      <span className="type-badge counselling">
                        Counselling
                      </span>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Overall Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "75%" }}
                      ></div>
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
                    <button className="btn btn-outline-primary btn-sm">
                      View Profile
                    </button>
                    <button className="btn btn-primary btn-sm">Contact</button>
                  </div>
                </div>

                <div className="student-card">
                  <div className="student-header">
                    <div className="student-avatar">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                        alt="Alex"
                      />
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
                      <div
                        className="progress-fill"
                        style={{ width: "85%" }}
                      ></div>
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
                    <button className="btn btn-outline-primary btn-sm">
                      View Profile
                    </button>
                    <button className="btn btn-primary btn-sm">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "counselors" && (
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
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                        alt="Dr. Sarah"
                      />
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
                    <button className="btn btn-outline-primary">
                      View Schedule
                    </button>
                    <button className="btn btn-primary">Assign Students</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "messages" && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>Application Messages</h1>
                  <p>View and manage messages from application forms</p>
                </div>
                <div className="header-actions">
                  <select
                    className="form-select"
                    value={messageFilter}
                    onChange={(e) => setMessageFilter(e.target.value)}
                  >
                    <option>All Messages</option>
                    <option>Unread</option>
                    <option>Today</option>
                  </select>
                  <button
                    className={`btn btn-primary ${
                      refreshing ? "disabled" : ""
                    }`}
                    onClick={handleRefresh}
                    disabled={refreshing}
                  >
                    <i
                      className={`bi bi-arrow-clockwise ${
                        refreshing ? "spin" : ""
                      }`}
                    ></i>
                    {refreshing ? "Refreshing..." : "Refresh"}
                  </button>
                </div>
              </div>

              <div className="messages-list">
                {loadingApps && (
                  <div className="message-card">
                    <div className="message-content">
                      <p>Loading applications…</p>
                    </div>
                  </div>
                )}
                {appsError && !loadingApps && (
                  <div className="message-card">
                    <div className="message-content">
                      <p style={{ color: "red" }}>Error: {appsError}</p>
                    </div>
                  </div>
                )}
                {!loadingApps && !appsError && applications.length === 0 && (
                  <div className="message-card">
                    <div className="message-content">
                      <p>No applications yet.</p>
                    </div>
                  </div>
                )}

                {applications.map((app) => {
                  const submitted = app.submittedAt
                    ? new Date(app.submittedAt)
                    : null;
                  const submittedText = submitted
                    ? submitted.toLocaleString()
                    : "";
                  const fullName =
                    `${app.firstName || ""} ${app.lastName || ""}`.trim() ||
                    "Applicant";
                  return (
                    <div key={app._id} className="message-card">
                      <div className="message-header">
                        <div className="message-info">
                          <h5>{fullName}</h5>
                          <span className="message-email">{app.email}</span>
                        </div>
                        <div className="message-meta">
                          <span className="message-time">{submittedText}</span>
                          <span className="badge bg-secondary">New</span>
                        </div>
                      </div>
                      <div className="message-content">
                        <p>
                          <strong>Program:</strong> {app.program}
                        </p>
                        <p>
                          <strong>Phone:</strong> {app.phone}
                        </p>
                        <p>
                          <strong>Experience:</strong> {app.experience}
                        </p>
                        {app.education && (
                          <p>
                            <strong>Education:</strong> {app.education}
                          </p>
                        )}
                        {app.goals && (
                          <p>
                            <strong>Goals:</strong> {app.goals}
                          </p>
                        )}
                        {app.motivation && (
                          <p>
                            <strong>Motivation:</strong> {app.motivation}
                          </p>
                        )}
                      </div>
                      <div className="message-actions">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => alert(`Reply to ${fullName}`)}
                        >
                          Reply
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() =>
                            alert(`Contacting ${fullName} at ${app.phone}`)
                          }
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeSection === "analytics" && (
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

          {activeSection === "settings" && (
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
                      <input
                        type="text"
                        value="Devigram"
                        className="form-control"
                      />
                    </div>
                    <div className="setting-item">
                      <label>Support Email</label>
                      <input
                        type="email"
                        value="support@devigram.com"
                        className="form-control"
                      />
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
