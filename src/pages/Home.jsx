import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Hazzly</div>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>FAQ</li>
        </ul>
        <button className="sign-in-button">Sign In</button>
      </nav>
      <div className="main-content">
        <div className="text-content">
          <h1>Easy way to get full control of your tasks</h1>
          <p>
            A powerful tool that can help you stay organized and manage your tasks efficiently. Take control of your tasks and achieve your goals with our new interface.
          </p>
          <div className="store-buttons">
            <img src="" alt="Download on the App Store" />
            <img src="" alt="Get it on Google Play" />
          </div>
          <div className="user-count">
            <span>1.2M</span>
            <p>Users already get the app</p>
            <div className="profile-images">
              <img src="" alt="User 1" />
              <img src=" " alt="User 2" />
              <img src="" alt="User 3" />
              <div className="more-users">+</div>
            </div>
          </div>
        </div>
        <div className="image-content">
          <img src=" " alt="Manage your tasks" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;

