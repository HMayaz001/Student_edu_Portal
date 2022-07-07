import { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper, Box } from '@mui/material';
import { IStudent } from '../../state/ducks/student/types';
import MenuButton from './MenuButton';
import { dateFormat } from '../../utils/helper';

type IProps = {
  list: IStudent[];
  fetchStudentData: () => void;
};

export default function StudentTable({ list, fetchStudentData }: IProps) {
  const [students, setStudents] = useState<IStudent[]>();

  useEffect(() => {
    fetchStudentData();
    setStudents(list);
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
          {students?.map((row: IStudent) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='right'>{row.marks}</TableCell>
              <TableCell align='right'>{row.subject}</TableCell>
              <TableCell align='center'>
                <Box
                  sx={
                    row?.grade === 'A'
                      ? {
                          color: '#febd45',
                          background: '#FFF7F5',
                          borderRadius: '8px',
                          width: '110.33px',
                          height: '24.54px',
                          padding: '4px 0 0 0 ',
                        }
                      : {
                          color: '#e54a4a',
                          background: '#FF6897',
                          borderRadius: '8px',
                          width: '110.33px',
                          height: '24.54px',
                          padding: '4px 0 0 0 ',
                        }
                  }
                >
                  {row.grade}
                </Box>
              </TableCell>
              <TableCell align='right'>{dateFormat(row.date)}</TableCell>
              <TableCell align='right'>
                <MenuButton student_id={row._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
