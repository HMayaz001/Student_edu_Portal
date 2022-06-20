import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import Home from "./components/pages/Home";
import EditUser from "./components/pages/EditUser";
import AddUser from "./components/pages/AddUser";
import Navbar from "./components/layout/Navbar";
import Btn from "./components/layout/Btn";
import StuSummary from "./components/layout/StuSummary";
import { Grid } from "@mui/material";
import Icon from "@mui/material/Icon";
import { border } from "@mui/system";

//import { BrowserRouter, Switch, Route } from "react-router-dom";
const initialState = (window as any).initialReduxState;
// const store = configureStore(initialState);

function App() {
  const studentList = useSelector((state) => {});
  return (
    <>
      <Navbar />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Btn />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            style={{
              borderRadius: 5,
              backgroundColor: "#ffffff",
              padding: "4px 8px",
              fontSize: "10px",
              color: "#343744",
            }}
          >
            <Icon sx={{ fontSize: 10 }}>add_circle</Icon>
            Add Data
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
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
      <Home />
      <EditUser />
      <AddUser />
    </>
  );
}

export default App;
