const express = require('express')
const mysql = require('mysql')
const cors = require("cors")

const app = express()

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    pwd: '',
    database: 'signup'
})
app.post('/Resgiter', (req, res)=>{
    const sql = "INSERT INTO login('user','password')Values(?)";
    const values = [
        req.body.user,
        req.body.pwd,
    ]
    db.query(sql, [values] , (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(3003, () => {
    console.log("listening...");
})