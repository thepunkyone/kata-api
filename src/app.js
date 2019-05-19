const express = require('express');
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');

const app = express();
app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);

module.exports = app;
