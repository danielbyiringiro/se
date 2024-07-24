// src/App.js
import React from 'react';
import Sidebar from '../components/SiderBar';
import UploadTranscript from '../components/UploadTranscript';
import './Dashboard.css';

const dashboard =()=>{
  return (
    <div className="dashboard">
      <Sidebar />
      <UploadTranscript/>
    </div>
  );
}

export default dashboard;
