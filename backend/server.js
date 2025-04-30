const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Logging for development
app.use(morgan('dev'));

// CORS setup
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies if needed
}));

// JSON parser middleware
app.use(express.json()); // To parse JSON data

// Routes
app.use('/api/orders', require('./routes/orderRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});