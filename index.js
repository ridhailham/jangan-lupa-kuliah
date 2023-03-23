const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');

//routes utama method GET

app.use(bodyParser.json());

app.get('/', (req, res) => {
    db.query("SELECT * FROM mahasiswa", (error, result) => {
        console.log({result})
        res.send(result)
    })
    res.send('utama');
})

app.get('/db', (req, res) => {
    db.query("SELECT * FROM mahasiswa", (error, result) => {
        console.log({result})
    })
    res.send("ini db")
})

app.get('/hello', (req, res) => {
    console.log({h: req.body})
    console.log({urlParam: req.query.nama})
    res.send('Hello Word');
})

app.post('/login', (req, res) => {
    console.log({requestromOutside: req.body});
    res.send('post berhasil');
})

app.put('/username', (req, res) => {
    console.log({updateData: req.body})
    res.send('update berhasil');
})

app.listen(port, () => {
    console.log('sever berjalan dalam port 3000');
})