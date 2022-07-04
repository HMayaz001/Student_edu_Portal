import { IReducerAction } from '..';

export interface IStudentState {
  list: IStudent[];
}
export type ApiResponse = Record<string, any>;
export interface IStudent extends ApiResponse {
  name: string;
  marks: number;
  subject: string;
  grade: string;
}

export interface IStudentForm {
  [x: string]: any;
  name: string;
  marks: number;
  subject: { value: string; label: string };
  grade: { value: string; label: string };
}

export const StudentActionTypes = {
  ADD_STUDENT: 'students/ADD_STUDENT',
  FETCH_STUDENTS: 'students/FETCH_STUDENTS',
  SINGLE_STUDENT: 'students/SINGLE_STUDENT',
  EDIT_STUDENT: 'students/EDIT_STUDENT',
};

export interface IDispatchToStudents {
  fetchStudents: () => IReducerAction<IStudent>;
}
