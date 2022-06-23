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

function* handleFetchStudents(): Generator {
  console.log("my saga called");
  const students = yield call(apiCaller, "GET", "students");
  yield put(handleFetchStudentsAction(students));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.FETCH_STUDENTS, handleFetchStudents);
}

export default studentSaga;
