import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TypewriterTitle from './TypewriterTitle';

export default () => 
{

  const [formData, setFormData] = useState({
    email: '',
    year: '',
    password: '',
    confirm: '',
    name: '',
    major: 'select'
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

    if(!formData.name)
    {
      newErrors.name = "Please enter your name";
    }

    if(!formData.email)
    {
      newErrors.email = "Please enter your email";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
    {
      newErrors.email = 'Please enter a valid email address.';
      console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    }
    else if (!formData.email.endsWith("ashesi.edu.gh"))
    {
      newErrors.email = 'Please use your Ashesi email address.';
    }
    else {
      try {
        const response = await fetch('http://13.51.206.149/Degree_audit/backend/actions/check_email.php', {
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

    if (!formData.year)
    {
      newErrors.year = "Please enter your year group";
    }
    else if(formData.year.length < 4)
    {
      newErrors.year = "Year Group can not be less than 4 numbers"
    }

    if (!formData.password)
    {
      newErrors.password = "Please enter your password";
    }

    if (!formData.confirm)
    {
      newErrors.confirm = "Please confirm your password";
    }
    if (formData.major === 'select')
    {
      newErrors.major = "Please select your major"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try 
    {
      const response = await fetch('http://13.51.206.149/Degree_audit/backend/actions/register.php', 
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
        navigate('/se/auth');
      } 
      else 
      {
        console.log(`message from the server: ${data.message}`)
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
          <h1 className='text-4xl font-bold'>WELCOME TO <span className='text-red-500'>ASHESI'S DEGREE PORTAL!</span></h1>
          <h2 className="font-semibold text-3xl text-center text-white-700"><TypewriterTitle /></h2>
        </div>
        <div className="register-box">
          <h2>Register Now!</h2>
          <form onSubmit={handleSubmit}>
          <input 
              type="text" 
              placeholder="Name" 
              name="name" 
              id="name"
              value={formData.name} 
              onChange={handleChange}
              className={`text-black ${errors.name ? 'input-error shake' : ''}`}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
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
              type="number" 
              placeholder="Year Group" 
              name="year" 
              id="student_id"
              value={formData.year} 
              onChange={handleChange}
              className={`text-black ${errors.year ? 'input-error shake' : ''}`}
            />
            {errors.year && <div className="error-message">{errors.year}</div>}
            <select
              name="major"
              id="major"
              value={formData.major}
              onChange={handleChange}
              className={`bg-red-500 border-8 rounded-md border-solid text-white mt-2 mb-2 ${errors.major ? 'input-error shake' : ''}`}
            >
              <option disabled value="select">Major</option>
              <option value="ba">Business Administration</option>
              <option value="cs">Computer Science</option>
              <option value="me">Mechanical Engineering</option>
              <option value="mis">Management Information Science</option>
              <option value="mec">Mechatronics Engineering</option>
              <option value="ce">Computer Engineering</option>
              <option value="eee">Electrical and Electronics Engineering</option>
            </select>
            {errors.major && <div className="error-message">{errors.major}</div>}
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
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="confirm" 
              id="confirm"
              value={formData.confirm} 
              onChange={handleChange}
              className={`text-black ${errors.confirm ? 'input-error shake' : ''}`}
            />
            {errors.confirm && <div className="error-message">{errors.confirm}</div>}
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/se/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
