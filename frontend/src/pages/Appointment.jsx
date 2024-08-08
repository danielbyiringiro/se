import React from 'react';
import Sidebar from '../components/SiderBar';
import AppointmentScheduler from '../components/AppointmentScheduler';
import './Dashboard.css';

const Appointment =()=>{
  return (
    <div className="dashboard">
      <Sidebar />
      <AppointmentScheduler/>
    </div>
  );
}

export default Appointment;