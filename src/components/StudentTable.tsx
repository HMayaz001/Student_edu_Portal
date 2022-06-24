import React, { useEffect } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper, Box } from '@mui/material';
import { IStudent } from '../state/ducks/student/types';
import MenuButton from './MenuButton';
import { dateFormat } from '../utils/helper';

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
              <TableCell align='right'>{row.subject}</TableCell>
              <TableCell align='center'>
                {/* <GradeTableCell grade={row.grade} /> */}
                <Box sx={row.grade === 'A' ? { color: 'red', background: 'yellow' } : { color: 'white', background: 'gray' }}>
                  {row.grade}
                </Box>
              </TableCell>
              <TableCell align='right'>{dateFormat()}</TableCell>
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
