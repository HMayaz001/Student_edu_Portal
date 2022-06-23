import React, { useEffect } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Button,
  IconButton,
  SvgIcon,
} from "@mui/material";
type FontAwesomeSvgIconProps = {
  icon: any;
};

function Home(
  Name: string,
  Marks: number,
  Subject: string,
  Grade: string,
  Date: string
) {
  return { Name, Marks, Subject, Grade, Date };
}

type Iprops = {
  title: string;
};

export default function Student({ list, fetchStudentData }: any) {
  useEffect(() => {
    fetchStudentData();
  }, [fetchStudentData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Marks</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row: any) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.marks}</TableCell>
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <MoreVertOutlinedIcon fontSize="small" color="action" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
