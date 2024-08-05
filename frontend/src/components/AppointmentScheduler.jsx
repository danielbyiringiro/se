import React, { useState } from 'react';
import './AppointmentScheduler.css'; 
const advisors = [
  { id: 'ET', name: 'Emmanuel Ntow' },
  { id: 'JN', name: 'Juderico Nhauche' },
  { id: 'VH', name: 'Vincent Hlanze' },
];

const timeSlots = [
  { day: 'Sun', slots: 'Unavailable' },
  { day: 'Mon', slots: '9:00am - 5:00pm' },
  { day: 'Tue', slots: '9:00am - 5:00pm' },
  { day: 'Wed', slots: '9:00am - 5:00pm' },
  { day: 'Thu', slots: '9:00am - 5:00pm' },
  { day: 'Fri', slots: '9:00am - 5:00pm' },
  { day: 'Sat', slots: 'Unavailable' },
];

const AppointmentScheduler = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [reason, setReason] = useState('');

  return (

    <div className='main-content'>
    <div className="appointment-scheduler">
      <div className="advisor-selection">
        <div class = "search">
            <h3>Select Advisor</h3>
            <input class= "input" type="text" placeholder="Search Advisor" />
        </div>
        <ul>
          {advisors.map(advisor => (
            <li
              key={advisor.id}
              className={selectedAdvisor === advisor.id ? 'selected' : ''}
              onClick={() => setSelectedAdvisor(advisor.id)}
            >
              <div className="advisor-icon">{advisor.id}</div>
              <div className="advisor-name">{advisor.name}</div>
            </li>
          ))}
        </ul>
        <button className="continue-button">Continue</button>
      </div>
      <div className="slot-selection">
        <h3>Choose Slot</h3>
        <div className="time-slots">
          {timeSlots.map((slot, index) => (
            <div key={index} className="time-slot">
              <span>{slot.day}</span>
              <span>{slot.slots}</span>
            </div>
          ))}
        </div>
        <div>
        <h3><i>Reason for Appointment<span class = "asterik">*</span></i></h3>
        <textarea
          placeholder="Reason for Appointment"
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
        </div>
      </div>
    </div>

    </div>
  );
};

export default AppointmentScheduler;
