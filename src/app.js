const express = require('express');
const stringsRouter = require('./routes/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();
app.use(express.json());
app.use('/strings', stringsRouter);

/*----------NUMBERS---------*/

app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  const { firstNumber, secondNumber } = req.params;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(Number(firstNumber), Number(secondNumber)) });
  }
});

app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const { firstNumber, secondNumber } = req.params;
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(secondNumber, firstNumber) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide', (req, res) => {
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

app.post('/numbers/remainder', (req, res) => {
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


module.exports = app;
