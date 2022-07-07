import { IReducerAction } from '..';
export interface IStudentState {
  [x: string]: any;
  list: IStudent[];
}
export interface StudentState {
  oneList: IStudent;
}
export interface IStudent {
  name: string;
  marks: number;
  subject: string;
  grade: string;
  date: string;
  _id: string;
}

export interface IStudentForm {
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
