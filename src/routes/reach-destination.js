const express = require('express');
const reachDestinationController = require('../controllers/reach-destination');

const reachDestinationRouter = express.Router();

reachDestinationRouter.put('/', reachDestinationController);

module.exports = reachDestinationRouter;
