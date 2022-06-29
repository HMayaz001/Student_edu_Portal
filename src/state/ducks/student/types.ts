import { IReducerAction } from '..';

export interface IStudentState {
  list: IStudent[];
}
export type ApiResponse = Record<string, any>;
export interface IStudent extends ApiResponse {
  name: string;
  marks: number;
  subject: any;
  grade: string;
}

export const StudentActionTypes = {
  ADD_STUDENT: 'students/ADD_STUDENT',
  FETCH_STUDENTS: 'students/FETCH_STUDENTS',
};

export interface IDispatchToStudents {
  fetchStudents: () => IReducerAction<IStudent>;
}
