import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import connectToDatabase from './utils/connectToDatabase.js';

const app = express();

// CONFIG
dotenv.config();
const PORT = process.env.PORT || 5000;

// ENDPOINT
app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// LISTEN
app.listen(PORT, () => {
  connectToDatabase();
  console.log('Server listening on ' + PORT);
});
