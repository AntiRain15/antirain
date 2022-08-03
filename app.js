const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

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