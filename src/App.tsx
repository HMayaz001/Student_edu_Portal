import React from 'react';
import AddButton from './components/layout/AddButton';
import { Button, Grid, Icon } from '@mui/material';
import Navbar from './components/layout/Navbar';
import StudentSummary from './components/layout/StudentSummary';
import StudentListContainer from './containers/StudentTableContainer';
import StudentForm from './components/studentForm/StudentForm';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch, useNavigate, Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  let navigate = useNavigate();

  const handleClick = async () => {
    console.log('here');
    navigate('/StudentForm', { state: 'abcd' });
  };

  return (
    <>
      <Routes>
        <Route path='/StudentForm' element={<StudentForm />}></Route>
      </Routes>
      ;
      <Navbar />
      <Grid container direction='row' justifyContent='space-around' alignItems='center'>
        <Grid item xs={6}>
          Student Summary
        </Grid>
        <AddButton onClick={handleClick} />
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
      {/* <StudentForm />  */}
      <StudentListContainer />
    </>
  );
}

export default App;
