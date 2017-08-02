const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helper');

userRoutes.get('/', authHelpers.loginRequired, usersController.index);

module.exports = userRoutes;
