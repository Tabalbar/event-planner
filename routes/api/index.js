/**
 * Groups all api endpoints into a single router object.
 * exports said router object.
 */

const router = require('express').Router();
const eventsRouter = require('./events');

const API = 'api';

router.use(`/${API}`, eventsRouter);

module.exports = router;
