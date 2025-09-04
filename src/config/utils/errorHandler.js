// Centralized error handling

const logger = require('./logger'); // may not need

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;