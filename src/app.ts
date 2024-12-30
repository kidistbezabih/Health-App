import express from 'express';
import path from "node:path";
import {AppRouter} from "./routers";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1', AppRouter.routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => console.log(`Server Running on port http://127.0.0.1:${PORT}!`));
