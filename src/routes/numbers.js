const express = require('express');
const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const router = express.Router();

router.get('/add/:firstNumber/and/:secondNumber', (req, res) => {
  const { firstNumber, secondNumber } = req.params;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(Number(firstNumber), Number(secondNumber)) });
  }
});

router.get('/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const { firstNumber, secondNumber } = req.params;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(secondNumber, firstNumber) });
  }
});

router.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

router.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (typeof a && typeof b === 'number') {
    if (b === 0) {
      res.status(400).json({ error: 'Unable to divide by 0.' });
    }
    res.status(200).json({ result: divide(a, b) });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(Number(a), Number(b)) });
  }
});

router.post('/remainder', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (typeof a && typeof b === 'number') {
    if (b === 0) {
      res.status(400).json({ error: 'Unable to divide by 0.' });
    }
    res.status(200).json({ result: remainder(a, b) });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(Number(a), Number(b)) });
  }
});

module.exports = router;
