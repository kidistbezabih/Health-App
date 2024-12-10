// const {express} = require('express');
import express from 'express';
const  app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Hello, Docker with TypeScript!');
});

app.listen(PORT, () => console.log("Server Running!"));