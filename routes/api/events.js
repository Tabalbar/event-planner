const router = require('express').Router();
const { getEvents } = require('../controllers/events');

// url paths
const PATHS = {
  EVENTS: 'events',
  GET: 'get',
  ALL: 'all',
};

router.get(`/${PATHS.EVENTS}/${PATHS.GET}/${PATHS.ALL}`, getEvents);

exports.default = router;
