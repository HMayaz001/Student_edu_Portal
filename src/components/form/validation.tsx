import * as yup from 'yup';
export const studentFormSchema = yup
  .object()
  .shape({
    name: yup.string().required('name is required'),
    marks: yup.number().positive().integer().required('marks are required'),
    subject: yup.string().required('subject is require'),
    grade: yup.string().required('grade is reuired'),
  })
  .required();
