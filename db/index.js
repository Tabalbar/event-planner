/**
 * Creates connection to mongoDB via mongoose
 * using URI defined in an environment variable.
 */

const mongoose = require('mongoose');

const { DB_URI } = process.env;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


mongoose.connect(DB_URI, mongooseOptions)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('db successfully connected');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.error('db failed to connect');
  });
