const express = require('express');
const arraysController = require('../controllers/arrays');

const router = express.Router();

router.post('/element-at-index/:index', arraysController.getNthElement);

module.exports = router;
