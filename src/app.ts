import express from 'express';
import cors from 'cors'; // Import the CORS middleware
import path from 'node:path';
import { AppRouter } from './routers';

const app = express();
const PORT = 4000;

// Enable CORS for all origins
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Enable if your frontend includes cookies or auth headers
  })
);

app.use(express.json());
app.use(express.static('public'));

// Register your routes
app.use('/api/v1', AppRouter.routes);

// Fallback for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () =>
  console.log(`Server Running on port http://127.0.0.1:${PORT}!`)
);
