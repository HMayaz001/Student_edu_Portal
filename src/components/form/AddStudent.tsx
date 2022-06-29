import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Autocomplete, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { studentFormSchema } from './validation';
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
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit: any = (data: IStudent) => {
    let student = {
      ...data,
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

      <Autocomplete
        id='subject'
        options={SubjectData}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.label}
        onChange={(e, newValue: any) => {
          setValue('subject', newValue.value);
        }}
        renderInput={(params: any) => <TextField {...params} label='Subject' />}
      />

      <label>Grads</label>
      <Autocomplete
        id='grade'
        options={GradeData}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.label}
        onChange={(e, newValue: any) => {
          setValue('grade', newValue.value);
        }}
        renderInput={(params: any) => <TextField {...params} label='Grade' />}
      />

      <Button variant='contained' color='success' type='submit'>
        Add Record
      </Button>
    </form>
  );
};

export default AddStudent;
