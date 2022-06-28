import { action } from 'typesafe-actions';
import { IStudent, StudentActionTypes } from './types';

export const fetchStudentData = (data: any) =>
  action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: 'get',
    route: '/students',
  });
