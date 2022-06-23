import { createSlice } from "@reduxjs/toolkit";
import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IStudentRaw, StudentActionTypes } from "./types";

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
