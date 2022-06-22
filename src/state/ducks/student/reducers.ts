import { createSlice } from "@reduxjs/toolkit";
import { studentData } from "../../../state/ducks/student/__tests__/__mockData__/studentData";

export const studentSlice = createSlice({
  name: "users", 
  initialState: {
    value: studentData,
  },
  reducers: {

      addData: (state, action) => {

      },

      editData: (state, action) => {

      },

      deleteData: (state, action) => {

      },
  }
})
  
export default studentSlice.reducer;
