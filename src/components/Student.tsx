import React, { useEffect } from "react";
import {
  IDispatchToStudents,
  IStudentRaw,
  IStudentState,
} from "../state/ducks/student/types";
import Student from "./StudentList";

type AllProps = IStudentState & IDispatchToStudents;

const StudentList: React.FC<AllProps> = ({ list, fetchStudents }: AllProps) => {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);
  return <></>;
};

export default StudentList;
