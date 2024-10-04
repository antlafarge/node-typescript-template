import express from 'express';

import MyModule from './myModule.js';

console.log(MyModule.myNumber);

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log("http://localhost:3000");

app.listen(3000)
