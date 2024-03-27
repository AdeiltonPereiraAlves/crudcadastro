import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';
import axios from 'axios';
import TableForm from './TableForm';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
const Form = () => {
    let time = 1000;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [lista, setLista] = useState([]);
    const [msg, setMsg] = useState("");
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
    }, [lista])
    return (
        <div className='container'>
          
            <h1>Cadastro</h1>
            <TextField fullWidth label="Nome " id="fullWidth" value={name} onChange={(e) => { setName(e.target.value) }} />
            <TextField fullWidth label="Email " id="fullWidth" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <TextField fullWidth label="Tel" id="fullWidth" value={telefone} onChange={(e) => { setTelefone(e.target.value) }} />
            <Button variant="contained" disableElevation className='button' onClick={handleSubmit}>
                Cadastrar
            </Button>
            <TableForm lista={lista} />

        </div>

    )
}

export default Form
