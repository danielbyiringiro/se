import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../../frontend/src/pages/Login';
import About from '../../frontend/src/pages/About';
import Register from '../../frontend/src/pages/Register';
import Auth from '../../frontend/src/pages/Auth';
import Dashboard from '../../frontend/src/pages/Dashboard';
import TranscriptDashboard from '../../frontend/src/pages/Transcript_dashboard';
import AppointmentDashboard from '../../frontend/src/pages/Appointment';
import './index.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    setIsAuthenticated(loggedInStatus === 'true');
  }, []);

  return (
    <div>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/transcript"
            element={isAuthenticated ? <TranscriptDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/appointment"
            element={isAuthenticated ? <AppointmentDashboard /> : <Navigate to="/login" />}
          />

          {/* Redirect to home if no match */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
