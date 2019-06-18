const express = require('express');
const stringsController = require('../controllers/strings');

const router = express.Router();

router.get('/hello/:string', stringsController.hello);

router.get('/upper/:string', stringsController.uppercase);

router.get('/lower/:string', stringsController.lowercase);

router.get('/first-characters/:string', stringsController.firstCharacters);

module.exports = router;
