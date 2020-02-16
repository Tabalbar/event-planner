/**
 * Defines controller functions related to events.
 * All functions are async to play nice with model functions.
 */

const eventModel = require('../models/event');

/**
 * Gets all events.
 *
 * @param req {{}}
 * @param res {{}}
 * @returns {Promise<*>}
 */
async function getEvents(req, res) {
  let events;
  try {
    // get all events
    events = await eventModel.getAll();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Failed to get events');
    return res.status(400).json({ error: 'failed to get events' });
  }
  return res.status(200).json({ events });
}

/**
 * Creates an event.
 * Should be used in a POST request
 * @param req {{body: {name: string, date: string, description: string}}}
 * @param res {{}}
 * @returns {Promise<*>}
 */
async function createEvent(req, res) {
  const { name, date, description } = req.body;
  let event;

  if (name === undefined) {
    return res.status(400).json({ error: 'missing param' });
  }

  if (date === undefined) {
    return res.status(400).json({ error: 'missing date param' });
  }

  if (description === undefined) {
    return res.status(400).json({ error: 'missing description param' });
  }

  try {
    event = await eventModel.create({ name, date, description });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Failed to create event');
    return res.status(400).json({ error: 'failed to create event' });
  }
  return res.status(200).json({ event });
}

module.exports = {
  getEvents,
  createEvent,
};
