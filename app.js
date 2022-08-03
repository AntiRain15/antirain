const express = require('express'); 
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('get 실행 중');
});

app.post('/', (req, res)=>{
    res.send('post 실행 중');
});

app.patch('/', (req, res)=>{
    res.send('patch 실행 중');
});

app.delete('/', (req, res)=>{
    res.send('send 실행 중');
});

app.listen(port, () => {});