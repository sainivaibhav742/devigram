import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRippleEffect } from './utils/animations';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Campus from './pages/Campus';
import Notes from './pages/Notes';
import Blogs from './pages/Blogs';
import Hire from './pages/Hire';
import Counselling from './pages/Counselling';
import CollegeDetails from './pages/CollegeDetails';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Apply from './pages/Apply';

function App() {
  useEffect(() => {
    // Enhanced button interactions with ripple effect
    document.addEventListener('click', createRippleEffect);
    return () => document.removeEventListener('click', createRippleEffect);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/college/:id" element={<CollegeDetails />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;