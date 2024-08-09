
import React from 'react';
import './SideBar.css';
import { FaUserGraduate,FaFileAlt,FaCalendarCheck, FaClipboard, FaFolder, FaTachometerAlt, FaUpload, FaClipboardList, FaChartLine, FaCalendarAlt, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';

const sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn', '');
    sessionStorage.setItem('studentid', '');
    sessionStorage.setItem('id', '');
    sessionStorage.setItem('email', '');
    navigate('/login'); 
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        DEGREE AUDIT
      </div>
      <ul className="sidebar-menu">
        <li><Link className='custom-link' to = '/dashboard'><FaTachometerAlt /> Dashboard</Link></li>
        <li><Link className='custom-link' to = '/transcript'><FaUpload /> Upload Transcript</Link></li>
        <li> <Link className='custom-link' to = '/appointment'><FaCalendarAlt /> My Appointment</Link></li>
        <li><Link className='custom-link' to = '/notification'><FaBell /> Notifications</Link></li>
        <li><Link className='custom-link' to = '/setting'><FaCog />  Settings</Link></li>
      </ul>
      <div className="sidebar-logout" onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </div>
    </div>
  );
};

export default sidebar;
