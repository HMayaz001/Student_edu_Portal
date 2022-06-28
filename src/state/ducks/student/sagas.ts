import { call, put, takeLatest } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import { IStudent, StudentActionTypes } from './types';
import { handleFetchStudentsAction } from './reducers';

function* handleAddStudent(data: any): Generator {
  const addStudent = (yield call(apiCaller, 'POST', 'students', data.meta.data)) as IStudent;
  console.log(addStudent);
  yield put(handleFetchStudentsAction(addStudent));
}
function* handleFetchStudents(data: any): Generator {
  const students = (yield call(apiCaller, 'GET', 'students')) as IStudent[];

  yield put(handleFetchStudentsAction(students));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.ADD_STUDENT, handleAddStudent);
  yield takeLatest(StudentActionTypes.FETCH_STUDENTS, handleFetchStudents);
}

export default studentSaga;
