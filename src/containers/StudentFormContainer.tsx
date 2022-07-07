import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddStudent from '../components/form/AddStudent';
import { IApplicationState } from '../state/ducks/index';
import { AddStudentData, editStudentData, singleStudentData } from '../state/ducks/student/actions';
import { StudentState } from '../state/ducks/student/types';

const StudentFormContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: StudentState = useSelector(({ student }: IApplicationState) => ({
    oneList: student.oneList,
  }));

  const dispatchToProps = {
    AddStudentData: useCallback((data: any) => dispatch(AddStudentData(data)), [dispatch]),
    singleStudentData: useCallback((data: any) => dispatch(singleStudentData(data)), [dispatch]),
    editStudentData: useCallback((data: any) => dispatch(editStudentData(data)), [dispatch]),
  };

  return <AddStudent {...stateToProps} {...dispatchToProps} />;
};

export default StudentFormContainer;
