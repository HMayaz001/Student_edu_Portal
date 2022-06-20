import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from "@mui/material";
function Home(
  Name: string,
  Marks: number,
  Subject: string,
  Grade: string,
  Date: string,
  Action: string
) {
  return { Name, Marks, Subject, Grade, Date, Action };
}

const rows = [
  Home("Ayaz", 95, "Calculus", "A", Date(), "abc"),
  Home("Usama", 75, "Python", "B", Date(), "abc"),
  Home("Ali", 91, "ITC", "A", Date(), "abc"),
  Home("Salman", 76, "Data structure", "B", Date(), "abc"),
  Home("Sameed", 90, "Entrepreneurship", "A", Date(), "abc"),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Marks</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.Name}</TableCell>
              <TableCell align="right">{row.Marks}</TableCell>
              <TableCell align="left">{row.Subject}</TableCell>
              <TableCell align="right">{row.Grade}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
