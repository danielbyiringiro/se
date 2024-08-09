import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../../frontend/src/pages/Login';
import About from '../../frontend/src/pages/About';
import Register from '../../frontend/src/pages/Register';
import Auth from '../../frontend/src/pages/Auth';
import Dashboard from '../../frontend/src/pages/Dashboard';
import TranscriptDashboard from '../../frontend/src/pages/Transcript_dashboard';
import AppointmentDashboard from '../../frontend/src/pages/Appointment';
import UserNotifications from '../../frontend/src/pages/userNotifications'
import TranscriptManagement from '../../frontend/src/pages/ManageTranscript'
import UserSettings from '../../frontend/src/pages/UserSettings'
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
          <Route path="/se/login" element={<Login />} />
          <Route path="/se/about" element={<About />} />
          <Route path="/se/register" element={<Register />} />
          <Route path="/se/auth" element={<Auth />} />

          {/* Protected Routes */}
          <Route
            path="/se"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/se/login" />}
          />
          <Route
            path="/se/transcript"
            element={isAuthenticated ? <TranscriptDashboard /> : <Navigate to="/se/login" />}
          />
          <Route
            path="/se/appointment"
            element={isAuthenticated ? <AppointmentDashboard /> : <Navigate to="/se/login" />}
          />
          <Route path="/se/manage" element={isAuthenticated ? <TranscriptManagement/> : <Navigate to="/se/login" />} />
          <Route path = "/se/notification" element ={isAuthenticated ? <UserNotifications/>: <Navigate to="/se/login" />}/>
          <Route path = "/se/setting" element ={isAuthenticated ? <UserSettings/>: <Navigate to="/se/login" />}/>

          {/* Redirect to home if no match */}
          <Route path="*" element={<Navigate to="/se" />} />
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

