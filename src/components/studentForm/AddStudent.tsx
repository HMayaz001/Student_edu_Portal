import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Input as AntdInput } from 'antd';
import { fetchStudentData } from '../../state/ducks/student/actions';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './FormValidation';
import GradeData from '../../utils/data/GradeData';
import SubjectData from '../../utils/data/SubjectData';
import * as yup from 'yup';

import './formStyle.css';

const AddForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => fetchStudentData(data);

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
      <Controller name='Checkbox' control={control} render={({ field }) => <Checkbox {...field} />} />

      <label>Grads</label>
      <Controller
        name='grads'
        render={({ field }) => <Select {...field} options={GradeData} />}
        control={control}
        defaultValue=''
      />

      <Button variant='contained' color='success'>
        Add
      </Button>
    </form>
  );
};

export default AddForm;
