import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';
import axios from 'axios';
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
   
    function handleSubmit(){
             axios.post("http://localhost:3003/users", {
                name: name,
                email: email,
                telefone: telefone,
             })
            setName("")
            setEmail("")
            setTelefone("")
    }
    return (
        <div className='container'>
            <h1>Cadastre-se</h1>
            <TextField fullWidth label="Nome " id="fullWidth" value={name} onChange={(e) => {setName(e.target.value)}} />
            <TextField fullWidth label="Email " id="fullWidth" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <TextField fullWidth label="Tel" id="fullWidth" value={telefone}  onChange={(e) => {setTelefone(e.target.value)}}/>
            <Button variant="contained" disableElevation className='button' onClick={handleSubmit}>
               Cadastrar
            </Button>

        </div>

    )
}

export default Form
