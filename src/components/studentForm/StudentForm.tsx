import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import { Input as AntdInput } from 'antd';

import './style.css';

const StudentForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name='name'
        control={control}
        defaultValue=''
        rules={{
          required: true,
        }}
      />
      <label>Marks</label>
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name='marks'
        control={control}
        defaultValue=''
        rules={{
          required: true,
        }}
      />

      <label>Subject</label>
      <Controller
        name='subject'
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'english', label: 'English' },
              { value: 'math', label: 'Math' },
              { value: 'science', label: 'Science' },
            ]}
          />
        )}
        control={control}
        defaultValue=''
      />
      <Controller name='Checkbox' control={control} render={({ field }) => <Checkbox {...field} />} />

      <label>Grads</label>
      <Controller
        name='grads'
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'A', label: 'A' },
              { value: 'B', label: 'B' },
              { value: 'C', label: 'C' },
              { value: 'F', label: 'F' },
            ]}
          />
        )}
        control={control}
        defaultValue=''
      />
      <Controller name='Checkbox' control={control} render={({ field }) => <Checkbox {...field} />} />

      <input type='submit' />
      <input type='submit' />
    </form>
  );
};

export default StudentForm;
