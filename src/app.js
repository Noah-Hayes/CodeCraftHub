// Main application file / Entry point for application

const express = require('express');
const setupServer = require('./config/config/server');
const connectDB = require('./config/config/db');
const userRoutes = require('./config/routes/userRoutes');
const errorHandler = require('./config/utils/errorHandler');

const app = setupServer();
connectDB();

app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;
// const PORT = process.env.PORT || 27017;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));