/**
 * Defines api endpoints related to events.
 * Binds url paths with cotroller functions.
 */

// {mergParams: true} option used to allow parent route to access this child routes args.
const router = require('express').Router({ mergeParams: true });

// event controller funcs
const { getEvents, createEvent } = require('../../controllers/events');

// url paths
const PATHS = {
  EVENTS: 'events',
  GET: 'get',
  CREATE: 'create',
};

router.get(`/${PATHS.EVENTS}/${PATHS.GET}`, getEvents);
router.post(`/${PATHS.EVENTS}/${PATHS.CREATE}`, createEvent);

module.exports = router;
