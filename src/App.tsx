import React from 'react';
import { Button as MUIButton, Grid, Icon } from '@mui/material';
import Navbar from './components/layout/Navbar';
import StudentSummary from './components/layout/StudentSummary';
import StudentListContainer from './containers/StudentTableContainer';
import AddStudent from './components/form/AddStudent';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

import './App.css';
import Button from './components/layout/Button';

function App() {
  let navigate = useNavigate();

  const handleClick = async () => {
    navigate('/AddStudent');
  };

  return (
    <>
      <Navbar />
      <Grid container direction='row' justifyContent='space-around' alignItems='center'>
        <Grid item xs={6}>
          Student Summary
        </Grid>
        <Button onClick={handleClick} />
      </Grid>
      <Grid container direction='row' justifyContent='space-around' alignItems='center'>
        <Grid item xs={2}>
          <StudentSummary />
        </Grid>

        <Grid item xs={2}>
          <StudentSummary />
        </Grid>

        <Grid item xs={2}>
          <StudentSummary />
        </Grid>

        <Grid item xs={2}>
          <StudentSummary />
        </Grid>
      </Grid>
      <StudentListContainer />
    </>
  );
}

export default App;
