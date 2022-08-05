const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mysql = require('mysql2/promise')

const connectPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'swdc',
    password: '0000',
});

app.get('/', async (req, res) => {
    const conn = await connectPool.getConnection();
    const result = await conn.query('SELECT * FROM `user` WHERE age=14');
    conn.release()
    res.send(result[0])
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: true }))

app.get('/p/:p', (req, res)=>{
    res.send(`${req.params.p}`);
});

app.get('/q', (req, res)=>{
    res.send(`${req.query}`);
});

app.post('/q', (req, res)=>{
    res.send(`${req.query}`);
});

app.patch('/b', (req, res)=>{
    res.send(`${req.body}`);
});

app.delete('/b', (req, res)=>{
    res.send(`${req.body}`);
});

app.listen(port, () => {});