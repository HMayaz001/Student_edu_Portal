import { call, put, takeLatest } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import { IStudent, StudentActionTypes } from './types';
import { handleFetchStudentsAction } from './reducers';

function* handleAddStudent(data: any): Generator {
  const addStudent = (yield call(apiCaller, 'POST', 'students', data.meta.data)) as IStudent;

  yield put(handleFetchStudentsAction(addStudent));
}

function* handleFetchStudents(data: any): Generator {
  const students = (yield call(apiCaller, 'GET', 'students')) as IStudent[];

  yield put(handleFetchStudentsAction(students));
}

function* handleSingleStudent(data: any): Generator {
  const getSinglestudent = (yield call(apiCaller, 'GET', `students/${data._id}`)) as IStudent[];

  yield put(handleFetchStudentsAction(getSinglestudent));
}

function* handleEditStudents(data: any): Generator {
  const editstudents = (yield call(apiCaller, 'PUT', `students/${data._id}`), data.meta.data) as IStudent[];

  yield put(handleFetchStudentsAction(editstudents));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.ADD_STUDENT, handleAddStudent);
  yield takeLatest(StudentActionTypes.FETCH_STUDENTS, handleFetchStudents);
  yield takeLatest(StudentActionTypes.SINGLE_STUDENT, handleSingleStudent);
  yield takeLatest(StudentActionTypes.EDIT_STUDENT, handleEditStudents);
}

export default studentSaga;
