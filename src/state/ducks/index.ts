import { combineReducers } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import apiCaller from '../utils/apiCaller';
import studentReducer from './student/reducers';
import studentSaga from './student/sagas';
import { Action, PayloadAction, TypeConstant, EmptyAction } from 'typesafe-actions';
import { IStudentState } from './student/types';

export interface IApplicationState {
  student: IStudentState;
}

export const rootReducer = combineReducers({
  student: studentReducer,
});

export interface IMetaAction extends EmptyAction<TypeConstant> {}
export interface IReducerAction<TPayload> extends Action<TypeConstant>, PayloadAction<TypeConstant, TPayload> {}

export function* rootSaga() {
  yield all([studentSaga()]);
}
interface IMeta {
  method: string;
  route: string;
}
