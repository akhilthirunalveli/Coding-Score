const express = require('express');
const { fetchUserStats } = require('./controllers/statsController');
const router = express.Router();

router.get('/:platform/:handle', fetchUserStats);

module.exports = router;
