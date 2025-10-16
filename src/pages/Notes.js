import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Notes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const notes = [
    {
      id: 1,
      title: 'Complete Arrays & Strings Guide',
      description: 'Master all array and string operations with 100+ problems and solutions',
      category: 'data-structures',
      pages: 45,
      downloads: 12500,
      rating: 4.9,
      size: '2.5 MB',
      topics: ['Two Pointers', 'Sliding Window', 'Sorting'],
      badge: 'Most Popular',
      icon: 'bi-list-ul',
      color: 'primary',
      preview: 'Arrays are fundamental data structures that store elements in contiguous memory locations. This comprehensive guide covers all essential array operations, common patterns, and interview questions with detailed explanations and code examples.',
      readTime: '15 min read'
    },
    {
      id: 2,
      title: 'Trees & Graphs Mastery',
      description: 'Complete guide to tree and graph algorithms with visual explanations',
      category: 'data-structures',
      pages: 62,
      downloads: 8900,
      rating: 4.8,
      size: '3.8 MB',
      topics: ['DFS/BFS', 'Binary Trees', 'Graph Theory'],
      badge: 'Premium',
      icon: 'bi-diagram-3',
      color: 'success',
      preview: 'Trees are hierarchical data structures with nodes connected by edges. Learn about binary trees, BSTs, AVL trees, and graph algorithms including DFS, BFS, shortest path, and minimum spanning tree algorithms.',
      readTime: '22 min read'
    },
    {
      id: 3,
      title: 'Dynamic Programming Bible',
      description: 'Master DP with patterns, examples, and step-by-step solutions',
      category: 'algorithms',
      pages: 78,
      downloads: 15200,
      rating: 4.9,
      size: '4.2 MB',
      topics: ['Memoization', 'Tabulation', 'Optimization'],
      badge: 'Expert Level',
      icon: 'bi-lightning-fill',
      color: 'warning',
      preview: 'Dynamic Programming is an algorithmic paradigm that solves complex problems by breaking them down into simpler subproblems. Master all DP patterns with 50+ solved problems.',
      readTime: '28 min read'
    },
    {
      id: 4,
      title: 'System Design Fundamentals',
      description: 'Learn to design scalable systems with real-world examples',
      category: 'system-design',
      pages: 95,
      downloads: 7800,
      rating: 4.7,
      size: '5.1 MB',
      topics: ['Scalability', 'Load Balancing', 'Databases'],
      badge: 'New',
      icon: 'bi-diagram-2-fill',
      color: 'info',
      preview: 'System design involves creating the architecture of large-scale distributed systems. Learn about scalability, reliability, and performance optimization with real-world case studies.',
      readTime: '35 min read'
    },
    {
      id: 5,
      title: 'SQL Query Optimization',
      description: 'Advanced SQL techniques and query optimization strategies',
      category: 'sql',
      pages: 38,
      downloads: 6200,
      rating: 4.6,
      size: '1.9 MB',
      topics: ['Indexing', 'Joins', 'Performance'],
      badge: 'Updated',
      icon: 'bi-database-fill',
      color: 'danger',
      preview: 'SQL optimization is crucial for database performance and scalability. Learn advanced indexing strategies, query optimization techniques, and performance tuning methods.',
      readTime: '18 min read'
    },
    {
      id: 6,
      title: 'Interview Preparation Kit',
      description: 'Complete guide with 200+ coding interview questions and solutions',
      category: 'interview',
      pages: 120,
      downloads: 18500,
      rating: 4.9,
      size: '6.8 MB',
      topics: ['Coding Problems', 'Behavioral', 'System Design'],
      badge: 'Bestseller',
      icon: 'bi-person-check-fill',
      color: 'purple',
      preview: 'Comprehensive interview preparation covering all aspects of technical interviews including coding problems, system design, and behavioral questions with detailed solutions.',
      readTime: '45 min read'
    },
    {
      id: 7,
      title: 'Machine Learning Fundamentals',
      description: 'Complete guide to ML algorithms, mathematics, and practical implementations',
      category: 'algorithms',
      pages: 156,
      downloads: 9800,
      rating: 4.8,
      size: '7.2 MB',
      topics: ['Supervised Learning', 'Neural Networks', 'Deep Learning'],
      badge: 'Trending',
      icon: 'bi-cpu-fill',
      color: 'success',
      preview: 'Master machine learning from basics to advanced topics including linear regression, decision trees, neural networks, and deep learning with practical Python examples.',
      readTime: '42 min read'
    },
    {
      id: 8,
      title: 'JavaScript Complete Reference',
      description: 'Modern JavaScript ES6+ features, async programming, and frameworks',
      category: 'data-structures',
      pages: 89,
      downloads: 14200,
      rating: 4.7,
      size: '4.1 MB',
      topics: ['ES6+', 'Async/Await', 'DOM Manipulation'],
      badge: 'Popular',
      icon: 'bi-code-square',
      color: 'warning',
      preview: 'Comprehensive JavaScript guide covering modern ES6+ syntax, promises, async/await, closures, prototypes, and popular frameworks like React and Node.js.',
      readTime: '32 min read'
    },
    {
      id: 9,
      title: 'Python Data Science Handbook',
      description: 'NumPy, Pandas, Matplotlib, and Scikit-learn for data analysis',
      category: 'algorithms',
      pages: 134,
      downloads: 11600,
      rating: 4.8,
      size: '5.9 MB',
      topics: ['NumPy', 'Pandas', 'Data Visualization'],
      badge: 'Hot',
      icon: 'bi-graph-up',
      color: 'info',
      preview: 'Essential Python libraries for data science including NumPy for numerical computing, Pandas for data manipulation, and Matplotlib for visualization.',
      readTime: '38 min read'
    },
    {
      id: 10,
      title: 'Microservices Architecture Guide',
      description: 'Design patterns, deployment strategies, and best practices',
      category: 'system-design',
      pages: 112,
      downloads: 6800,
      rating: 4.6,
      size: '4.8 MB',
      topics: ['Docker', 'Kubernetes', 'API Gateway'],
      badge: 'New Release',
      icon: 'bi-boxes',
      color: 'primary',
      preview: 'Learn to design and implement microservices architecture with Docker containers, Kubernetes orchestration, and service mesh patterns.',
      readTime: '40 min read'
    },
    {
      id: 11,
      title: 'React & Redux Mastery',
      description: 'Modern React hooks, state management, and performance optimization',
      category: 'data-structures',
      pages: 98,
      downloads: 13400,
      rating: 4.9,
      size: '4.5 MB',
      topics: ['React Hooks', 'Redux Toolkit', 'Performance'],
      badge: 'Editor\'s Choice',
      icon: 'bi-layers-fill',
      color: 'info',
      preview: 'Master modern React development with hooks, context API, Redux for state management, and performance optimization techniques.',
      readTime: '35 min read'
    },
    {
      id: 12,
      title: 'Cloud Computing Essentials',
      description: 'AWS, Azure, GCP services and cloud architecture patterns',
      category: 'system-design',
      pages: 145,
      downloads: 8900,
      rating: 4.7,
      size: '6.3 MB',
      topics: ['AWS', 'Serverless', 'DevOps'],
      badge: 'Trending',
      icon: 'bi-cloud-fill',
      color: 'success',
      preview: 'Comprehensive guide to cloud computing covering AWS, Azure, and GCP services, serverless architecture, and DevOps practices.',
      readTime: '41 min read'
    },
    {
      id: 13,
      title: 'Advanced SQL Techniques',
      description: 'Window functions, CTEs, performance tuning, and database design',
      category: 'sql',
      pages: 76,
      downloads: 10200,
      rating: 4.8,
      size: '3.2 MB',
      topics: ['Window Functions', 'CTEs', 'Query Optimization'],
      badge: 'Professional',
      icon: 'bi-database-gear',
      color: 'danger',
      preview: 'Advanced SQL concepts including window functions, common table expressions, query optimization, and database design principles.',
      readTime: '28 min read'
    },
    {
      id: 14,
      title: 'Cybersecurity Fundamentals',
      description: 'Network security, cryptography, and ethical hacking basics',
      category: 'system-design',
      pages: 108,
      downloads: 7200,
      rating: 4.5,
      size: '4.9 MB',
      topics: ['Network Security', 'Cryptography', 'Penetration Testing'],
      badge: 'Essential',
      icon: 'bi-shield-fill-check',
      color: 'danger',
      preview: 'Learn cybersecurity fundamentals including network security protocols, encryption methods, and ethical hacking techniques.',
      readTime: '39 min read'
    },
    {
      id: 15,
      title: 'Mobile App Development',
      description: 'React Native, Flutter, and native iOS/Android development',
      category: 'data-structures',
      pages: 124,
      downloads: 9600,
      rating: 4.6,
      size: '5.7 MB',
      topics: ['React Native', 'Flutter', 'Mobile UI'],
      badge: 'Complete Guide',
      icon: 'bi-phone-fill',
      color: 'primary',
      preview: 'Comprehensive mobile development guide covering React Native, Flutter, and native development for iOS and Android platforms.',
      readTime: '44 min read'
    },
    {
      id: 16,
      title: 'Blockchain & Cryptocurrency',
      description: 'Blockchain technology, smart contracts, and DeFi applications',
      category: 'algorithms',
      pages: 92,
      downloads: 5800,
      rating: 4.4,
      size: '4.1 MB',
      topics: ['Smart Contracts', 'DeFi', 'Web3'],
      badge: 'Emerging Tech',
      icon: 'bi-currency-bitcoin',
      color: 'warning',
      preview: 'Understanding blockchain technology, cryptocurrency mechanics, smart contract development, and decentralized finance applications.',
      readTime: '33 min read'
    },
    {
      id: 17,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Jenkins, Docker, Kubernetes, and automated deployment strategies',
      category: 'system-design',
      pages: 118,
      downloads: 8400,
      rating: 4.7,
      size: '5.4 MB',
      topics: ['Jenkins', 'Docker', 'CI/CD'],
      badge: 'Industry Standard',
      icon: 'bi-gear-wide-connected',
      color: 'info',
      preview: 'Master DevOps practices including continuous integration, continuous deployment, containerization, and infrastructure as code.',
      readTime: '42 min read'
    },
    {
      id: 18,
      title: 'Game Development with Unity',
      description: 'C# scripting, 2D/3D game mechanics, and publishing strategies',
      category: 'data-structures',
      pages: 156,
      downloads: 6900,
      rating: 4.5,
      size: '7.8 MB',
      topics: ['Unity Engine', 'C# Scripting', '3D Graphics'],
      badge: 'Creative',
      icon: 'bi-controller',
      color: 'purple',
      preview: 'Complete game development guide using Unity engine, C# scripting, physics systems, and game publishing on multiple platforms.',
      readTime: '48 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Notes', icon: 'bi-collection', count: notes.length },
    { id: 'data-structures', name: 'Data Structures', icon: 'bi-stack', count: notes.filter(n => n.category === 'data-structures').length },
    { id: 'algorithms', name: 'Algorithms', icon: 'bi-gear-fill', count: notes.filter(n => n.category === 'algorithms').length },
    { id: 'system-design', name: 'System Design', icon: 'bi-diagram-2-fill', count: notes.filter(n => n.category === 'system-design').length },
    { id: 'sql', name: 'SQL', icon: 'bi-database-fill', count: notes.filter(n => n.category === 'sql').length },
    { id: 'interview', name: 'Interview Prep', icon: 'bi-person-check-fill', count: notes.filter(n => n.category === 'interview').length }
  ];

  const filteredNotes = notes.filter(note => {
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         note.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="notes-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Master With Premium Notes</h1>
                <p className="hero-subtitle">Comprehensive study materials, algorithm guides, and quick reference sheets crafted by industry experts</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Study Notes</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Cheat Sheets</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100K+</span>
                    <span className="stat-label">Downloads</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <button className="btn btn-primary btn-lg">Browse All Notes</button>
                  <button className="btn btn-outline-light btn-lg">Download Sample</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="notes-showcase">
                <div className="showcase-card main-card">
                  <div className="card-header">
                    <i className="bi bi-file-text-fill"></i>
                    <span>Premium Notes</span>
                  </div>
                  <div className="card-preview">
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                    <div className="preview-line"></div>
                    <div className="preview-line medium"></div>
                  </div>
                  <div className="card-stats">
                    <span><i className="bi bi-download"></i> 12.5K</span>
                    <span><i className="bi bi-star-fill"></i> 4.9</span>
                  </div>
                </div>
                <div className="floating-notes">
                  <div className="note-bubble bubble-1">
                    <i className="bi bi-list-ul"></i>
                    <span>Arrays</span>
                  </div>
                  <div className="note-bubble bubble-2">
                    <i className="bi bi-diagram-3"></i>
                    <span>Trees</span>
                  </div>
                  <div className="note-bubble bubble-3">
                    <i className="bi bi-lightning-fill"></i>
                    <span>DP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="notes-filter py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="search-container">
                <div className="search-box">
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    placeholder="Search notes, topics, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="categories-filter mt-4">
            <div className="row g-3">
              {categories.map(category => (
                <div key={category.id} className="col-lg-2 col-md-4 col-6">
                  <button
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <i className={category.icon}></i>
                    <span>{category.name}</span>
                    <div className="category-count">{category.count}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="notes-grid py-5">
        <div className="container">
          <div className="row g-4">
            {filteredNotes.map(note => (
              <div key={note.id} className="col-lg-6">
                <div className="note-card-modern">
                  <div className="note-header">
                    <div className="note-icon-container">
                      <i className={note.icon}></i>
                    </div>
                    <div className="note-badge-container">
                      <span className={`note-badge badge-${note.color}`}>{note.badge}</span>
                    </div>
                  </div>
                  
                  <div className="note-content">
                    <h3 className="note-title">{note.title}</h3>
                    <p className="note-description">{note.description}</p>
                    
                    <div className="note-preview">
                      <p className="preview-text">{note.preview}</p>
                      <span className="read-time">{note.readTime}</span>
                    </div>
                    
                    <div className="note-topics">
                      {note.topics.map((topic, index) => (
                        <span key={index} className="topic-tag">{topic}</span>
                      ))}
                    </div>
                    
                    <div className="note-meta">
                      <div className="meta-item">
                        <i className="bi bi-file-text"></i>
                        <span>{note.pages} pages</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-download"></i>
                        <span>{note.downloads.toLocaleString()}</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-star-fill"></i>
                        <span>{note.rating}</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-hdd"></i>
                        <span>{note.size}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="note-actions">
                    <button className="btn btn-outline-primary btn-read">
                      <i className="bi bi-eye"></i>
                      Read Online
                    </button>
                    <button className="btn btn-primary btn-download">
                      <i className="bi bi-download"></i>
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Cheat Sheets */}
      <section className="cheat-sheets py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Quick Reference Cheat Sheets</h2>
            <p className="section-subtitle">Essential formulas and patterns at your fingertips</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="cheat-card">
                <div className="cheat-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <h5>Time Complexity</h5>
                <p>Big O notation reference</p>
                <div className="cheat-actions">
                  <button className="btn btn-sm btn-outline-primary">Read</button>
                  <button className="btn btn-sm btn-primary">Download</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="cheat-card">
                <div className="cheat-icon">
                  <i className="bi bi-arrow-repeat"></i>
                </div>
                <h5>Recursion Patterns</h5>
                <p>Common recursive solutions</p>
                <div className="cheat-actions">
                  <button className="btn btn-sm btn-outline-primary">Read</button>
                  <button className="btn btn-sm btn-primary">Download</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="cheat-card">
                <div className="cheat-icon">
                  <i className="bi bi-diagram-2"></i>
                </div>
                <h5>Tree Traversals</h5>
                <p>Inorder, preorder, postorder</p>
                <div className="cheat-actions">
                  <button className="btn btn-sm btn-outline-primary">Read</button>
                  <button className="btn btn-sm btn-primary">Download</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="cheat-card">
                <div className="cheat-icon">
                  <i className="bi bi-puzzle"></i>
                </div>
                <h5>DP Patterns</h5>
                <p>Dynamic programming templates</p>
                <div className="cheat-actions">
                  <button className="btn btn-sm btn-outline-primary">Read</button>
                  <button className="btn btn-sm btn-primary">Download</button>
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

export default Notes;