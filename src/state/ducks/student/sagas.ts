import { call, put, takeLatest } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import { IStudent, StudentActionTypes } from './types';
import { handleFetchStudentsAction } from './reducers';

function* handleFetchStudents(data: any): Generator {
  const students = (yield call(apiCaller, 'GET', 'students')) as IStudent[];

  yield put(handleFetchStudentsAction(students));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.FETCH_STUDENTS, handleFetchStudents);
}

export default studentSaga;
