const express = require('express');
const router = express.Router();
const { createCheckoutSession } = require('../stripe/mockRevTrak.js');

router.post('/create', createCheckoutSession);

module.exports = router;
