import { action } from 'typesafe-actions';
import { IStudent, IStudentForm, StudentActionTypes } from './types';

export const AddStudentData = (data: IStudent) =>
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

export const singleStudentData = (data: any) =>
  action(StudentActionTypes.SINGLE_STUDENT, [], {
    method: 'get',
    route: '/students',
    data,
  });

export const editStudentData = (data: IStudentForm) =>
  action(StudentActionTypes.ADD_STUDENT, [], {
    method: 'put',
    route: '/students',
    data,
  });
