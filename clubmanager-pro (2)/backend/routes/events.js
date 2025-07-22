// routes/events.js
const router = require('express').Router();
const { listEvents, createEvent, deleteEvent } = require('../controllers/eventController');

router.get('/', listEvents);
router.post('/', createEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
