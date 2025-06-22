const express = require('express');
require('dotenv').config();  
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// Database connection
require('./database/connection');

// Import routes
const categoryRoutes = require('./routes/categoryRoutes');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes
app.use('/api', categoryRoutes);
app.use('/api', subcategoryRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

