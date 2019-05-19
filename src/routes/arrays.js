const express = require('express');
const arraysController = require('../controllers/arrays');

const router = express.Router();

router.post('/element-at-index/:index', arraysController.getNthElement);
router.post('/to-string', arraysController.toString);

module.exports = router;
