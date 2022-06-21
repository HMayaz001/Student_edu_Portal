import { all, fork } from "redux-saga/effects";

function* watchStudentRequest(): Generator {
	yield true
}


export default function* studentRootSaga() {
	yield all([fork(watchStudentRequest)]);
}