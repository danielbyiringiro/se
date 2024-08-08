import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Settings.css';

const Settings = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { name, email, password };
    onUpdate(updatedUser);
    alert('Profile updated successfully!');
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (

    <div className="main-content">
    <div className="settings">
      <h2 className="heading">Update Profile</h2>
      <div className="icon-container">
        <label htmlFor="profilePicInput">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
            />
          ) : (
            <FaUserCircle size={80} color="#6f2b2b" />
          )}
        </label>
        <input
          type="file"
          id="profilePicInput"
          style={{ display: 'none' }}
          onChange={handleProfilePicChange}
        />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Save Changes
        </button>
      </form>
    </div>
    </div>
  );
};

export default Settings;
