import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    program: '',
    goals: '',
    motivation: '',
    availability: '',
    agreeTerms: false,
    agreeMarketing: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <>
      <Navbar />
      
      {/* Application Form */}
      <section className="application-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-header text-center">
                <h1 className="form-title">Apply for Our Program</h1>
                <p className="form-subtitle">Take the first step towards your dream career in tech</p>
              </div>
              
              <div className="application-card">
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="form-section">
                    <h3 className="section-title">Personal Information</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                          />
                          <label htmlFor="firstName">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                          />
                          <label htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                          />
                          <label htmlFor="email">Email Address</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                          />
                          <label htmlFor="phone">Phone Number</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Educational Background */}
                  <div className="form-section">
                    <h3 className="section-title">Educational Background</h3>
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your highest education</option>
                        <option value="high-school">High School</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="phd">PhD</option>
                        <option value="other">Other</option>
                      </select>
                      <label htmlFor="education">Highest Education</label>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="form-section">
                    <h3 className="section-title">Experience</h3>
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="experienced">Experienced (3-5 years)</option>
                        <option value="expert">Expert (5+ years)</option>
                      </select>
                      <label htmlFor="experience">Programming Experience</label>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="form-section">
                    <h3 className="section-title">Program Selection</h3>
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a program</option>
                        <option value="dsa-bootcamp">DSA Bootcamp</option>
                        <option value="system-design">System Design Mastery</option>
                        <option value="full-stack">Full Stack Development</option>
                        <option value="interview-prep">Interview Preparation</option>
                        <option value="custom">Custom Program</option>
                      </select>
                      <label htmlFor="program">Preferred Program</label>
                    </div>
                  </div>

                  {/* Goals and Motivation */}
                  <div className="form-section">
                    <h3 className="section-title">Goals & Motivation</h3>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder="What are your career goals?"
                        style={{ height: '120px' }}
                        required
                      ></textarea>
                      <label htmlFor="goals">Career Goals</label>
                    </div>
                    
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        placeholder="Why do you want to join this program?"
                        style={{ height: '120px' }}
                        required
                      ></textarea>
                      <label htmlFor="motivation">Motivation</label>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="form-section">
                    <h3 className="section-title">Availability</h3>
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your availability</option>
                        <option value="full-time">Full-time (40+ hours/week)</option>
                        <option value="part-time">Part-time (20-30 hours/week)</option>
                        <option value="weekends">Weekends only</option>
                        <option value="flexible">Flexible schedule</option>
                      </select>
                      <label htmlFor="availability">Time Commitment</label>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="form-section">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="agreeTerms">
                        I agree to the <Link to="/terms">Terms and Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                      </label>
                    </div>
                    
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="agreeMarketing"
                        name="agreeMarketing"
                        checked={formData.agreeMarketing}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="agreeMarketing">
                        I agree to receive marketing communications and updates about the program
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg px-5">
                      Submit Application
                    </button>
                    <p className="mt-3 text-muted">
                      <small>We'll review your application and get back to you within 2-3 business days.</small>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Apply;