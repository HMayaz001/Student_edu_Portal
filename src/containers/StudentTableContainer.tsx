import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentTable from '../components/table/StudentTable';
import { IApplicationState } from '../state/ducks/index';
import { fetchStudentData } from '../state/ducks/student/actions';
import { IStudentState } from '../state/ducks/student/types';

const StudentListContainer = () => {
  const dispatch = useDispatch();
  debugger;
  const stateToProps: IStudentState = useSelector(({ student }: IApplicationState) => ({
    list: student.list,
  }));
  const dispatchToProps = {
    fetchStudentData: useCallback(() => dispatch(fetchStudentData()), [dispatch]),
  };

  return <StudentTable {...stateToProps} {...dispatchToProps} />;
};

export default StudentListContainer;
