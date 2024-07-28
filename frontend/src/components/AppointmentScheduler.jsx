import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Paper, Grid, Typography } from '@mui/material';
import SearchBar from './SearchBar'; 
import './AppointmentScheduler.css';

const advisors = [
  { id: 'ET', name: 'Emmanuel Ntow' },
  { id: 'JN', name: 'Judercio Nhauche' },
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
  const [selectedAdvisor, setSelectedAdvisor] = useState('');
  const [reason, setReason] = useState('');

  const handleAdvisorChange = (event) => {
    setSelectedAdvisor(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  const handleSubmit = () => {
    console.log('Advisor:', selectedAdvisor);
    console.log('Reason:', reason);
  };

  return (
    <div className="main-content">
      <SearchBar onSearch={handleSearch} />
      <Paper className="appointment-scheduler" elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Select Advisor</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Advisor</InputLabel>
              <Select value={selectedAdvisor} onChange={handleAdvisorChange} label="Advisor">
                {advisors.map((advisor) => (
                  <MenuItem key={advisor.id} value={advisor.name}>
                    {advisor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Choose Slot</Typography>
            {timeSlots.map((slot, index) => (
              <div key={index} className={`time-slot ${slot.slots === 'Unavailable' ? 'unavailable' : ''}`}>
                {slot.day}: {slot.slots}
              </div>
            ))}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Reason for Appointment"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={reason}
              onChange={handleReasonChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Continue
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AppointmentScheduler;
