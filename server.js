const express = require('express');
require('dotenv').config();

/**
 * Entry point of the application.
 * Uses express for routing.
 */

const { PORT } = process.env;
const app = express();

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
