// routes/ai.js
const router = require('express').Router();
const { parseCommand } = require('../controllers/aiController');
router.post('/parse', parseCommand);
module.exports = router;
