import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TranscriptDashboard from './pages/Transcript_dashboard'

import './index.css';

export default () => 
{
  return (
    <Router>
      <Routes />
    </Router>
  )
}

const Routes = () =>
{
  return (
    <>
      <Route path="/" exact><Home /> </Route>
      <Route path="/login"><Login /> </Route>
      <Route path="/register"><Register /></Route>
      <Route path="/dashboard"><Dashboard/></Route>
      <Route path = "/transcript"><TranscriptDashboard/></Route>
    </>
  )
}

