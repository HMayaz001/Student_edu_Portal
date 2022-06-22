
import { combineReducers } from "@reduxjs/toolkit";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import apiCaller from "../utils/apiCaller";
import studentReducer from "./student/reducers";
import studentSaga from "./student/sagas";

export const rootReducer = combineReducers({
	student: studentReducer
});

export function* rootSaga() {
	yield all([studentSaga()]); 
}
