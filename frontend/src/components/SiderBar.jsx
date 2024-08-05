// src/Sidebar.js
import React from 'react';
import './SideBar.css';
import { FaTachometerAlt, FaUpload, FaClipboardList, FaChartLine, FaCalendarAlt, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        DEGREE AUDIT
      </div>
      <ul className="sidebar-menu">
        <li><Link className='custom-link' to = '/dashboard'><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link className='custom-link' to = '/transcript'><FaUpload /> Upload Transcript</Link></li>
        <li><FaClipboardList /> My Degree Audit</li>
        <li><FaChartLine /> Progress Report</li>
        <li> <Link className='custom-link' to = '/appointment'><FaCalendarAlt /> Schedule Appointment</Link></li>
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
