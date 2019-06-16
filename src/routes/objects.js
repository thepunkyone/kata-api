const express = require('express');
const { postPerson } = require('../controllers/objects');

const objectsRouter = express.Router();

objectsRouter.post('/person', postPerson);

module.exports = objectsRouter;
