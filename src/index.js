// Entry point for the application

const app = require('./app');
const env = require('./config/env');

// const PORT = env.PORT;
const PORT = process.env.PORT || 27017; // instead of line 6
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// test change