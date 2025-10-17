import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminManagement from "./AdminManagement";
import "../styles/admin-dashboard-pro.css";
import "../styles/admin-messages.css";
import "../styles/admin-modern-stats.css";
import "../styles/button-enhancements.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [timeFilter, setTimeFilter] = useState("Last 7 days");
  const [messageFilter, setMessageFilter] = useState("All Messages");
  const [refreshing, setRefreshing] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loadingApps, setLoadingApps] = useState(false);
  const [appsError, setAppsError] = useState("");
  const [notification, setNotification] = useState(null);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const storedAdminData = localStorage.getItem('adminData');
    
    if (!token || !storedAdminData) {
      navigate('/admin-login');
      return;
    }
    
    setAdminData(JSON.parse(storedAdminData));
  }, [navigate]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const fetchApplications = async () => {
    try {
      setAppsError("");
      setLoadingApps(true);
      const token = localStorage.getItem('adminToken');
      const res = await fetch("http://localhost:5001/apply", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminData');
          navigate('/admin-login');
          return;
        }
        throw new Error(`Failed to load (${res.status})`);
      }
      const data = await res.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (e) {
      setAppsError(e.message || "Failed to load applications");
    } finally {
      setLoadingApps(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin-login');
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchApplications();
    setRefreshing(false);
  };

  useEffect(() => {
    if (activeSection === "messages") {
      fetchApplications();
    }
  }, [activeSection]);

  const handleExportReport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Name,Email,Program,Status,Date\n" +
      "John Doe,john@example.com,Computer Science,Active,2024-01-15\n" +
      "Jane Smith,jane@example.com,Data Science,Pending,2024-01-14";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "student_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification("Report exported successfully!");
  };

  const handleResetSettings = () => {
    if (window.confirm("Are you sure you want to reset all settings to defaults?")) {
      showNotification("Settings reset to defaults successfully!");
    }
  };

  const handleSaveSettings = () => {
    showNotification("Settings saved successfully!");
  };

  return (
    <>
      {notification && (
        <div className={`notification ${notification.type}`}>
          <i className={`bi ${notification.type === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle'}`}></i>
          {notification.message}
        </div>
      )}
      
      <div className="admin-layout">
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
                activeSection === "messages" ? "active" : ""
              }`}
              onClick={() => setActiveSection("messages")}
            >
              <i className="bi bi-envelope"></i>
              {!sidebarCollapsed && <span>Messages</span>}
            </button>

            <button
              className={`nav-item ${
                activeSection === "admin-management" ? "active" : ""
              }`}
              onClick={() => setActiveSection("admin-management")}
            >
              <i className="bi bi-person-gear"></i>
              {!sidebarCollapsed && <span>Admin Management</span>}
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
            
            {adminData && (
              <div className="admin-profile">
                <div className="admin-avatar">
                  <i className="bi bi-person-circle"></i>
                </div>
                <div className="admin-details">
                  <div className="admin-name">{adminData.username}</div>
                  <div className="admin-role">{adminData.role || 'Admin'}</div>
                </div>
                <button 
                  className="logout-btn"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <i className="bi bi-box-arrow-right"></i>
                </button>
              </div>
            )}
          </nav>
        </div>

        <div className="admin-main">
          {activeSection === "overview" && (
            <div className="admin-content">
              <div className="content-header">
                <div>
                  <h1>Dashboard Overview</h1>
                  <p>Monitor platform performance and application metrics</p>
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
                      <i className="bi bi-file-earmark-text"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>+12%</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">{applications.length}</h2>
                    <p className="stat-label-modern">Total Applications</p>
                    <span className="stat-period">this month</span>
                  </div>
                </div>

                <div className="modern-stat-card success-card">
                  <div className="stat-header">
                    <div className="stat-icon-modern">
                      <i className="bi bi-check-circle"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>+8%</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">94%</h2>
                    <p className="stat-label-modern">Success Rate</p>
                    <span className="stat-period">this quarter</span>
                  </div>
                </div>

                <div className="modern-stat-card warning-card">
                  <div className="stat-header">
                    <div className="stat-icon-modern">
                      <i className="bi bi-clock"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>+5%</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">2.4h</h2>
                    <p className="stat-label-modern">Avg Response Time</p>
                    <span className="stat-period">vs last week</span>
                  </div>
                </div>

                <div className="modern-stat-card info-card">
                  <div className="stat-header">
                    <div className="stat-icon-modern">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div className="stat-trend-modern positive">
                      <i className="bi bi-arrow-up"></i>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="stat-body">
                    <h2 className="stat-number-modern">Secure</h2>
                    <p className="stat-label-modern">System Status</p>
                    <span className="stat-period">all systems operational</span>
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
                          <i className="bi bi-file-earmark-plus" style={{fontSize: '24px', color: '#3498db'}}></i>
                        </div>
                        <div className="activity-content">
                          <h5>New application received</h5>
                          <p>John Doe applied for Full Stack Development program</p>
                          <span className="activity-time">2 hours ago</span>
                        </div>
                        <div className="activity-status success">
                          <i className="bi bi-check-circle-fill"></i>
                        </div>
                      </div>

                      <div className="activity-item">
                        <div className="activity-avatar">
                          <i className="bi bi-person-check" style={{fontSize: '24px', color: '#27ae60'}}></i>
                        </div>
                        <div className="activity-content">
                          <h5>Application approved</h5>
                          <p>Sarah Wilson's application has been approved</p>
                          <span className="activity-time">4 hours ago</span>
                        </div>
                        <div className="activity-status success">
                          <i className="bi bi-check-circle-fill"></i>
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
                      <button className="action-btn" onClick={() => setActiveSection('messages')}>
                        <i className="bi bi-envelope"></i>
                        <span>View Messages</span>
                      </button>
                      <button className="action-btn" onClick={() => setActiveSection('admin-management')}>
                        <i className="bi bi-person-gear"></i>
                        <span>Manage Admins</span>
                      </button>
                      <button className="action-btn" onClick={handleExportReport}>
                        <i className="bi bi-download"></i>
                        <span>Export Data</span>
                      </button>
                    </div>
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
                          onClick={() => showNotification(`Reply sent to ${fullName}`)}
                        >
                          Reply
                        </button>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => showNotification(`Contacted ${fullName} at ${app.phone}`)}
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

          {activeSection === "admin-management" && (
            <div className="admin-content">
              <AdminManagement />
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
                  <button 
                    className="btn btn-outline-primary"
                    onClick={handleResetSettings}
                  >
                    <i className="bi bi-arrow-clockwise"></i>
                    Reset to Defaults
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={handleSaveSettings}
                  >
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
                        defaultValue="Devigram"
                        className="form-control"
                      />
                    </div>
                    <div className="setting-item">
                      <label>Support Email</label>
                      <input
                        type="email"
                        defaultValue="support@devigram.com"
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