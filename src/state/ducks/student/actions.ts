import { action } from 'typesafe-actions';
import { IStudent, StudentActionTypes } from './types';

export const AddStudentData = (data: any) =>
  action(StudentActionTypes.ADD_STUDENT, [], {
    method: 'post',
    route: '/students',
    data,
  });
export const fetchStudentData = () =>
  action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: 'get',
    route: '/students',
  });
