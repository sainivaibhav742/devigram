import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Arrays & Strings Mastery',
      description: 'Master the fundamentals with 50+ problems covering two pointers, sliding window, and string manipulation techniques.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      category: 'beginner',
      duration: '8 hours',
      lessons: '24 lessons',
      level: 'Beginner',
      rating: '4.8',
      reviews: '1.2k',
      price: 'Free',
      badge: 'Popular',
      students: '15,420',
      difficulty: 'Easy'
    },
    {
      id: 2,
      title: 'Dynamic Programming Bootcamp',
      description: 'Solve complex optimization problems using DP patterns. From basic memoization to advanced state machines.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
      category: 'advanced',
      duration: '15 hours',
      lessons: '40 lessons',
      level: 'Advanced',
      rating: '4.9',
      reviews: '890',
      price: '₹1499',
      badge: 'Trending',
      students: '8,340',
      difficulty: 'Hard'
    },
    {
      id: 3,
      title: 'System Design Interview Prep',
      description: 'Design scalable systems like Netflix, Uber, and WhatsApp. Learn from real FAANG interview experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      category: 'interview',
      duration: '20 hours',
      lessons: '50 lessons',
      level: 'Expert',
      rating: '4.9',
      reviews: '2.1k',
      price: '₹1999',
      badge: 'Hot',
      students: '12,680',
      difficulty: 'Expert'
    },
    {
      id: 4,
      title: 'Trees & Graphs Deep Dive',
      description: 'Master tree traversals, graph algorithms, and complex data structures with visual explanations.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
      category: 'intermediate',
      duration: '12 hours',
      lessons: '32 lessons',
      level: 'Intermediate',
      rating: '4.7',
      reviews: '1.5k',
      price: '₹999',
      students: '9,750',
      difficulty: 'Medium'
    },
    {
      id: 5,
      title: 'Sorting & Searching Algorithms',
      description: 'Complete guide to sorting algorithms, binary search variations, and optimization techniques.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      category: 'intermediate',
      duration: '10 hours',
      lessons: '28 lessons',
      level: 'Intermediate',
      rating: '4.8',
      reviews: '1.1k',
      price: '₹799',
      students: '11,200',
      difficulty: 'Medium'
    },
    {
      id: 6,
      title: 'Linked Lists & Pointers',
      description: 'Master pointer manipulation, linked list operations, and solve complex interview problems.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop',
      category: 'beginner',
      duration: '6 hours',
      lessons: '18 lessons',
      level: 'Beginner',
      rating: '4.6',
      reviews: '980',
      price: 'Free',
      students: '18,500',
      difficulty: 'Easy'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'danger';
      case 'Expert': return 'dark';
      default: return 'primary';
    }
  };

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Popular': return 'primary';
      case 'Trending': return 'success';
      case 'Hot': return 'danger';
      case 'New': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="courses-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Master Every Algorithm</h1>
                <p className="hero-subtitle">From basic arrays to advanced system design - comprehensive courses designed by FAANG engineers</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">75+</span>
                    <span className="stat-label">Courses</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Problems</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="course-preview-enhanced">
                  <div className="preview-header">
                    <div className="preview-controls">
                      <span className="control red"></span>
                      <span className="control yellow"></span>
                      <span className="control green"></span>
                    </div>
                    <span className="preview-title">Course Preview</span>
                  </div>
                  <div className="preview-content">
                    <div className="course-item active">
                      <i className="bi bi-play-circle-fill"></i>
                      <span>Introduction to Arrays</span>
                      <span className="duration">12:30</span>
                    </div>
                    <div className="course-item">
                      <i className="bi bi-play-circle"></i>
                      <span>Two Pointer Technique</span>
                      <span className="duration">18:45</span>
                    </div>
                    <div className="course-item">
                      <i className="bi bi-play-circle"></i>
                      <span>Sliding Window Problems</span>
                      <span className="duration">25:20</span>
                    </div>
                  </div>
                </div>
                <div className="floating-badges">
                  <div className="badge-item badge-1">
                    <i className="bi bi-trophy-fill"></i>
                    <span>Certificate</span>
                  </div>
                  <div className="badge-item badge-2">
                    <i className="bi bi-people-fill"></i>
                    <span>10K+ Students</span>
                  </div>
                  <div className="badge-item badge-3">
                    <i className="bi bi-star-fill"></i>
                    <span>4.9 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search & Filter Section */}
      <section className="courses-filter py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="search-box">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="category-filters">
                {[
                  { key: 'all', label: 'All Courses' },
                  { key: 'beginner', label: 'Beginner' },
                  { key: 'intermediate', label: 'Intermediate' },
                  { key: 'advanced', label: 'Advanced' },
                  { key: 'interview', label: 'Interview Prep' }
                ].map(category => (
                  <button
                    key={category.key}
                    className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Grid */}
      <section className="courses-grid py-5">
        <div className="container">
          <div className="courses-header mb-5">
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-subtitle">Hand-picked courses to accelerate your coding journey</p>
          </div>
          
          <div className="row g-4">
            {filteredCourses.map(course => (
              <div key={course.id} className="col-lg-4 col-md-6">
                <div className="course-card-enhanced">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-overlay">
                      <i className="bi bi-play-circle-fill"></i>
                      <span>Preview Course</span>
                    </div>
                    <div className={`course-badge badge-${getBadgeColor(course.badge)}`}>
                      {course.badge}
                    </div>
                    <div className={`difficulty-badge badge-${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </div>
                  </div>
                  
                  <div className="course-content">
                    <div className="course-header">
                      <h4 className="course-title">{course.title}</h4>
                      <div className="course-rating">
                        <i className="bi bi-star-fill"></i>
                        <span>{course.rating}</span>
                        <small>({course.reviews})</small>
                      </div>
                    </div>
                    
                    <p className="course-description">{course.description}</p>
                    
                    <div className="course-meta">
                      <div className="meta-item">
                        <i className="bi bi-clock"></i>
                        <span>{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-play-circle"></i>
                        <span>{course.lessons}</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-people"></i>
                        <span>{course.students}</span>
                      </div>
                    </div>
                    
                    <div className="course-footer">
                      <div className="course-price">
                        <span className="price">{course.price}</span>
                        {course.price !== 'Free' && <span className="original-price">₹2999</span>}
                      </div>
                      <Link to="/login" className="btn btn-primary course-btn">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="no-results">
              <i className="bi bi-search"></i>
              <h3>No courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;