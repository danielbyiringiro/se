// src/App.js
import React from 'react';
import Sidebar from '../components/SiderBar';
import MainContent from '../components/MainContent';
import './Dashboard.css';

const dashboard =()=>{
  return (
    <div className="dashboard">
      <Sidebar />
      <MainContent/>
      
    </div>
  );
}

export default dashboard;
