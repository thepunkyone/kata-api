const express = require('express');
const fizzBuzzController = require('../controllers/fizzbuzz');

const fizzBuzzRouter = express.Router();

fizzBuzzRouter.get('/:number', fizzBuzzController);

module.exports = fizzBuzzRouter;
