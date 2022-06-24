import React, { useEffect } from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import { IStudent } from '../state/ducks/student/types';
import moment from 'moment';
import StudentTableStyle from './StudentGradeStyle';
import MenuButton from './MenuButton';

type IProps = {
  list: IStudent[];
  fetchStudentData: () => void;
};

export default function StudentTable({ list, fetchStudentData }: IProps) {
  useEffect(() => {
    fetchStudentData();
  }, [fetchStudentData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='right'>Marks</TableCell>
            <TableCell align='right'>Subject</TableCell>
            <TableCell align='right'>Grade</TableCell>
            <TableCell align='right'>Date</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row: any) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='right'>{row.marks}</TableCell>
              <TableCell>
                <StudentTableStyle grade={row.grade} />
              </TableCell>
              <TableCell align='right'>{row.grade}</TableCell>
              <TableCell align='right'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
              <TableCell align='right'>
                <MenuButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
