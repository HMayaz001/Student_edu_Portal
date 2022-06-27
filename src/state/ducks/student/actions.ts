import { action } from 'typesafe-actions';
import { IStudent, StudentActionTypes } from './types';

export const fetchStudentData = () =>
  action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: 'get',
    route: '/StudentForm',
  });
