import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';

const TableForm = ({ lista }) => {

  function handleDelte(id){
    axios.delete(`http://localhost:3003/delete/${id}`)
    
  }
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome: </TableCell>
            <TableCell align="left">Email: </TableCell>
            <TableCell align="left">Telefone:</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((row, index) => (

            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell><CreateIcon/></TableCell>
              <TableCell><IconButton aria-label="delete" size="large" onClick={()=> {handleDelte(row.id)}}><DeleteIcon /></IconButton></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableForm
