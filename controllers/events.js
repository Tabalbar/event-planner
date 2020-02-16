const events = [
  {
    id: 1,
    name: 'Create an App.',
    date: '2/15/2020',
    description: 'Make sure to create an app today.',
  },
  {
    id: 2,
    name: 'Brush teeth',
    date: '2/15/2020',
    description: 'Make sure to create an brush teeth today.',
  },
  {
    id: 3,
    name: 'Go to sleep.',
    date: '2/15/2020',
    description: 'Make sure to get sleep today.',
  },
];

function getEvents(req, res) {
  res.status(200).toJSON(events);
}

module.exports = { getEvents };
