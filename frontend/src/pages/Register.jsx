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
    else if(formData.studentid.length < 8)
    {
      newErrors.studentid = "Student ID can not be less than 8 characters"
    }

    if (!formData.password)
    {
      newErrors.password = "Please enter your password";
    }

    if (!formData.confirm)
    {
      newErrors.confirm = "Please confirm your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try 
    {
      const response = await fetch('http://localhost/degree_audit/backend/actions/register.php', 
      {
        method: 'POST',
        headers: 
        {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) 
      {
        throw new Error('Failed to submit form data for signup');
      }

      const data = await response.json();
      if (data.status === 'success') 
      {
        setErrors({});
        navigate('/auth');
      } 
      else 
      {
        console.log(data.message)
        setErrors({ form: 'Signup failed. Please try again.' });
      }
    } 
    catch (error) 
    {
      console.error('Error submitting form data:', error.message);
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
              id="email"
              value={formData.email} 
              onChange={handleChange}
              className={errors.email ? 'input-error shake' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
            <input 
              type="number" 
              placeholder="Student ID" 
              name="studentid" 
              id="student_id"
              value={formData.studentid} 
              onChange={handleChange}
              className={errors.studentid ? 'input-error shake' : ''}
            />
            {errors.studentid && <div className="error-message">{errors.studentid}</div>}
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              id="password"
              value={formData.password} 
              onChange={handleChange}
              className={errors.password ? 'input-error shake' : ''}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="confirm" 
              id="confirm"
              value={formData.confirm} 
              onChange={handleChange}
              className={errors.confirm ? 'input-error shake' : ''}
            />
            {errors.confirm && <div className="error-message">{errors.confirm}</div>}
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
