import { action } from "typesafe-actions";
import { IStudentRaw, StudentActionTypes } from "./types";

export const fetchStudentData = () =>
  action(StudentActionTypes.FETCH_STUDENTS, [], {
    method: "get",
    route: "/posts",
  });
