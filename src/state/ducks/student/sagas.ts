import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import apiCaller from "../../utils/apiCaller";
import { IStudentRaw, StudentActionTypes } from "./types";
import { handleFetchStudentsAction } from "./reducers";
import { fetchStudentData } from "./actions";

// function* handleFetch(action:any ): Generator {
//   console.log("my saga called")
// 	try {
// 		const res: IStudentRaw[] | any = yield call(
// 			apiCaller,
// 			action.meta.method,
// 			action.meta.route
// 		);

function* handleFetchStudents(): Generator {
  console.log("my saga called");
  const students = yield call(apiCaller, "GET", "students");
  yield put(handleFetchStudentsAction(students));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.FETCH_STUDENTS, handleFetchStudents);
}

export default studentSaga;
