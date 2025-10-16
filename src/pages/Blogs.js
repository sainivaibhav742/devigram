import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Mastering Dynamic Programming: From Beginner to Expert',
      excerpt: 'Learn the fundamental concepts of dynamic programming with practical examples and step-by-step solutions to common problems.',
      content: 'Dynamic Programming is one of the most powerful algorithmic techniques used to solve optimization problems...',
      category: 'algorithms',
      author: 'Rahul Sharma',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
      tags: ['Dynamic Programming', 'Algorithms', 'Optimization'],
      likes: 245,
      comments: 32,
      featured: true
    },
    {
      id: 2,
      title: 'System Design Interview: Designing a Chat Application',
      excerpt: 'Complete walkthrough of designing a scalable chat application covering architecture, database design, and real-time messaging.',
      content: 'When designing a chat application at scale, we need to consider multiple factors including real-time messaging...',
      category: 'system-design',
      author: 'Priya Patel',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop',
      tags: ['System Design', 'Scalability', 'Real-time'],
      likes: 189,
      comments: 28,
      featured: true
    },
    {
      id: 3,
      title: 'Top 10 JavaScript ES6+ Features Every Developer Should Know',
      excerpt: 'Explore the most important ES6+ features that will make your JavaScript code more efficient and readable.',
      content: 'JavaScript ES6+ introduced many powerful features that revolutionized how we write JavaScript code...',
      category: 'web-development',
      author: 'Arjun Kumar',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=300&fit=crop',
      tags: ['JavaScript', 'ES6', 'Web Development'],
      likes: 312,
      comments: 45,
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning Algorithms: A Comprehensive Guide',
      excerpt: 'Understanding different ML algorithms, when to use them, and practical implementation examples with Python.',
      content: 'Machine Learning has become an essential skill for developers and data scientists...',
      category: 'machine-learning',
      author: 'Sneha Reddy',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      date: '2024-01-08',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
      tags: ['Machine Learning', 'Python', 'Data Science'],
      likes: 278,
      comments: 38,
      featured: true
    },
    {
      id: 5,
      title: 'React Performance Optimization: Best Practices',
      excerpt: 'Learn advanced techniques to optimize React applications for better performance and user experience.',
      content: 'React performance optimization is crucial for building fast and responsive web applications...',
      category: 'web-development',
      author: 'Vikram Singh',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
      tags: ['React', 'Performance', 'Optimization'],
      likes: 156,
      comments: 22,
      featured: false
    },
    {
      id: 6,
      title: 'Database Design Principles: From Normalization to NoSQL',
      excerpt: 'Master database design concepts including normalization, indexing, and when to choose SQL vs NoSQL databases.',
      content: 'Database design is a critical aspect of software development that affects performance and scalability...',
      category: 'database',
      author: 'Anita Sharma',
      authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face',
      date: '2024-01-03',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop',
      tags: ['Database', 'SQL', 'NoSQL'],
      likes: 203,
      comments: 31,
      featured: false
    },
    {
      id: 7,
      title: 'Cracking the Coding Interview: Top Strategies',
      excerpt: 'Essential tips and strategies to ace your technical interviews at top tech companies.',
      content: 'Technical interviews can be challenging, but with the right preparation and strategies...',
      category: 'career',
      author: 'Rohit Gupta',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      date: '2024-01-01',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=300&fit=crop',
      tags: ['Interview', 'Career', 'Coding'],
      likes: 421,
      comments: 67,
      featured: true
    },
    {
      id: 8,
      title: 'Cloud Computing: AWS vs Azure vs GCP Comparison',
      excerpt: 'Detailed comparison of major cloud platforms to help you choose the right one for your projects.',
      content: 'Cloud computing has revolutionized how we build and deploy applications...',
      category: 'cloud',
      author: 'Kavya Nair',
      authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop&crop=face',
      date: '2023-12-28',
      readTime: '13 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
      tags: ['Cloud', 'AWS', 'Azure', 'GCP'],
      likes: 167,
      comments: 24,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'bi-collection', count: blogPosts.length },
    { id: 'algorithms', name: 'Algorithms', icon: 'bi-gear-fill', count: blogPosts.filter(p => p.category === 'algorithms').length },
    { id: 'system-design', name: 'System Design', icon: 'bi-diagram-2-fill', count: blogPosts.filter(p => p.category === 'system-design').length },
    { id: 'web-development', name: 'Web Dev', icon: 'bi-code-slash', count: blogPosts.filter(p => p.category === 'web-development').length },
    { id: 'machine-learning', name: 'ML/AI', icon: 'bi-cpu-fill', count: blogPosts.filter(p => p.category === 'machine-learning').length },
    { id: 'database', name: 'Database', icon: 'bi-database-fill', count: blogPosts.filter(p => p.category === 'database').length },
    { id: 'career', name: 'Career', icon: 'bi-person-check-fill', count: blogPosts.filter(p => p.category === 'career').length },
    { id: 'cloud', name: 'Cloud', icon: 'bi-cloud-fill', count: blogPosts.filter(p => p.category === 'cloud').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Tech Insights & Tutorials</h1>
                <p className="hero-subtitle">Stay updated with the latest in technology, programming, and software development through our expert-written articles and tutorials</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Articles</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50K+</span>
                    <span className="stat-label">Readers</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">Weekly</span>
                    <span className="stat-label">Updates</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <button className="btn btn-primary btn-lg">Explore Articles</button>
                  <button className="btn btn-outline-light btn-lg">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-showcase">
                <div className="showcase-articles">
                  <div className="article-preview main-preview">
                    <div className="preview-image"></div>
                    <div className="preview-content">
                      <h4>Latest Tech Trends</h4>
                      <p>Exploring the future of technology</p>
                      <div className="preview-meta">
                        <span><i className="bi bi-eye"></i> 2.5K</span>
                        <span><i className="bi bi-heart"></i> 245</span>
                      </div>
                    </div>
                  </div>
                  <div className="floating-articles">
                    <div className="mini-article article-1">
                      <i className="bi bi-code-slash"></i>
                      <span>Web Dev</span>
                    </div>
                    <div className="mini-article article-2">
                      <i className="bi bi-cpu-fill"></i>
                      <span>AI/ML</span>
                    </div>
                    <div className="mini-article article-3">
                      <i className="bi bi-diagram-2-fill"></i>
                      <span>System Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle">Our most popular and trending posts</p>
          </div>
          
          <div className="row g-4">
            {featuredPosts.slice(0, 3).map(post => (
              <div key={post.id} className="col-lg-4">
                <div className="featured-card">
                  <div className="featured-image">
                    <img src={post.image} alt={post.title} />
                    <div className="featured-badge">Featured</div>
                  </div>
                  <div className="featured-content">
                    <div className="post-meta">
                      <span className="category">{post.category.replace('-', ' ')}</span>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <div className="author-info">
                        <img src={post.authorImage} alt={post.author} className="author-avatar" />
                        <div className="author-details">
                          <span className="author-name">{post.author}</span>
                          <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="post-stats">
                        <span><i className="bi bi-heart"></i> {post.likes}</span>
                        <span><i className="bi bi-chat"></i> {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="blog-filter py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="search-container">
                <div className="search-box">
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
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
                <div key={category.id} className="col-lg-3 col-md-4 col-6">
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

      {/* Blog Posts Grid */}
      <section className="blog-posts py-5">
        <div className="container">
          <div className="row g-4">
            {filteredPosts.map(post => (
              <div key={post.id} className="col-lg-6">
                <article className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <div className="image-overlay">
                      <button className="read-btn">
                        <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="category-tag">{post.category.replace('-', ' ')}</span>
                      <span className="read-time">
                        <i className="bi bi-clock"></i>
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="blog-footer">
                      <div className="author-section">
                        <img src={post.authorImage} alt={post.author} className="author-img" />
                        <div className="author-info">
                          <span className="author-name">{post.author}</span>
                          <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="engagement-stats">
                        <button className="stat-btn">
                          <i className="bi bi-heart"></i>
                          <span>{post.likes}</span>
                        </button>
                        <button className="stat-btn">
                          <i className="bi bi-chat"></i>
                          <span>{post.comments}</span>
                        </button>
                        <button className="stat-btn">
                          <i className="bi bi-share"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="newsletter-card">
                <div className="newsletter-icon">
                  <i className="bi bi-envelope-heart"></i>
                </div>
                <h3>Stay Updated with Latest Articles</h3>
                <p>Get weekly updates on new tutorials, tech insights, and programming tips delivered to your inbox</p>
                <div className="newsletter-form">
                  <div className="input-group">
                    <input type="email" placeholder="Enter your email address" />
                    <button className="btn btn-primary">Subscribe</button>
                  </div>
                </div>
                <div className="newsletter-features">
                  <div className="feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Weekly Updates</span>
                  </div>
                  <div className="feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>No Spam</span>
                  </div>
                  <div className="feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Unsubscribe Anytime</span>
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

export default Blogs;