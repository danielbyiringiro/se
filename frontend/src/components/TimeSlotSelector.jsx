import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import './TimeSlotSelector.css';

const TimeSlotSelector = ({ timeSlots, onTimeSlotChange }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
    onTimeSlotChange(event.target.value, endTime);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
    onTimeSlotChange(startTime, event.target.value);
  };

  return (
    <div className="time-slot-selector">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Start Time</InputLabel>
            <Select value={startTime} onChange={handleStartTimeChange} label="Start Time">
              {timeSlots.map((slot, index) => (
                <MenuItem key={index} value={slot}>
                  {slot}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>End Time</InputLabel>
            <Select value={endTime} onChange={handleEndTimeChange} label="End Time">
              {timeSlots.map((slot, index) => (
                <MenuItem key={index} value={slot}>
                  {slot}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimeSlotSelector;
