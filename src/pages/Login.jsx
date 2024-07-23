import React from 'react';
import './Register.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="register-container">
      <div className="overlay">
        <div className = "welcome">
             <h1>WELCOME TO ASHESI'S DEGREE PORTAL!</h1>
        </div>
        
        <div className="register-box">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Already have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

