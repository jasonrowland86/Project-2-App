const express = require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/main-controller');
const fighterHelpers = require('../services/fighter-helper');


mainRouter.post('/', fighterHelpers.getFighterData, mainController.fighter);

// mainRouter.get('/', mainController.index);


module.exports = mainRouter;
