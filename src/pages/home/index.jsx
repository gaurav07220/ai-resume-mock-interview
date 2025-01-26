import React from "react";
import { Button, Card, Row, Col } from "antd";
import { CheckCircleOutlined, FileSearchOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="home-page__hero">
        <div className="home-page__hero-content">
          <h1>Target Your Resume to a Job, Instantly</h1>
          <p>
            Our free AI tool shows you the important skills your resume is missing. Quickly tailor your resume for any job, beat applicant tracking systems (ATS), and increase your chances of getting interviews.
          </p>
          <div className="home-page__hero-buttons">
            <Button type="primary" size="large">Target Your Resume</Button>
         
          </div>
         
        </div>
        <div className="home-page__hero-image">
          <img src="https://cdn.prod.website-files.com/62775a91cc3db44c787149de/674e47399c8fe5030ba7daf4_ai-resume-builder.png" alt="Resume Analysis" />
        </div>
      </div>

      {/* ATS Explanation Section */}
      <div className="home-page__ats-section">
  <Row gutter={[24, 24]} align="middle">
    <Col xs={24} md={12}>
      <div className="ats-text-content">
        <h2>Get Past Applicant Tracking Systems (ATS)</h2>
        <p>
          Companies use ATS to filter resumes. Our AI tool ensures your resume gets past these systems by analyzing critical keywords and relevancy.
        </p>
        <Button type="primary" size="large" className="ats-button">
          Start Your Free ATS Scan
        </Button>
      </div>
    </Col>
    <Col xs={24} md={12}>
      <div className="ats-image-container">
      <img
  src="/assets/images/scan-resume.jpg"
  alt="ATS Explanation"
  style={{ maxWidth: '50%', borderRadius: '10px' }}
/>


      </div>
    </Col>
  </Row>
</div>


      {/* Compare Resume Section */}
      <div className="home-page__compare-section">
  <Row gutter={[24, 24]} align="middle" className="compare-section-row">
    <Col xs={24} md={12} className="compare-image-container">
    <img
  src="/assets/images/resume -1.jpg"
  alt="compare resume"
  style={{ maxWidth: '50%', borderRadius: '10px' }}
/>
    </Col>
    <Col xs={24} md={12}>
      <div className="compare-text-content">
        <h2>Compare Your Resume to a Job Posting</h2>
        <p>
          Instantly check if your resume contains the right skills by comparing it to job descriptions. Get a detailed relevancy score and tailored suggestions.
        </p>
        <Button type="primary" size="large" className="compare-button">
          Compare Your Resume
        </Button>
      </div>
    </Col>
  </Row>
</div>


      {/* Features Section */}
      <div className="home-page__features">
  <h2>Proven to Get You More Interviews</h2>
  <Row gutter={[32, 32]} justify="center">
    <Col xs={24} sm={12} md={8}>
      <div className="feature-card">
        <CheckCircleOutlined className="feature-icon" />
        <h3>Get Past ATS Robots</h3>
        <p>Discover critical keywords and skills to ensure your resume passes ATS filters.</p>
      </div>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <div className="feature-card">
        <FileSearchOutlined className="feature-icon" />
        <h3>Tailor Your Resume in Minutes</h3>
        <p>Know what your resume is missing and make improvements instantly.</p>
      </div>
    </Col>
    <Col xs={24} sm={12} md={8}>
      <div className="feature-card">
        <VideoCameraOutlined className="feature-icon" />
        <h3>Compare Your Resume</h3>
        <p>Get a relevancy score and actionable insights by comparing your resume to job descriptions.</p>
      </div>
    </Col>
  </Row>
  <Button type="primary" size="large" className="features-cta-button">
    Start Targeting Your Resume
  </Button>
</div>

    </div>
  );
};

export default HomePage;
