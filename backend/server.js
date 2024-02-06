import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectToDatabase from './utils/connectToDatabase.js';
import { app, server } from './socket/socket.js';

// CONFIG
dotenv.config();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// STATIC FILES
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// ERROR HANDLING
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

// LISTEN
server.listen(PORT, () => {
  connectToDatabase();
  console.log('Server listening on ' + PORT);
});
