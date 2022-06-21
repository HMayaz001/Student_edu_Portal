import { all, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import Api from './path/to/api';

export function* fetchData(action) {
	try {
	  const data = yield call(Api.fetchUser, action.payload.url)
	  yield put({ type: 'FETCH_SUCCEEDED', data })
	} catch (error) {
	  yield put({ type: 'FETCH_FAILED', error })
	}
  }


