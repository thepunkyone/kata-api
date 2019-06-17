const express = require('express');
const { postPerson, getPropertyFromObject, checkIfOver65 } = require('../controllers/objects');

const objectsRouter = express.Router();

objectsRouter.post('/person', postPerson);
objectsRouter.get('/:property', getPropertyFromObject);
objectsRouter.get('/person/checkAge', checkIfOver65);

module.exports = objectsRouter;
