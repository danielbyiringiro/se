import React from 'react';
import Sidebar from '../components/SiderBar';
import TranscriptManagement from '../components/TranscriptManagement';
import './Dashboard.css';

const ManageTranscript =()=>{
  return (
    <div className="dashboard">
      <Sidebar />
      <TranscriptManagement/>
    </div>
  );
}

export default ManageTranscript;