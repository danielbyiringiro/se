
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="stats">
        <div className="stat-item">
          <div className="stat-title">Progress Report</div>
          <div className="stat-value">63%</div>
        </div>
        <div className="stat-item">
          <div className="stat-title">Credits</div>
          <div className="stat-value">22/33.5</div>
        </div>
        <div className="stat-item">
          <div className="stat-title">Courses Completed</div>
          <div className="stat-value">14</div>
        </div>
      </div>
      <div className="courses">
        COURSES TO TAKE NEXT SEMESTER
      </div>
    </div>
  );
};

export default MainContent;
