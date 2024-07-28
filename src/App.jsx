import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TranscriptDashboard from './pages/Transcript_dashboard'
import AppointmentDashboard  from './pages/Appointment';

import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path = "/transcript" element = {<TranscriptDashboard/>} />
            <Route path = "/appointment" element = {<AppointmentDashboard/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
