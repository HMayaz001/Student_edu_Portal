import React from 'react';
import { Button, Grid, Icon } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Btn from './components/layout/Btn';
import StuSummary from './components/layout/StuSummary';
import StudentListContainer from './containers/StudentTableContainer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Grid container direction='row' justifyContent='space-around' alignItems='center'>
        <Grid item xs={6}>
          <Btn />
        </Grid>
        <Grid item>
          <Button
            variant='outlined'
            style={{
              borderRadius: 5,
              backgroundColor: '#ffffff',
              padding: '4px 8px',
              fontSize: '10px',
              color: '#343744',
            }}
          >
            <Icon sx={{ fontSize: 10 }}>add_circle</Icon>
            Add Data
          </Button>
        </Grid>
      </Grid>

      <Grid container direction='row' justifyContent='space-around' alignItems='center'>
        <Grid item xs={2}>
          <StuSummary />
        </Grid>

        <Grid item xs={2}>
          <StuSummary />
        </Grid>

        <Grid item xs={2}>
          <StuSummary />
        </Grid>

        <Grid item xs={2}>
          <StuSummary />
        </Grid>
      </Grid>
      <StudentListContainer />
    </>
  );
}

export default App;
