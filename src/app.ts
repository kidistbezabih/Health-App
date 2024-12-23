// const {express} = require('express');
import express from 'express';
import path from "node:path";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}!`));
