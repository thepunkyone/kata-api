const express = require('express');

const animalYearsRouter = express.Router();
const animalYearsController = require('../controllers/animal-years');

animalYearsRouter.get('/:number', animalYearsController);

module.exports = animalYearsRouter;
