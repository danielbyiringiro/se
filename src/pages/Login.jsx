import React, { useState } from 'react';
import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', { email, password });
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <h2>Welcome back</h2>
        <p>Please enter your details to sign in.</p>
        <div className="social-login">
          <button className="social-button apple"></button>
          <button className="social-button google">G</button>
          <button className="social-button twitter">T</button>
        </div>
        <p>OR</p>
        <form>
          <div className="input-group">
            <label>E-Mail Address</label>
            <input type="email" placeholder="Enter your email..." />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password..." />
          </div>
          <div className="remember-forgot">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="sign-in-button">Sign in</button>
        </form>
        <p>
          Don't have an account yet? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

