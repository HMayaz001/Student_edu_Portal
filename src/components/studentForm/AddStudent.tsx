import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './FormValidation';
import GradeData from '../../utils/data/GradeData';
import SubjectData from '../../utils/data/SubjectData';
import * as yup from 'yup';
import { IStudent } from '../../state/ducks/student/types';

import './formStyle.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';

type IProps = {
  AddStudentData: (data: IStudent) => void;
};

const AddStudent = ({ AddStudentData }: IProps) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    let student = {
      name: data.name,
      marks: data.marks,
      subject: data.subject.value,
      grade: data.grads.value,
      date: moment().toISOString(),
    };
    return AddStudentData(student);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <Controller render={({ field }) => <Input {...field} />} name='name' control={control} defaultValue='' rules={{}} />
      <label>Marks</label>
      <Controller render={({ field }) => <Input {...field} />} name='marks' control={control} defaultValue='' />

      <label>Subject</label>
      <Controller
        name='subject'
        render={({ field }) => <Select {...field} options={SubjectData} />}
        control={control}
        defaultValue=''
      />

      <label>Grads</label>
      <Controller
        name='grads'
        render={({ field }) => <Select {...field} options={GradeData} />}
        control={control}
        defaultValue=''
      />

      <Button variant='contained' color='success' type='submit'>
        Add
      </Button>
    </form>
  );
};

export default AddStudent;
