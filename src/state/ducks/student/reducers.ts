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
       
       
    
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
  }
})
  
export default studentSlice.reducer;
