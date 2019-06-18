const express = require('express');
const reversedDigitsController = require('../controllers/reversed-digits');

const reversedDigitsRouter = express.Router();

reversedDigitsRouter.post('/', reversedDigitsController);

module.exports = reversedDigitsRouter;
