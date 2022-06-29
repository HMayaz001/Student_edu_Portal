import { createSlice } from '@reduxjs/toolkit';
import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { IStudent, StudentActionTypes } from './types';

export const studentSlice = createSlice({
  name: 'students',
  initialState: { list: [] },
  reducers: {
    handleFetchStudentsAction: (state: any, action: any) => {
      const checkState = { ...state, list: action.payload };
      return checkState;
    },
  },
});
export const { handleFetchStudentsAction } = studentSlice.actions;
export default studentSlice.reducer;
