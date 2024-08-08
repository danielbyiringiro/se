import React, { useEffect, useState } from 'react';
import './MainContent.css';

const MainContent = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completedCredits, setCompletedCredits] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://13.51.206.149/Degree_audit/backend/actions/return_courses.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: sessionStorage.getItem("id") })
        });
        console.log(sessionStorage.getItem("id"))

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        if (data.error) {
          throw new Error(data.error);
        }
        const totalCredits = data.courses.reduce((sum, course) => sum + course.UNITS, 0);
        const totalRequiredCredits = 33.5; // Assuming this is the total required credits
        
        setCompletedCredits(totalCredits);
        setCompletionRate(((totalCredits / totalRequiredCredits) * 100).toFixed(2));
        setCourses(data.courses);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main-content max-h-screen">
      <div className="stats">
        <div className="stat-item">
          <div className="stat-title">Progress Report</div>
          <div className="stat-value">{completionRate}%</div>
        </div>
        <div className="stat-item">
          <div className="stat-title">Credits</div>
          <div className="stat-value">{completedCredits}/33.5</div>
        </div>
        <div className="stat-item whitespace-nowrap w-auto">
          <div className="stat-title">Courses Completed</div>
          <div className="stat-value">{courses.length}</div>
        </div>

        <div className="stat-item">
          <div className="stat-title">Required</div>
          <div className="stat-value">34.5</div>
        </div>
      </div>
      <div className='flex justify-between gap-4'>
        <h1 className='text-red-500 font-semibold'>{sessionStorage.getItem("name")}</h1>
        <h1 className='text-red-500 font-semibold'>{sessionStorage.getItem("year")}</h1>
        <h1 className='text-red-500 font-semibold'>Computer Science</h1>
      </div>
      <div className="courses">
        COURSES TAKEN SO FAR
      </div>

      <div className="courses-next-semester max-h-96 overflow-y-auto overflow-x-hidden">
        <table className="courses-table">
          <thead>
            <tr>
              <th className="course-name">Course Name</th>
              <th className="department">Grade</th>
              <th className="credit">Credit</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.NAME}</td>
                  <td>{course.GRADE || 'Unknown'}</td>
                  <td>{course.UNITS}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No courses available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
