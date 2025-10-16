import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Enhanced navbar with hide/show on scroll
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Master Algorithms & Land Your Dream Job</h1>
                <p className="hero-subtitle">Join 10,000+ developers who've cracked top tech interviews with our comprehensive algorithm training program.</p>
                
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Companies</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">₹15L+</span>
                    <span className="stat-label">Avg Package</span>
                  </div>
                </div>
                
                <div className="hero-actions">
                  <Link to="/apply" className="btn btn-primary btn-lg">Start Learning</Link>
                  <Link to="/courses" className="btn btn-outline-light btn-lg">View Courses</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="code-editor">
                  <div className="editor-header">
                    <div className="editor-controls">
                      <span className="control red"></span>
                      <span className="control yellow"></span>
                      <span className="control green"></span>
                    </div>
                    <span className="editor-title">solution.py</span>
                  </div>
                  <div className="editor-content">
                    <div className="code-line">
                      <span className="line-num">1</span>
                      <span className="code">def <span className="func">twoSum</span>(nums, target):</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">2</span>
                      <span className="code">    <span className="var">hashmap</span> = {`{}`}</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">3</span>
                      <span className="code">    for i, num in enumerate(nums):</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">4</span>
                      <span className="code">        if target - num in hashmap:</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">5</span>
                      <span className="code">            return [hashmap[target - num], i]</span>
                    </div>
                    <div className="code-line">
                      <span className="line-num">6</span>
                      <span className="code">        hashmap[num] = i</span>
                    </div>
                  </div>
                </div>
                
                <div className="floating-elements">
                  <div className="float-card card-1">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Problem Solved!</span>
                  </div>
                  <div className="float-card card-2">
                    <i className="bi bi-lightning-fill"></i>
                    <span>O(n) Solution</span>
                  </div>
                  <div className="float-card card-3">
                    <i className="bi bi-trophy-fill"></i>
                    <span>Interview Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Devigram?</h2>
            <p className="section-subtitle">Everything you need to ace technical interviews and advance your career</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-book"></i>
                </div>
                <h4>75+ Premium Courses</h4>
                <p>Structured learning paths covering Arrays, Trees, Graphs, Dynamic Programming, System Design, and more with hands-on coding practice</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h4>Campus Programs</h4>
                <p>Partnership with 200+ universities offering on-campus workshops, hackathons, and placement preparation programs</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-journal-text"></i>
                </div>
                <h4>Comprehensive Notes</h4>
                <p>Detailed study materials, algorithm cheat sheets, complexity analysis guides, and interview preparation notes</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <h4>Expert Blogs</h4>
                <p>Weekly insights from FAANG engineers, industry trends, interview experiences, and career advancement tips</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-people"></i>
                </div>
                <h4>Talent Hiring</h4>
                <p>Connect with our pool of 5000+ skilled developers. 95% placement rate with average package of ₹15L+</p>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <h4>1-on-1 Mentorship</h4>
                <p>Personalized career guidance, mock interviews, resume reviews, and job referrals from industry experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Real students, real results</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="story-card">
                <div className="story-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Rahul" />
                </div>
                <h5>Rahul Sharma</h5>
                <p className="story-role">Software Engineer at Google</p>
                <p className="story-text">"Devigram's systematic approach helped me crack Google's interview. The mock interviews were exactly like the real thing!"</p>
                <div className="story-package">Package: ₹45L</div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="story-card">
                <div className="story-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" alt="Priya" />
                </div>
                <h5>Priya Patel</h5>
                <p className="story-role">Senior SDE at Amazon</p>
                <p className="story-text">"From zero coding experience to Amazon in 8 months. The structured learning path made all the difference."</p>
                <div className="story-package">Package: ₹38L</div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="story-card">
                <div className="story-avatar">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Arjun" />
                </div>
                <h5>Arjun Kumar</h5>
                <p className="story-role">Tech Lead at Microsoft</p>
                <p className="story-text">"The system design course was phenomenal. Got promoted to Tech Lead within 2 years of joining Microsoft."</p>
                <div className="story-package">Package: ₹52L</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3 className="stat-number">10,000+</h3>
                <p className="stat-label">Students Trained</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-building"></i>
                </div>
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Partner Companies</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <h3 className="stat-number">95%</h3>
                <p className="stat-label">Placement Rate</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="bi bi-currency-rupee"></i>
                </div>
                <h3 className="stat-number">₹15L+</h3>
                <p className="stat-label">Average Package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Join Devigram? Your Gateway to Tech Excellence</h2>
            <p className="section-subtitle">Transform your career with industry-leading training and guaranteed results</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h4>Fast-Track Your Career</h4>
                <p>Land your dream job 3x faster with our proven methodology. 95% of our students get placed within 6 months.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-currency-rupee"></i>
                </div>
                <h4>Guaranteed Salary Boost</h4>
                <p>Average 150% salary increase post-completion. Our alumni earn ₹15L+ at top companies like Google, Amazon, Microsoft.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4>Elite Community Access</h4>
                <p>Join 10,000+ successful developers. Network with industry leaders and get exclusive job referrals.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-card">
                <div className="advantage-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <h4>Industry-Recognized Certification</h4>
                <p>Get certificates valued by 500+ partner companies. Direct placement assistance with guaranteed interviews.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="alumni py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Alumni Are Changing the World</h2>
            <p className="section-subtitle">From students to tech leaders at global companies</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Arjun Mehta</h5>
                <p className="company">Senior SDE at Google</p>
                <p className="package">₹45L Package</p>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Priya Sharma</h5>
                <p className="company">Tech Lead at Amazon</p>
                <p className="package">₹52L Package</p>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Rohit Kumar</h5>
                <p className="company">Principal Engineer at Microsoft</p>
                <p className="package">₹65L Package</p>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="alumni-card">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Alumni" />
                <h5>Sneha Patel</h5>
                <p className="company">Staff Engineer at Netflix</p>
                <p className="package">₹70L Package</p>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="reviews py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Students Say</h2>
            <div className="google-rating">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="30" />
              <span className="rating-score">4.9</span>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <span className="review-count">(2,847 reviews)</span>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Devigram transformed my career completely. The structured approach and expert mentorship helped me land my dream job at Google. Best investment I ever made!"</p>
                <div className="reviewer">
                  <strong>Amit Sharma</strong>
                  <span>Software Engineer, Google</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"The mock interviews and personalized feedback were game-changers. I went from failing interviews to getting multiple offers. Highly recommend!"</p>
                <div className="reviewer">
                  <strong>Neha Gupta</strong>
                  <span>Senior Developer, Amazon</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="review-card">
                <div className="review-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>"Exceptional quality content and world-class mentors. The system design course alone is worth the entire program. 5 stars!"</p>
                <div className="reviewer">
                  <strong>Karan Singh</strong>
                  <span>Tech Lead, Microsoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Not Sure */}
      <section className="not-sure py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Still Not Sure If Devigram Is Right for You?</h2>
              <p className="section-subtitle">You're working hard to take your career to the next level, and you've made it far! Get a glimpse of what it's like to learn at Devigram</p>
              
              <div className="preview-options">
                <div className="row g-4 mt-4">
                  <div className="col-md-4">
                    <div className="preview-card">
                      <i className="bi bi-play-circle-fill"></i>
                      <h5>Free Demo Class</h5>
                      <p>Experience our teaching methodology</p>
                      <Link to="/apply" className="btn btn-outline-primary">Book Demo</Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="preview-card">
                      <i className="bi bi-chat-dots-fill"></i>
                      <h5>Talk to Alumni</h5>
                      <p>Hear success stories firsthand</p>
                      <Link to="/counselling" className="btn btn-outline-primary">Connect Now</Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="preview-card">
                      <i className="bi bi-calendar-check-fill"></i>
                      <h5>Free Consultation</h5>
                      <p>Get personalized career guidance</p>
                      <Link to="/counselling" className="btn btn-outline-primary">Schedule Call</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="cta-title">Ready to Transform Your Career?</h2>
              <p className="cta-subtitle">Join 10,000+ developers who've landed their dream jobs with Devigram. Start your journey today!</p>
              <div className="cta-features mb-4">
                <div className="row">
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Free Trial Available</span>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Money Back Guarantee</span>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <span>Lifetime Access</span>
                  </div>
                </div>
              </div>
              <div className="cta-actions">
                <Link to="/apply" className="btn btn-primary btn-lg me-3">Start Free Trial</Link>
                <Link to="/counselling" className="btn btn-outline-light btn-lg">Book Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="newsletter-title">Stay Updated</h3>
              <p className="newsletter-subtitle">Get weekly algorithm challenges, interview tips, and career insights</p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </form>
              <p className="newsletter-note">Join 25,000+ developers. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;