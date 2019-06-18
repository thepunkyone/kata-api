const express = require('express');
const numbersController = require('../controllers/numbers');

const router = express.Router();

router.get('/add/:firstNumber/and/:secondNumber', numbersController.add);

router.get('/subtract/:firstNumber/from/:secondNumber', numbersController.subtract);

router.post('/multiply', numbersController.multiply);

router.post('/divide', numbersController.divide);

router.post('/remainder', numbersController.remainder);

module.exports = router;
