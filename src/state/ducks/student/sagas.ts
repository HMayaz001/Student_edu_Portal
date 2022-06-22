import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
//import { fetchStudentError, fetchStudentSuccess } from "./actions";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";
import apiCaller from "../../utils/apiCaller";
import { IStudentRaw, StudentActionTypes } from "./types";
import * as screen from "./reducers";

// function* handleFetch(action:any ): Generator {
//   console.log("my saga called")
// 	try {
// 		const res: IStudentRaw[] | any = yield call(
// 			apiCaller,
// 			action.meta.method,
// 			action.meta.route
// 		);

// 		yield put(fetchStudentSuccess(res));
// 	} catch (err) {
// 		if (err instanceof Error) {
// 			yield put(fetchStudentError(err.stack!));
// 		} else {
// 			yield put(fetchStudentError("An unknown error occured."));
// 		}
// 	}
// }



function* studentSaga() {
	yield takeLatest('users/StudentActionTypes.ADD_DATA', handleFetch);
}

export default studentSaga;
