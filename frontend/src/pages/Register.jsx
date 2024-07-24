import React from 'react';
import './Register.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <div className="overlay">
        <div className = "welcome">
             <h1>WELCOME TO ASHESI'S DEGREE PORTAL!</h1>
        </div>
        
        <div className="register-box">
          <h2>Register Now!</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Student ID" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;