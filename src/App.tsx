import React from "react";
import "./App.css";
import { useSelector  } from "react-redux";
import { Button } from "@mui/material";
import Home from "./components/pages/Home";
import EditUser from "./components/pages/EditUser";
import AddUser from "./components/pages/AddUser";
import Navbar from "./components/layout/Navbar";
import Btn from "./components/layout/Btn";
import StuSummary from "./components/layout/StuSummary";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
const initialState = (window as any).initialReduxState;
// const store = configureStore(initialState);

function App() {
  return (
    <>
      
      <Navbar />
      <Btn />
      <Button variant="outlined">Outlined</Button>
      
      <StuSummary />
      <Home />
      <EditUser />
      <AddUser />
    </>
    // <Provider store={store}>
    //   <StudentPortal />
    // </Provider>

    
  );
}

export default App;
