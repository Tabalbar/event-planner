/**
 * Model used as interface to event objects in db.
 *
 * functions defined here are async, and
 * throws errors to top level caller.
 */

const mongoose = require('mongoose');

// errors thrown by functions defined here.
// we export this so that controllers using
// these functions can make decisions based
// on errors thrown.
const eventErrors = {
  fetchAll: new Error('Failed to fetch events'),
  create: new Error('Failed to create event'),
};

// mongoose model name.
// we export this in case the document name needs to be referenced
// by other models.
const EVENT = 'Event';


const eventSchema = new mongoose.Schema({
  name: 'string',
  date: 'string',
  description: 'string',
});
const MongooseModel = mongoose.model(EVENT, eventSchema);


/**
 * Returns all documents in event collection as an array of objects.
 *
 * @returns {Promise<[{
 * _.id: string,
 * name: string,
 * date: string,
 * description: string,
 * __v: int
 * }]>}
 */
async function getAll() {
  try {
    return MongooseModel.find();
  } catch (e) {
    throw eventErrors.fetchAll;
  }
}

/**
 * @param {{name: string, date: string, description: string}} newEventArgs
 * @returns {Promise<*>}
 */
async function create(newEventArgs) {
  // use object destructuring in-case additional args are passed.
  const { name, date, description } = newEventArgs;
  try {
    const event = new MongooseModel({ name, date, description });
    await event.save();
    return event;
  } catch (e) {
    throw eventErrors.create;
  }
}

module.exports = {
  getAll,
  create,
  eventErrors,
  EVENT,
  eventSchema,
};
