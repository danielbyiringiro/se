// src/Sidebar.js
import React from 'react';
import './SideBar.css';
import { FaTachometerAlt, FaUpload, FaClipboardList, FaChartLine, FaCalendarAlt, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        ASHESI DEGREE AUDIT PORTAL
      </div>
      <ul className="sidebar-menu">
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaUpload /> Upload Transcript</li>
        <li><FaClipboardList /> My Degree Audit</li>
        <li><FaChartLine /> Progress Report</li>
        <li><FaCalendarAlt /> Schedule Appointment</li>
        <li><FaBell /> Notifications</li>
        <li><FaCog /> Settings</li>
      </ul>
      <div className="sidebar-logout">
        <FaSignOutAlt /> Logout
      </div>
    </div>
  );
};

export default sidebar;
