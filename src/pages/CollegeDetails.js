import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/college-details.css';

const CollegeDetails = () => {
  const { id } = useParams();

  const colleges = [
    {
      id: 1,
      name: 'IIT Delhi',
      location: 'New Delhi, India',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop',
      ranking: '#1 NIRF Engineering',
      established: '1961',
      category: 'Premier IIT',
      fees: { btech: '₹2.5L per year', mtech: '₹2.8L per year', phd: '₹1.2L per year' },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electrical', 'Mechanical', 'Civil'],
      admissionProcess: {
        exam: 'JEE Advanced',
        cutoff: 'Top 250 ranks',
        seats: '1,138 total seats',
        process: 'JEE Advanced → JoSAA Counselling → Document Verification'
      },
      facilities: ['World-class labs', 'Research centers', 'Industry partnerships', 'Placement cell'],
      placement: {
        average: '₹18.5L',
        highest: '₹2.1Cr',
        companies: 'Google, Microsoft, Amazon, Goldman Sachs',
        percentage: '95%'
      },
      highlights: ['Top Research Output', 'International Collaborations', 'Alumni Network']
    },
    {
      id: 2,
      name: 'IIT Bombay',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=300&fit=crop',
      ranking: '#2 NIRF Engineering',
      established: '1958',
      category: 'Premier IIT',
      fees: { btech: '₹2.3L per year', mtech: '₹2.6L per year', phd: '₹1.1L per year' },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electronics', 'Chemical', 'Aerospace'],
      admissionProcess: {
        exam: 'JEE Advanced',
        cutoff: 'Top 200 ranks',
        seats: '1,234 total seats',
        process: 'JEE Advanced → JoSAA Counselling → Seat Allocation'
      },
      facilities: ['Innovation labs', 'Incubation center', 'International collaborations', 'Alumni network'],
      placement: {
        average: '₹19.2L',
        highest: '₹2.5Cr',
        companies: 'Apple, Facebook, Tesla, JP Morgan',
        percentage: '97%'
      },
      highlights: ['Startup Ecosystem', 'Industry Connect', 'Global Rankings']
    },
    {
      id: 3,
      name: 'BITS Pilani',
      location: 'Pilani, Rajasthan',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop',
      ranking: '#8 NIRF Engineering',
      established: '1964',
      category: 'Private Institute',
      fees: { btech: '₹4.5L per year', mtech: '₹3.8L per year', phd: '₹2.2L per year' },
      programs: ['B.E.', 'M.E.', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electronics', 'Mechanical', 'Chemical'],
      admissionProcess: {
        exam: 'BITSAT',
        cutoff: '320+ score',
        seats: '4,200 total seats',
        process: 'BITSAT → Merit List → Online Counselling → Admission'
      },
      facilities: ['Modern campus', 'Industry interface', 'Research facilities', 'Global exposure'],
      placement: {
        average: '₹16.8L',
        highest: '₹1.8Cr',
        companies: 'Microsoft, Amazon, Flipkart, Adobe',
        percentage: '92%'
      },
      highlights: ['Flexible Curriculum', 'Industry Exposure', 'Innovation Culture']
    },
    {
      id: 4,
      name: 'IIT Madras',
      location: 'Chennai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      ranking: '#3 NIRF Engineering',
      established: '1959',
      category: 'Premier IIT',
      fees: { btech: '₹2.4L per year', mtech: '₹2.7L per year', phd: '₹1.1L per year' },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Mechanical', 'Electrical', 'Ocean Engineering'],
      admissionProcess: {
        exam: 'JEE Advanced',
        cutoff: 'Top 300 ranks',
        seats: '1,156 total seats',
        process: 'JEE Advanced → JoSAA Counselling → Admission'
      },
      facilities: ['Research park', 'Incubation cell', 'International programs', 'Industry partnerships'],
      placement: {
        average: '₹17.9L',
        highest: '₹1.9Cr',
        companies: 'Google, Microsoft, Qualcomm, Intel',
        percentage: '94%'
      },
      highlights: ['Research Excellence', 'Startup Incubation', 'Industry Partnerships']
    },
    {
      id: 5,
      name: 'NIT Trichy',
      location: 'Tiruchirappalli, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&fit=crop',
      ranking: '#9 NIRF Engineering',
      established: '1964',
      category: 'National Institute',
      fees: { btech: '₹1.8L per year', mtech: '₹2.1L per year', phd: '₹0.8L per year' },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MBA'],
      specializations: ['Computer Science', 'Electronics', 'Mechanical', 'Civil'],
      admissionProcess: {
        exam: 'JEE Main',
        cutoff: 'Top 2000 ranks',
        seats: '2,850 total seats',
        process: 'JEE Main → JoSAA Counselling → Seat Allocation'
      },
      facilities: ['Central library', 'Sports complex', 'Hostels', 'Training & placement'],
      placement: {
        average: '₹12.8L',
        highest: '₹1.2Cr',
        companies: 'TCS, Infosys, Wipro, Cognizant',
        percentage: '89%'
      },
      highlights: ['Strong Alumni Base', 'Industry Connect', 'Affordable Education']
    },
    {
      id: 6,
      name: 'IIIT Hyderabad',
      location: 'Hyderabad, Telangana',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
      ranking: '#12 NIRF Engineering',
      established: '1998',
      category: 'Research Institute',
      fees: { btech: '₹3.2L per year', mtech: '₹2.9L per year', phd: '₹1.5L per year' },
      programs: ['B.Tech', 'M.Tech', 'PhD', 'MS'],
      specializations: ['Computer Science', 'Electronics', 'Computational Biology', 'AI & ML'],
      admissionProcess: {
        exam: 'UGEE',
        cutoff: 'Top 500 ranks',
        seats: '650 total seats',
        process: 'UGEE → Interview → Merit List → Admission'
      },
      facilities: ['Research labs', 'Innovation hub', 'Industry collaborations', 'International exchange'],
      placement: {
        average: '₹22.5L',
        highest: '₹2.8Cr',
        companies: 'Google, Facebook, Amazon, Microsoft',
        percentage: '98%'
      },
      highlights: ['Research Focus', 'Industry Partnerships', 'Innovation Hub']
    }
  ];

  const college = colleges.find(c => c.id === parseInt(id));

  if (!college) {
    return (
      <>
        <Navbar />
        <div className="container py-5">
          <h2>College not found</h2>
          <Link to="/counselling" className="btn btn-primary">Back to Colleges</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="college-details-page">
        <div className="college-hero">
          <img src={college.image} alt={college.name} className="hero-bg" />
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <div className="college-category">{college.category}</div>
                <h1>{college.name}</h1>
                <p><i className="bi bi-geo-alt"></i> {college.location}</p>
                <div className="hero-badges">
                  <span className="badge-item">
                    <i className="bi bi-trophy"></i> {college.ranking}
                  </span>
                  <span className="badge-item">
                    <i className="bi bi-calendar"></i> Est. {college.established}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="back-link mb-4">
            <Link to="/counselling" className="btn btn-outline-primary">
              <i className="bi bi-arrow-left"></i> Back to Colleges
            </Link>
          </div>

          <div className="highlights-section mb-5">
            <div className="row">
              {college.highlights.map((highlight, idx) => (
                <div key={idx} className="col-md-4 mb-3">
                  <div className="highlight-card">
                    <i className="bi bi-star-fill"></i>
                    <span>{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="details-grid">
            <div className="detail-section">
              <div className="section-header">
                <i className="bi bi-mortarboard"></i>
                <h3>Programs & Specializations</h3>
              </div>
              <div className="programs-grid">
                {college.programs.map((program, idx) => (
                  <div key={idx} className="program-card">{program}</div>
                ))}
              </div>
              <div className="specializations">
                <h5>Specializations Available:</h5>
                <p>{college.specializations.join(', ')}</p>
              </div>
            </div>

            <div className="detail-section">
              <div className="section-header">
                <i className="bi bi-currency-rupee"></i>
                <h3>Fee Structure</h3>
              </div>
              <div className="fees-cards">
                <div className="fee-card">
                  <div className="fee-icon"><i className="bi bi-book"></i></div>
                  <div className="fee-info">
                    <span className="program">B.Tech</span>
                    <span className="amount">{college.fees.btech}</span>
                  </div>
                </div>
                <div className="fee-card">
                  <div className="fee-icon"><i className="bi bi-mortarboard"></i></div>
                  <div className="fee-info">
                    <span className="program">M.Tech</span>
                    <span className="amount">{college.fees.mtech}</span>
                  </div>
                </div>
                <div className="fee-card">
                  <div className="fee-icon"><i className="bi bi-award"></i></div>
                  <div className="fee-info">
                    <span className="program">PhD</span>
                    <span className="amount">{college.fees.phd}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <div className="section-header">
                <i className="bi bi-clipboard-check"></i>
                <h3>Admission Process</h3>
              </div>
              <div className="admission-steps">
                <div className="step-item">
                  <div className="step-icon"><i className="bi bi-pencil-square"></i></div>
                  <div className="step-content">
                    <strong>Entrance Exam</strong>
                    <span>{college.admissionProcess.exam}</span>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-icon"><i className="bi bi-graph-up"></i></div>
                  <div className="step-content">
                    <strong>Cutoff Range</strong>
                    <span>{college.admissionProcess.cutoff}</span>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-icon"><i className="bi bi-people"></i></div>
                  <div className="step-content">
                    <strong>Total Seats</strong>
                    <span>{college.admissionProcess.seats}</span>
                  </div>
                </div>
              </div>
              <div className="process-flow">
                <h5>Process Flow:</h5>
                <p>{college.admissionProcess.process}</p>
              </div>
            </div>

            <div className="detail-section">
              <div className="section-header">
                <i className="bi bi-briefcase"></i>
                <h3>Placement Statistics</h3>
              </div>
              <div className="placement-stats">
                <div className="stat-card average">
                  <div className="stat-icon"><i className="bi bi-bar-chart"></i></div>
                  <div className="stat-info">
                    <span className="value">{college.placement.average}</span>
                    <span className="label">Average Package</span>
                  </div>
                </div>
                <div className="stat-card highest">
                  <div className="stat-icon"><i className="bi bi-trophy"></i></div>
                  <div className="stat-info">
                    <span className="value">{college.placement.highest}</span>
                    <span className="label">Highest Package</span>
                  </div>
                </div>
                <div className="stat-card percentage">
                  <div className="stat-icon"><i className="bi bi-percent"></i></div>
                  <div className="stat-info">
                    <span className="value">{college.placement.percentage}</span>
                    <span className="label">Placement Rate</span>
                  </div>
                </div>
              </div>
              <div className="recruiters">
                <h5><i className="bi bi-building"></i> Top Recruiters</h5>
                <p>{college.placement.companies}</p>
              </div>
            </div>

            <div className="detail-section">
              <div className="section-header">
                <i className="bi bi-gear"></i>
                <h3>Facilities & Infrastructure</h3>
              </div>
              <div className="facilities-grid">
                {college.facilities.map((facility, idx) => (
                  <div key={idx} className="facility-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="action-section">
            <div className="row">
              <div className="col-md-6 mb-3">
                <button className="btn btn-primary btn-lg w-100">
                  <i className="bi bi-download"></i>
                  Download Brochure
                </button>
              </div>
              <div className="col-md-6 mb-3">
                <button className="btn btn-outline-primary btn-lg w-100">
                  <i className="bi bi-arrow-right-circle"></i>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CollegeDetails;