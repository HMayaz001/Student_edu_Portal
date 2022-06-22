import { createSlice } from "@reduxjs/toolkit";
import { studentData } from "../student/__tests__/__mockData__/studentData";
import { IStudentRaw, StudentActionTypes } from "./types";

export const studentSlice = createSlice({
  name: "users", 
  initialState: [{
    id : 0,
    name: '',
    marks: '',
    subject: '',
    grade: '',
    date: '',
  }],
  reducers: {

      setData: (state = [], action) => {
        state = action.payload;
        return state;
      },

      addData: (state, action) => {
        return state;
      },

      editData: (state, action) => {
      },

      deleteData: (state, action) => {

      },
      [StudentActionTypes.ADD_DATA]: (state, action): any => {

      }
  }
})

export const {setData, addData, editData, deleteData} = studentSlice.actions;
export default studentSlice.reducer;
