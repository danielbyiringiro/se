import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

export default () => 
{

  const [formData, setFormData] = useState({
    email: '',
    studentid: '',
    password: '',
    confirm: ''
  })

  const history = useHistory();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => 
  {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {}

  return (
    <div className="register-container">
      <div className="overlay">
        <div className = "welcome">
             <h1>WELCOME TO ASHESI'S DEGREE PORTAL!</h1>
        </div>
        
        <div className="register-box">
          <h2>Register Now!</h2>
          <form>
            <input type="email" placeholder="Email" name="email" />
            <input type="number" placeholder="Student ID" name="studentid" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Confirm Password" name="confirm"/>
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

