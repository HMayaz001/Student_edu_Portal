import { IReducerAction } from '..';

export interface IStudentState {
  readonly list: IStudent[];
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
  FETCH_STUDENTS: 'students/FETCH_STUDENTS',
};

export interface IDispatchToStudents {
  fetchStudents: () => IReducerAction<IStudent>;
}
