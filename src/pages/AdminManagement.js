import React, { useState } from 'react';
import '../styles/admin-management.css';
import '../styles/button-enhancements.css';

const AdminManagement = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    username: 'admin',
    email: 'admin@devigram.com',
    role: 'Super Admin'
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [newAdminData, setNewAdminData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'admin'
  });

  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Update localStorage with new profile data
    const updatedAdmin = { ...JSON.parse(localStorage.getItem('adminData')), ...profileData };
    localStorage.setItem('adminData', JSON.stringify(updatedAdmin));
    showNotification('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showNotification('New passwords do not match!', 'error');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      showNotification('Password must be at least 6 characters!', 'error');
      return;
    }
    showNotification('Password changed successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    if (!newAdminData.username || !newAdminData.password) {
      showNotification('Username and password are required!', 'error');
      return;
    }
    if (newAdminData.password.length < 6) {
      showNotification('Password must be at least 6 characters!', 'error');
      return;
    }
    showNotification(`New admin ${newAdminData.username} added successfully!`);
    setNewAdminData({ username: '', email: '', password: '', role: 'admin' });
  };

  const handleDeleteAdmin = (adminName) => {
    if (window.confirm(`Are you sure you want to delete admin: ${adminName}?`)) {
      showNotification(`Admin ${adminName} deleted successfully!`);
    }
  };

  const handleEditAdmin = (adminName) => {
    showNotification(`Opening edit form for ${adminName}`);
  };

  return (
    <>
      {notification && (
        <div className={`notification ${notification.type}`}>
          <i className={`bi ${notification.type === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle'}`}></i>
          {notification.message}
        </div>
      )}
      
      <div className="admin-management">
      <div className="management-header">
        <h1>Admin Management</h1>
        <p>Manage admin accounts and security settings</p>
      </div>

      <div className="management-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <i className="bi bi-person-circle"></i>
          My Profile
        </button>
        <button 
          className={`tab-btn ${activeTab === 'password' ? 'active' : ''}`}
          onClick={() => setActiveTab('password')}
        >
          <i className="bi bi-shield-lock"></i>
          Change Password
        </button>
        <button 
          className={`tab-btn ${activeTab === 'add-admin' ? 'active' : ''}`}
          onClick={() => setActiveTab('add-admin')}
        >
          <i className="bi bi-person-plus"></i>
          Add New Admin
        </button>
        <button 
          className={`tab-btn ${activeTab === 'admins' ? 'active' : ''}`}
          onClick={() => setActiveTab('admins')}
        >
          <i className="bi bi-people"></i>
          All Admins
        </button>
      </div>

      <div className="management-content">
        {activeTab === 'profile' && (
          <div className="tab-content">
            <div className="content-card">
              <div className="card-header">
                <h3>Profile Information</h3>
                <p>Update your account details</p>
              </div>
              <form onSubmit={handleProfileUpdate} className="profile-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      value={profileData.username}
                      onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    value={profileData.role}
                    className="form-control"
                    disabled
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-check-circle"></i>
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="tab-content">
            <div className="content-card">
              <div className="card-header">
                <h3>Change Password</h3>
                <p>Update your account password for security</p>
              </div>
              <form onSubmit={handlePasswordChange} className="password-form">
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-shield-check"></i>
                  Change Password
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'add-admin' && (
          <div className="tab-content">
            <div className="content-card">
              <div className="card-header">
                <h3>Add New Admin</h3>
                <p>Create a new administrator account</p>
              </div>
              <form onSubmit={handleAddAdmin} className="add-admin-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      value={newAdminData.username}
                      onChange={(e) => setNewAdminData({...newAdminData, username: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={newAdminData.email}
                      onChange={(e) => setNewAdminData({...newAdminData, email: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      value={newAdminData.password}
                      onChange={(e) => setNewAdminData({...newAdminData, password: e.target.value})}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <select
                      value={newAdminData.role}
                      onChange={(e) => setNewAdminData({...newAdminData, role: e.target.value})}
                      className="form-control"
                    >
                      <option value="admin">Admin</option>
                      <option value="super-admin">Super Admin</option>
                      <option value="moderator">Moderator</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-person-plus"></i>
                  Add Admin
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'admins' && (
          <div className="tab-content">
            <div className="content-card">
              <div className="card-header">
                <h3>All Administrators</h3>
                <p>Manage existing admin accounts</p>
              </div>
              <div className="admins-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Last Login</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="admin-info">
                          <div className="admin-avatar">
                            <i className="bi bi-person-circle"></i>
                          </div>
                          <span>admin</span>
                        </div>
                      </td>
                      <td>admin@devigram.com</td>
                      <td><span className="role-badge super-admin">Super Admin</span></td>
                      <td><span className="status-badge active">Active</span></td>
                      <td>2 hours ago</td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => handleEditAdmin('admin')}
                            title="Edit Admin"
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteAdmin('admin')}
                            title="Delete Admin"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-info">
                          <div className="admin-avatar">
                            <i className="bi bi-person-circle"></i>
                          </div>
                          <span>moderator1</span>
                        </div>
                      </td>
                      <td>mod@devigram.com</td>
                      <td><span className="role-badge moderator">Moderator</span></td>
                      <td><span className="status-badge active">Active</span></td>
                      <td>1 day ago</td>
                      <td>
                        <div className="action-buttons">
                          <button 
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => handleEditAdmin('moderator1')}
                            title="Edit Admin"
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteAdmin('moderator1')}
                            title="Delete Admin"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default AdminManagement;