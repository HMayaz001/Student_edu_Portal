import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
  name: 'students',
  initialState: { list: [], oneList: {} },
  reducers: {
    handleFetchStudentsAction: (state: any, action: any) => {
      const checkState = { ...state, list: action.payload };
      return checkState;
    },
    handleOneStudentAction: (state: any, action: any) => {
      const OneStudentState = { ...state, oneList: action.payload };
      return OneStudentState;
    },
  },
});

export const { handleFetchStudentsAction, handleOneStudentAction } = studentSlice.actions;
export default studentSlice.reducer;
