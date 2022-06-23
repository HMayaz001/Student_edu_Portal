import { createSlice } from "@reduxjs/toolkit";
//import { studentData } from "../student/__tests__/__mockData__/studentData";
import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IStudentRaw, StudentActionTypes } from "./types";
//import { GET_USERS_SUCCESS } from './actions';

export const studentSlice = createSlice({
  name: "students",
  initialState: { list: [] },
  reducers: {
    handleFetchStudentsAction: (state, action) => {
      return { ...state, list: action.payload };
    },
  },
});
export const { handleFetchStudentsAction } = studentSlice.actions;
export default studentSlice.reducer;
