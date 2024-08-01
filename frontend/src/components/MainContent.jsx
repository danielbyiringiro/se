
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

      <div className="courses-next-semester">
        <h2>Courses to Take Next Semester</h2>
        <table className="courses-table">
          <thead>
            <tr>
              <th className="course-name">Course Name</th>
              <th className="department">Department</th>
              <th className="credit">Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Written and Oral Communications</td>
              <td>Humanities</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Computer Programming</td>
              <td>CSIS</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Leadership 1</td>
              <td>Humanities</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default MainContent;
