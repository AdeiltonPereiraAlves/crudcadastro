const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3003;
const app = express();
app.use(express.json())
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "cadastro"
})

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/users", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const telefone = req.body.telefone;

    const sqlInsert = "INSERT INTO form (name, email, telefone) VALUES (?,?,?)";
    
    db.query(sqlInsert,[name, email, telefone], (err, result) => {
        if(err) console.log(err + "Ocorreu um erro ao conectar no banco de dados")
        res.send(result)
    })
})

app.get("/", (req, res) => {
    res.send("Funcionou")
})
app.listen(port, (req, res) =>{
   console.log("rodando")
    
})

