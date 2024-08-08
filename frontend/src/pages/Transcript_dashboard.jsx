import React from 'react';
import Sidebar from '../components/SiderBar';
import Upload from '../components/Upload';
import './Dashboard.css';

const dashboard =()=>{
  return (
    <div className="dashboard">
      <Sidebar />
      <Upload/>
    </div>
  );
}

export default dashboard;
