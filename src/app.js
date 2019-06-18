const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');
const booleansRouter = require('./routes/booleans');
const arraysRouter = require('./routes/arrays');
const objectsRouter = require('./routes/objects');
const fizzBuzzRouter = require('./routes/fizzbuzz');
const booleanToWordRouter = require('./routes/boolean-to-word');
const reversedDigitsRouter = require('./routes/reversed-digits');
const animalYearsRouter = require('./routes/animal-years');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);
app.use('/arrays', arraysRouter);
app.use('/objects', objectsRouter);
app.use('/fizzbuzz', fizzBuzzRouter);
app.use('/boolean-to-word', booleanToWordRouter);
app.use('/reversed-digits', reversedDigitsRouter);
app.use('/animal-years/', animalYearsRouter);

module.exports = app;
