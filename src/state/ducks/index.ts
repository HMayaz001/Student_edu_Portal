
import { combineReducers } from "@reduxjs/toolkit";
import { all, fork } from "redux-saga/effects";

import studentReducer from "./student/reducers";
import studentSaga from "./student/sagas";

export const rootReducer = combineReducers({
	student: studentReducer
});

export function* rootSaga() {
	yield all([fork(studentSaga)]);
}
