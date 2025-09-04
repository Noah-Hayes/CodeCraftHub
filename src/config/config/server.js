// Server configuration and initialization

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const setupServer = () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    return app;
};

module.exports = setupServer;