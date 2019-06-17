const express = require('express');
const { postPerson, getPropertyFromObject, checkAge } = require('../controllers/objects');

const objectsRouter = express.Router();

objectsRouter.post('/person', postPerson);
objectsRouter.get('/:property', getPropertyFromObject);
objectsRouter.get('/person/checkAge', checkAge);

module.exports = objectsRouter;
