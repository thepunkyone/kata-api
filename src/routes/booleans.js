const express = require('express');
const booleansController = require('../controllers/booleans');

const router = express.Router();

router.post('/negate', booleansController.negate);
router.post('/truthiness', booleansController.truthiness);
router.get('/is-odd/:number', booleansController.isOdd);

module.exports = router;
