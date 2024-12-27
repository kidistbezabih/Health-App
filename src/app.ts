// const {express} = require('express');
import express from 'express';
import path from "node:path";
import  PatientRoute  from './routers/patientRoutes';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1', PatientRoute.routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}!`));
