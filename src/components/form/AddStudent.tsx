import React, { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Input, Button, Autocomplete, TextField } from '@mui/material';
import { studentFormSchema } from './validation';
import GradeData from '../../utils/data/GradeData';
import SubjectData from '../../utils/data/SubjectData';
import { yupResolver } from '@hookform/resolvers/yup';
import { IStudent, IStudentForm } from '../../state/ducks/student/types';
import './formStyle.css';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
type IProps = {
  oneList: IStudentForm;
  AddStudentData: (data: IStudentForm) => void;
  singleStudentData: (data: any) => void;
  editStudentData: (data: IStudent | IStudentForm) => void;
};

const AddStudent = ({ oneList, AddStudentData, singleStudentData, editStudentData }: IProps) => {
  const navigate = useNavigate();
  const { student_id } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IStudentForm>({
    resolver: yupResolver(studentFormSchema),
    defaultValues: oneList,
  });

  useEffect(() => {
    if (isEdit) {
      singleStudentData(student_id);
    }
  }, [isEdit]);

  useEffect(() => {
    if (student_id) {
      setIsEdit(true);
    }
  }, [student_id]);

  const SubmitHandle: SubmitHandler<IStudentForm> = (data) => {
    let student = {
      ...data,
      date: moment().toISOString(),
    };

    if (isEdit) {
      editStudentData(student);
      navigate('/');
    } else {
      AddStudentData(student);

      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandle)}>
      <label>Name</label>
      <Controller render={({ field }) => <Input {...field} />} name='name' control={control} defaultValue='Enter your name' />
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
            renderInput={(params: any) => <TextField {...params} label='Select subject' />}
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
            renderInput={(params: any) => <TextField {...params} label='Select grade' />}
          />
        )}
        name='grade'
        control={control}
      />
      <p>{errors.grade?.message}</p>
      {isEdit ? (
        <Button variant='contained' color='success' type='submit'>
          Edit Record
        </Button>
      ) : (
        <Button variant='contained' color='success' type='submit'>
          Add Record
        </Button>
      )}
    </form>
  );
};

export default AddStudent;
