import { action } from "typesafe-actions";
import { IStudentRaw, StudentActionTypes } from "./types";

export const fetchStudentData = () =>
  action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: "get",
    route: "/posts",
  });
// export const fetchStudentSuccess = (data: IStudentRaw[]) =>
//   action(StudentActionTypes.FETCH_STUDENT_ERROR, data);
// export const fetchStudentError = (message: string) =>
//   action(StudentActionTypes.FETCH_STUDENT_ERROR, message);

// export const GET_USERS_FETCH = 'GET_USERS_FETCH';
// export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

// export const getUsersFetch = () => ({
// 	type: GET_USERS_FETCH
// })
