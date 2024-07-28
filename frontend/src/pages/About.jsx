import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Welcome to the Degree Audit System for Ashesi University</p>
      </header>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            The Degree Audit System is designed to assist Ashesi University students in managing and tracking their academic progress efficiently. Our mission is to provide a comprehensive and user-friendly tool that simplifies degree auditing and helps students stay on track with their academic goals.
          </p>
        </div>
        <div className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Track your course enrollments and progress.</li>
            <li>View and download academic transcripts.</li>
            <li>Generate detailed reports on your academic performance.</li>
            <li>Receive notifications for upcoming deadlines and requirements.</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, please reach out to us at <a href="mailto:support@ashesi.edu.gh">support@ashesi.edu.gh</a>.</p>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Ashesi University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
