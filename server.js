const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); // File System
// PostgreSQL 
// รอบหน้าสไลด์ 75
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/writeFile', (req, res) => {
    fs.writeFileSync('test.txt', 'Hello World');
    res.send('File written');
});

app.get('/readFile', (req, res) => {
    const data = fs.readFileSync('test.txt');
    res.send('data in file = ' + data);
});

app.post('/hello', (req, res) => {
    res.send(req.body);
});

app.put('/myPut', (req, res) => {
    res.send(req.body);
});

app.delete('/myDelete/:id', (req, res) => {
    res.send('id = ' + req.params.id);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
});

// multiple params
app.get('/hello/:name/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    res.send('name = ' + name + ' age = ' + age);
});

app.listen(3001, () => {
    console.log('Server is running on 127.0.0.1:3001');
});