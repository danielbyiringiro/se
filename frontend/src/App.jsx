import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../frontend/src/pages/Home';
import Login from '../../frontend/src/pages/Login';
import About from '../../frontend/src/pages/About';
import Register from '../../frontend/src/pages/Register';
import Dashboard from '../../frontend/src/pages/Dashboard';
import TranscriptDashboard from '../../frontend/src/pages/Transcript_dashboard';
import AppointmentDashboard from '../../frontend/src/pages/Appointment';
import TranscriptManagement from '../../frontend/src/pages/ManageTranscript';
import UserSettings from '../../frontend/src/pages/UserSettings';

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transcript" element={<TranscriptDashboard />} />
            <Route path="/appointment" element={<AppointmentDashboard />} />
            <Route path="/manage" element={<TranscriptManagement/>} />
            <Route path = "/setting" element ={<UserSettings/>}/>

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;