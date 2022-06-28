import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentTable from '../components/StudentTable';
import { IApplicationState } from '../state/ducks/index';
import { fetchStudentData } from '../state/ducks/student/actions';
import { IStudentState } from '../state/ducks/student/types';

const StudentListContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IStudentState = useSelector(({ student }: IApplicationState) => ({
    list: student.list,
    data: student.data,
  }));
  const dispatchToProps = {
    fetchStudentData: useCallback(() => dispatch(fetchStudentData()), [dispatch]),
  };

  return <StudentTable {...stateToProps} {...dispatchToProps} />;
};

export default StudentListContainer;
