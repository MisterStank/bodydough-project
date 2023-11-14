"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled,LinearProgress } from '@mui/material';
import { Userinfo } from '../types/userinfo';
import { useEffect, useState } from 'react';
import { calculateBmi, calculateWhr } from '../utills/calculateresult';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const resultFromWhr = [
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
  "มีภาวะอ้วนลงพุงแบบลูกแพร์",
  "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
  "ไม่มีภาวะอ้วนลงพุง",
 ];

 const finalResult = [
  "ผอม",
  "ผอม",
  "ผอม",
  "สมส่วน",
  "สมส่วน",
  "สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ผอม",
  "ผอม",
  "ผอม",
  "สมส่วน",
  "สมส่วน",
  "สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
  "ไม่สมส่วน",
 ];


export default function BasicTable() {
  const[rows,setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getAllUserInfos() {
      try {
        const responses = await fetch("/api", {
          method: "GET",
        });
  
        if (responses.ok) {
          const data = await responses.json();
          const results = data.map((user: Userinfo, index: number) => ({
            id: index + 1,
            name: user.name,
            age: user.age,
            gender: user.gender,
            weight: user.weight,
            height: user.height,
            waist: user.waist,
            hip: user.hip,
            result: user.result,
            bmi : calculateBmi(user.weight,user.height),
            whr : calculateWhr(user.waist,user.hip),
            bmiaccuracy : user.bmiaccuracy,
            whraccuracy : user.whraccuracy,
            convenient : user.convenient,
            rating: user.rating,
            comment: user.comment,
          }));
          setRows(results);
        } else {
          console.log("Failed to fetch data from the API");
          throw new Error("Failed to fetch data from the API");
        }
      } catch (error) {
        console.log("Error:", error);
        return [];
      } finally{
        setLoading(false);
      }
    }
    getAllUserInfos();
  }, []);

  return <div>
    {loading ? (
        <div className="loading-screen">
          <h1 className="m-5 font-sriracha text-3xl">Loading your result...</h1>
          <LinearProgress color="inherit"/>
        </div>
      ) : (
        <TableContainer component={Paper} style={{ maxHeight: '700px', overflowY: 'auto' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Age&nbsp;(year)</StyledTableCell>
                <StyledTableCell align="right">Gender</StyledTableCell>
                <StyledTableCell align="right">Weight&nbsp;(kg)</StyledTableCell>
                <StyledTableCell align="right">Height&nbsp;(cm)</StyledTableCell>
                <StyledTableCell align="right">Waist&nbsp;(cm)</StyledTableCell>
                <StyledTableCell align="right">Hip&nbsp;(cm)</StyledTableCell>
                <StyledTableCell align="right">Result</StyledTableCell>
                <StyledTableCell align="right">Bmi</StyledTableCell>
                <StyledTableCell align="right">Whr</StyledTableCell>
                <StyledTableCell align="right">ประเมินดัชนีมวลกาย</StyledTableCell>
                <StyledTableCell align="right">ประเมินภาวะอ้วนลงพุง</StyledTableCell>
                <StyledTableCell align="right">ความสะดวกในการใช้</StyledTableCell>
                <StyledTableCell align="right">ความพึงพอใจในการใช้เว็บไซต์</StyledTableCell>
                <StyledTableCell align="right">comment</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row : any) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.age}</StyledTableCell>
                  <StyledTableCell align="right">{row.gender}</StyledTableCell>
                  <StyledTableCell align="right">{row.weight}</StyledTableCell>
                  <StyledTableCell align="right">{row.height}</StyledTableCell>
                  <StyledTableCell align="right">{row.waist}</StyledTableCell>
                  <StyledTableCell align="right">{row.hip}</StyledTableCell>
                  <StyledTableCell align="right">ร่างกาย{finalResult[row.result-1]} <br/>{resultFromWhr[row.result-1]}</StyledTableCell>
                  <StyledTableCell align="right">{row.bmi}</StyledTableCell>
                  <StyledTableCell align="right">{row.whr}</StyledTableCell>
                  <StyledTableCell align="right">{row.bmiaccuracy}</StyledTableCell>
                  <StyledTableCell align="right">{row.whraccuracy}</StyledTableCell>
                  <StyledTableCell align="right">{row.convenient}</StyledTableCell>
                  <StyledTableCell align="right">{row.rating}</StyledTableCell>
                  <StyledTableCell align="right">{row.comment}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
      }
        </div>
  
}
