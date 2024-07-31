import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default () => 
{

  const [formData, setFormData] = useState({
    email: '',
    studentid: '',
    password: '',
    confirm: ''
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => 
  {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    const newErrors = {};

    if(!formData.email)
    {
      newErrors.email = "Please enter your email";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
    {
      newErrors.email = 'Please enter a valid email address.';
    }
    else if (!formData.email.endsWith("ashesi.edu.gh"))
    {
      newErrors.email = 'Please use your Ashesi email address.';
    }
    else {
      try {
        const response = await fetch('http://localhost/degree_audit/backend/actions/check_email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: formData.email })
        });

        if (!response.ok) {
          throw new Error('Failed to check email');
        }

        const data = await response.json();

        if (data.status === 'error') 
        {
          newErrors.email = 'Email address is already in use.';
        }
      } catch (error) {
        console.error('Error checking email:', error.message);
        newErrors.email = 'Error checking email.';
      }
    }

    if (!formData.studentid)
    {
      newErrors.studentid = "Please enter your student id";
    }

    if (!formData.password)
    {
      newErrors.password = "Please enter your password";
    }

    if (!formData.confirm)
    {
      newErrors.confirm = "Please confirm your password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission or navigation
      navigate('/some-path'); // Use navigate to redirect if needed
    }
  }

  return (
    <div className="register-container">
      <div className="overlay">
        <div className="welcome">
          <h1>WELCOME TO ASHESI'S DEGREE PORTAL!</h1>
        </div>
        
        <div className="register-box">
          <h2>Register Now!</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
            />
            <input 
              type="number" 
              placeholder="Student ID" 
              name="studentid" 
              value={formData.studentid} 
              onChange={handleChange}
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange}
            />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="confirm" 
              value={formData.confirm} 
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </form>
          <p>
            <routes>Already have an account? <Link to="/login">Sign In</Link></routes>
          </p>
        </div>
      </div>
    </div>
  );
};
