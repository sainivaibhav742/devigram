import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import Campus from './pages/Campus';
import Notes from './pages/Notes';
import Blogs from './pages/Blogs';
import Hire from './pages/Hire';
import Counselling from './pages/Counselling';
import CollegeDetails from './pages/CollegeDetails';
import CounsellingDashboard from './pages/CounsellingDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Apply from './pages/Apply';
import Dashboard from './pages/Dashboard';

function App() {
  useEffect(() => {
    // Enhanced button interactions with ripple effect
    const handleButtonClick = (e) => {
      if (e.target.classList.contains('btn')) {
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        e.target.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      }
    };

    document.addEventListener('click', handleButtonClick);
    return () => document.removeEventListener('click', handleButtonClick);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/college/:id" element={<CollegeDetails />} />
          <Route path="/counselling-dashboard" element={<CounsellingDashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;