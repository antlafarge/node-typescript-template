import express from 'express';

import MyModule from './myModule.js';

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

console.log(`http://localhost:${MyModule.myNumber}`);

app.listen(MyModule.myNumber)
