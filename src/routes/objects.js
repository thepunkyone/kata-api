const express = require('express');
const { postPerson, getPropertyFromObject } = require('../controllers/objects');

const objectsRouter = express.Router();

objectsRouter.post('/person', postPerson);
objectsRouter.get('/:property', getPropertyFromObject);

module.exports = objectsRouter;
