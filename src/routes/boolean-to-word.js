const express = require('express');
const booleanToWordController = require('../controllers/boolean-to-word');

const booleanToWordRouter = express.Router();

booleanToWordRouter.post('/', booleanToWordController);

module.exports = booleanToWordRouter;
