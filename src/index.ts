import express from 'express';
import data from './data.json' with { type: "json" };
import MyModule from './myModule.js';

const app = express()

app.get('/', function (req, res) {
    res.send(MyModule.helloWorld)
});

console.log(`http://localhost:${data.port}`);

app.listen(data.port)
