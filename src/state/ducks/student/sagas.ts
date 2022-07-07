import { call, put, takeLatest } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import { IStudent, StudentActionTypes } from './types';
import { handleFetchStudentsAction, handleOneStudentAction } from './reducers';

function* handleAddStudent(data: any): Generator {
  const addStudent = (yield call(apiCaller, 'POST', 'students', data.meta.data)) as IStudent;
  yield put(handleFetchStudentsAction(addStudent));
}

function* handleFetchStudents(): Generator {
  const students = (yield call(apiCaller, 'GET', 'students')) as IStudent[];

  yield put(handleFetchStudentsAction(students));
}

function* handleOneStudent(data: any): Generator {
  const oneStudent = (yield call(apiCaller, 'GET', `students/${data.meta.data}`)) as IStudent;

  yield put(handleOneStudentAction(oneStudent));
}

function* handleEditStudents(data: any): Generator {
  const editstudents = (yield call(apiCaller, 'PUT', `students/${data.meta.meta}`), data.meta.data) as IStudent[];

  yield put(handleFetchStudentsAction(editstudents));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.ADD_STUDENT, handleAddStudent);
  yield takeLatest(StudentActionTypes.FETCH_STUDENTS, handleFetchStudents);
  yield takeLatest(StudentActionTypes.SINGLE_STUDENT, handleOneStudent);
  yield takeLatest(StudentActionTypes.EDIT_STUDENT, handleEditStudents);
}

export default studentSaga;
