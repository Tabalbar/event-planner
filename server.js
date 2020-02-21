/**
 * Entry point of the application.
 * Uses express for routing.
 */

const express = require('express');
require('dotenv').config(); // allows importing .env file constants into env variables
require('./db');
const cors = require('cors');
const apiRouter = require('./routes/api');


const { SERVER_PORT, NODE_ENV } = process.env; // env variables

const app = express();

app.use(express.json()); // middleware for POSTing json data

if (NODE_ENV === 'development') {
  app.use(cors());
}

// bind routes to app
app.use(apiRouter);

// eslint-disable-next-line no-console
app.listen(SERVER_PORT, () => console.log(`app listening on port: ${SERVER_PORT}`));
