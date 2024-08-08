import React from 'react';
import Notifications from '../components/Notifications';
import Sidebar from '../components/SiderBar';
import './Dashboard.css';


const userNotifications = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Notifications />
    </div>
  );
};

export default userNotifications ;
