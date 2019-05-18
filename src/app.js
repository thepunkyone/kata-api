const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract } = require('./lib/numbers');

const app = express();

/*----------STRINGS---------*/

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const queryKeys = Object.getOwnPropertyNames(req.query);
  const numberOfChars = req.query[queryKeys[0]];
  if (numberOfChars) {
    res.status(200).json({
      result: firstCharacters(
        req.params.string,
        numberOfChars
      ),
    });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

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

module.exports = app;
