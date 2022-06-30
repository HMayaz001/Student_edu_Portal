import React, { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Input, Button, Autocomplete, TextField } from '@mui/material';
import { studentFormSchema } from './validation';
import GradeData from '../../utils/data/GradeData';
import SubjectData from '../../utils/data/SubjectData';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IStudent, IStudentForm } from '../../state/ducks/student/types';
import './formStyle.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type IProps = {
  AddStudentData: (data: IStudentForm) => void;
};

const AddStudent = ({ AddStudentData }: IProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IStudentForm>({
    resolver: yupResolver(studentFormSchema),
  });
  const navigate = useNavigate();

  const submitHandler: SubmitHandler<IStudentForm> = (data) => {
    let student = {
      ...data,
      date: moment().toISOString(),
    };
    AddStudentData(student);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <label>Name</label>
      <Controller render={({ field }) => <Input {...field} />} name='name' control={control} />
      <p>{errors.name?.message}</p>
      <label>Marks</label>
      <Controller render={({ field }) => <Input {...field} />} name='marks' control={control} />
      <p>{errors.marks?.message}</p>
      <label>Subject</label>

      <Controller
        render={({ field }) => (
          <Autocomplete
            {...field}
            id='subject'
            options={SubjectData}
            getOptionLabel={(option) => option.label}
            onChange={(e, newValue: any) => {
              field.onChange(newValue.value);
            }}
            renderInput={(params: any) => <TextField {...params} label='Subject' />}
          />
        )}
        name='subject'
        control={control}
      />

      <p>{errors.subject?.message}</p>

      <label>Grade</label>
      <Controller
        render={({ field }) => (
          <Autocomplete
            {...field}
            id='grade'
            options={GradeData}
            getOptionLabel={(option) => option.label}
            onChange={(e, newValue: any) => {
              field.onChange(newValue.value);
            }}
            renderInput={(params: any) => <TextField {...params} label='Grade' />}
          />
        )}
        name='grade'
        control={control}
      />

      <p>{errors.grade?.message}</p>

      <Button variant='contained' color='success' type='submit'>
        Add Record
      </Button>
    </form>
  );
};

export default AddStudent;
