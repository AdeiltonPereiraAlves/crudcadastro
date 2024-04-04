import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';
import axios from 'axios';

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

const Form = () => {
    let time = 1000;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [lista, setLista] = useState([]);
 
    const [novoName, setNovoName] = useState("");
    const [novoEmail, setNovoEmail] = useState("");
    const [novoTelefone, setNovoTelefone] = useState("");

    const [user, setUser] = useState({});
    
     
    const [visivel, setVisivel] = useState(false)
    const [id , setId] = useState();

    
    function handleSubmit() {
        axios.post("http://localhost:3003/users", {
            name: name,
            email: email,
            telefone: telefone,
        })
            .then(res => {
                if (res.data.status == "sucesso") {

                    setTimeout(() => {
                        window.alert("Cadastro realizado com sucesso!!!")
                    }, time)


                }
            })
        setLista([...lista, { name, email, telefone }])
        setName("")
        setEmail("")
        setTelefone("")

    }
    useEffect(() => {
        axios.get("http://localhost:3003/get")
            .then(res => setLista(res.data))
    }, [])

    function handleDelte(id){
        
          const  excluir = window.confirm("Deseja excluir esse usuario?")
          if(excluir){

              axios.delete(`http://localhost:3003/delete/${id}`)
              window.location.reload();
          }
        
      }
     
      function handlePut(id){
        console.log(id)
    
        axios.put(`http://localhost:3003/update/${id}`, { name: novoName, email: novoEmail, telefone: novoTelefone })
        .then(() => {
            alert("Usuário atualizado com sucesso!!!");
            window.location.reload();
          
        })
        .catch(error => console.error('Erro ao atualizar usuário:', error));
       
    }
 
  
           
    function handleVisivel(id){
        setVisivel(!visivel)
        setId(id)
    }

    
    return (
        <div>

            <div className='cadastro'>
                <h1>Cadastro</h1>
                <TextField fullWidth label="Nome " id="fullWidth"  onChange={(e) => { setName(e.target.value) }} />
                <TextField fullWidth label="Email " id="fullWidth"  onChange={(e) => { setEmail(e.target.value) }} />
                <TextField fullWidth label="Tel" id="fullWidth" onChange={(e) => { setTelefone(e.target.value) }} />
                <Button variant="contained" disableElevation className='button' onClick={handleSubmit}>
                    Cadastrar
                </Button>
            </div>
            <div style={{display: visivel? 'block' : 'none'}} className='editar'>
                <h1>Editar</h1>
                <TextField fullWidth label="Nome " id="fullWidth" onChange={(e) => { setNovoName(e.target.value) }} />
                <TextField fullWidth label="Email " id="fullWidth"  onChange={(e) => { setNovoEmail(e.target.value) }} />
                <TextField fullWidth label="Tel" id="fullWidth" onChange={(e) => { setNovoTelefone(e.target.value) }} />
                <Button variant="contained" disableElevation className='button' onClick={()=> {handlePut(id)}}>
                  Concluir
                </Button>
            </div>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID: </TableCell>
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
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.telefone}</TableCell>
                                <TableCell>
                                    <button onClick={() => {handleVisivel(row.id)}}><CreateIcon /></button>
                                </TableCell>
                                <TableCell><IconButton aria-label="delete" size="large" onClick={() => { handleDelte(row.id) }}><DeleteIcon /></IconButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
           

        </div>

    )
}

export default Form
