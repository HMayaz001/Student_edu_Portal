import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentList from "../components/StudentList";
import { IApplicationState } from "../state/ducks/index";
import { fetchStudentData } from "../state/ducks/student/actions";
import { IStudentState } from "../state/ducks/student/types";

const studentContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IStudentState = useSelector(
    ({ student }: IApplicationState) => ({
      loading: student.loading,
      errors: student.errors,
      data: student.data,
    })
  );
};
