import { createSlice } from "@reduxjs/toolkit";
//import { studentData } from "../student/__tests__/__mockData__/studentData";
import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IStudentRaw, StudentActionTypes } from "./types";
//import { GET_USERS_SUCCESS } from './actions';

export const studentSlice = createSlice({
  name: "students",
  initialState: [
    {
      id: 0,
      name: "",
      marks: "",
      subject: "",
      grade: "",
      date: "",
    },
  ],
  reducers: {
    handleFetchStudentsAction: (state, action) => {
      state = action.payload;
      return state;
    },

    addData: (state, action) => {
      return state;
    },

    editData: (state, action) => {},

    deleteData: (state, action) => {},
  },
});

// export const {setData, addData, editData, deleteData} = studentSlice.actions;
export const { handleFetchStudentsAction } = studentSlice.actions;
export default studentSlice.reducer;
