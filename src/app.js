// Main application file / Entry point for application

const express = require('express');
const setupServer = require('./config/server');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = setupServer();
connectDB();

app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;
// const PORT = process.env.PORT || 27017;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));