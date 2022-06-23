import { IReducerAction } from "..";

export interface IStudentState {
  readonly list: IStudentRaw[];
  readonly loading: boolean;
  readonly errors: [];
}
export type ApiResponse = Record<string, any>;
export interface IStudentRaw extends ApiResponse {
  name: string;
  marks: string;
  subject: number;
  grade: string;
  date: string;
}

export const StudentActionTypes = {
  FETCH_STUDENTS: "students/FETCH_STUDENTS",
};

export interface IDispatchToStudents {
  fetchStudents: () => IReducerAction<IStudentRaw>;
}
