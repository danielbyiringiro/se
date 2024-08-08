// src/App.js
import React from 'react';
import Sidebar from '../components/SiderBar';
import { Link } from 'react-router-dom';
import MainContent from '../components/MainContent';
import UploadTranscript from '../components/Upload';
import './Dashboard.css';

const dashboard =()=>{
  return (
    <div className="dashboard">
      <Sidebar />
      < MainContent/>
    </div>
  );
}

export default dashboard;
