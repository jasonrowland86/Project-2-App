const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helper');
const fighterHelpers = require('../services/fighter-helper');

userRoutes.get('/', authHelpers.loginRequired, usersController.index);

userRoutes.post('/', fighterHelpers.getFighterData, usersController.fighter);

module.exports = userRoutes;
