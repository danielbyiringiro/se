// src/UploadTranscript.js
import React, { useState } from 'react';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';
import './UploadTranscript.css';

const UploadTranscript = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="main-content">
      <div className="upload-container">
        <h2>UPLOAD TRANSCRIPT</h2>
        <div className="upload-box">
          <FaCloudUploadAlt size={100} />
          {file ? (
            <div className="file-info">
              <span>{file.name}</span>
              <FaTimes className="remove-icon" onClick={handleRemoveFile} />
            </div>
          ) : (
            <input type="file" onChange={handleFileChange} />
          )}
        </div>
        <button className="next-button">NEXT</button>
      </div>
    </div>
  );
};

export default UploadTranscript;
