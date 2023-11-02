"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Userinfo } from '../types/userinfo';
import { useEffect, useState } from 'react';

function createData (
    id: number,
    name : string,
    age : number,
    gender : string,
    weight : number,
    height : number,
    waist : number,
    hip : number,
    result : number,
    rating : Number,
    knowledge : Number,
    comment : string,
) {
  return {
    id,
    name,
    age ,
    gender ,
    weight,
    height ,
    waist ,
    hip ,
    result ,
    rating ,
    knowledge,
    comment ,
  };
}

export default function BasicTable() {
  const[rows,setRows] = useState([]);
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
            rating: user.rating,
            knowledge: user.knowledge,
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
      }
    }
    getAllUserInfos();
  }, []);

  return (
    <TableContainer component={Paper} style={{ maxHeight: '700px', overflowY: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age&nbsp;(year)</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Weight&nbsp;(kg)</TableCell>
            <TableCell align="right">Height&nbsp;(cm)</TableCell>
            <TableCell align="right">Waist&nbsp;(cm)</TableCell>
            <TableCell align="right">Hip&nbsp;(cm)</TableCell>
            <TableCell align="right">Result</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Knowledge</TableCell>
            <TableCell align="right">comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row : any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
              <TableCell align="right">{row.waist}</TableCell>
              <TableCell align="right">{row.hip}</TableCell>
              <TableCell align="right">{row.result}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.knowledge}</TableCell>
              <TableCell align="right">{row.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
