import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';
import axios from 'axios';
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    console.log(name)
    function handleSubmit(){
             
    }
    return (
        <div className='container'>
            <h1>Cadastre-se</h1>
            <TextField fullWidth label="Nome " id="fullWidth" onChange={(e) => {setName(e.target.value)}} />
            <TextField fullWidth label="Email " id="fullWidth" onChange={(e) => {setEmail(e.target.value)}}/>
            <TextField fullWidth label="Tel" id="fullWidth"  onChange={(e) => {setTel(e.target.value)}}/>
            <Button variant="contained" disableElevation className='button'>
               Cadastrar
            </Button>

        </div>

    )
}

export default Form
