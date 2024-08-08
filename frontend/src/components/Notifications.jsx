import React, { useState } from 'react';
import './Notifications.css';
import { FaBell } from 'react-icons/fa';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    'Welcome to Degree Audit!',
    'You have 2 pending degree audit.',
    'You have a meeting with the advisor at 10:30 pm',
    'You are yet to do degree auditing',
  ]);

  const [isVisible, setIsVisible] = useState(true);

  const handleClearNotifications = () => {
    setNotifications([]);
    setIsVisible(false);
  };

  return (

    <div className="main-content">
    <div className="notifications-container">
      <div className="header">
        <h2 className="title">Notifications</h2>
        <FaBell size={30} color="#ff6b6b" />
      </div>
      <div className="notifications-list">
        {isVisible && notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="notification">
              {notification}
            </div>
          ))
        ) : (
          <div className="no-notifications">No notifications</div>
        )}
      </div>
      <button className="clear-button" onClick={handleClearNotifications}>
        Clear All
      </button>
    </div>
    </div>
  );
};

export default Notifications;
