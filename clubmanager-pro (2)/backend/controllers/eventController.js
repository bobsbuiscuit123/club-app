// controllers/eventController.js
const Event = require('../models/Event');

async function listEvents(req, res) {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
}

async function createEvent(req, res) {
  const evt = await Event.create(req.body);
  res.status(201).json(evt);
}

async function deleteEvent(req, res) {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
}

module.exports = { listEvents, createEvent, deleteEvent };
