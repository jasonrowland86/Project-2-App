const express = require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/main-controller');
const fighterHelpers = require('../services/fighter-helper');
const authHelpers = require('../services/auth/auth-helper');

mainRouter.post('/', fighterHelpers.getFighterData, mainController.fighter);


module.exports = mainRouter;
