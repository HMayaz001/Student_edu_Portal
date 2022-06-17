import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

function Home(
  Name: string,
  Marks: number,
  Subject: string,
  Grade: string,
  Email: string
) {
  return { Name, Marks, Subject, Grade, Email };
}

const rows = [
  Home("Ayaz", 159, "6.0", "24", "0"),
  Home("Usama", 237, "9.0", "37", "4.3"),
  Home("Ali", 262, "16.0", "24", "6.0"),
  Home("Salman", 305, "3.7", "67", "4.3"),
  Home("Sameed", 356, "16.0", "49", "3.9"),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Marks</TableCell>
            <TableCell align="right">Subject&nbsp;</TableCell>
            <TableCell align="right">Grade&nbsp;</TableCell>
            <TableCell align="right">Data&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Marks}</TableCell>
              <TableCell align="right">{row.Subject}</TableCell>
              <TableCell align="right">{row.Grade}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


