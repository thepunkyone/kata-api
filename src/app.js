const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');
const booleansRouter = require('./routes/booleans');
const arraysRouter = require('./routes/arrays');
const objectsRouter = require('./routes/objects');
const fizzBuzzRouter = require('./routes/fizzbuzz');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);
app.use('/objects', objectsRouter);
app.use('/fizzbuzz', fizzBuzzRouter);

module.exports = app;
