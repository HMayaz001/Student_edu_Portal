import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddStudent from '../components/form/AddStudent';
import { IApplicationState } from '../state/ducks/index';
import { AddStudentData } from '../state/ducks/student/actions';
import { IStudentState } from '../state/ducks/student/types';

const StudentFormContainer = () => {
  const dispatch = useDispatch();

  const dispatchToProps = {
    AddStudentData: useCallback((data: any) => dispatch(AddStudentData(data)), [dispatch]),
  };

  return <AddStudent {...dispatchToProps} />;
};

export default StudentFormContainer;
