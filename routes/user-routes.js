const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helper');
const fighterHelpers = require('../services/fighter-helper');
const mainController = require('../controllers/main-controller');


userRouter.post('/', authHelpers.loginRequired, usersController.add);
userRouter.get('/', authHelpers.loginRequired, usersController.index);

userRouter.delete('/:id', authHelpers.loginRequired, mainController.delete);


module.exports = userRouter;
