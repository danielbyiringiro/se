// src/App.js
import React from 'react';
import Sidebar from '../components/SiderBar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainContent from '../components/MainContent';
import UploadTranscript from '../components/UploadTranscript';
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
