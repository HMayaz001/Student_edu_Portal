import * as yup from 'yup';
export const studentFormSchema = yup
  .object({
    name: yup.string().required(),
    marks: yup.number().positive().integer().required(),
    sunject: yup.string().required(),
    subject: yup.string().required(),
    grade: yup.string().required(),
  })
  .required();
