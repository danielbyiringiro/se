import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default () => 
{

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    if (!formData.password)
    {
      newErrors.password = "Please enter your password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try 
    {
      const response = await fetch('http://13.51.206.149/Degree_audit/backend/actions/login.php', 
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
        throw new Error('Failed to submit form data for login');
      }

      const data = await response.json();
      if (data.status === 'success') 
      {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('year', data.user_data['YEAR']);
        sessionStorage.setItem('id', data.user_data['ID']);
        sessionStorage.setItem('email', data.user_data['EMAIL']);
        sessionStorage.setItem('name', data.user_data['NAME']);
        sessionStorage.setItem('major', data.user_data['MAJOR']);
        navigate("/se")
      } 
      else 
      {
        newErrors.password = data.message;
        setErrors(newErrors);
        console.log(data.message)
      }
    } 
    catch (error) 
    {
      newErrors.password = data.message;
      setErrors(newErrors);
      console.log(data.message)
      console.error('Error submitting form data:', error.message);
    }
  }


  return (
    <div className="register-container">
      <div className="overlay">
        <div className="welcome">
          <h1 className='text-4xl font-bold'>Login Portal</h1>
        </div>
        
        <div className="register-box">
          <h2 className=''>Login Now!</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Email" 
              name="email" 
              id="email"
              value={formData.email} 
              onChange={handleChange}
              className={`text-black ${errors.email ? 'input-error shake' : ''}`}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              id="password"
              value={formData.password} 
              onChange={handleChange}
              className={`text-black ${errors.password ? 'input-error shake' : ''}`}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
            <button type="submit">Login</button>
            <p>
            Do not have an account? <Link to="/se/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
