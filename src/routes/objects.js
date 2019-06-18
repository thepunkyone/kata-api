const express = require('express');
const { postPerson, getPropertyFromObject, checkIfOver65, returnAverageAge } = require('../controllers/objects');

const objectsRouter = express.Router();

objectsRouter.post('/person', postPerson);
objectsRouter.get('/:property', getPropertyFromObject);
objectsRouter.get('/person/checkAge', checkIfOver65);
objectsRouter.post('/people', returnAverageAge);

module.exports = objectsRouter;
