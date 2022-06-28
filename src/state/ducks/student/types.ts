import { IReducerAction } from '..';

export interface IStudentState {
  data: any;
  list: IStudent[];
}
export type ApiResponse = Record<string, any>;
export interface IStudent extends ApiResponse {
  name: string;
  marks: string;
  subject: number;
  grade: string;
  date: string;
}

export const StudentActionTypes = {
  ADD_STUDENT: 'students/ADD_STUDENT',
  FETCH_STUDENTS: 'students/FETCH_STUDENTS',
};

export interface IDispatchToStudents {
  fetchStudents: () => IReducerAction<IStudent>;
}
