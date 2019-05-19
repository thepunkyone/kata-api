const express = require('express');
const arraysController = require('../controllers/arrays');

const router = express.Router();

router.post('/element-at-index/:index', arraysController.getNthElement);
router.post('/to-string', arraysController.toString);
router.post('/append', arraysController.append);
router.post('/starts-with-vowel', arraysController.startsWithVowel);
router.post('/remove-element', arraysController.removeElement);

module.exports = router;
