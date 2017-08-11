const express = require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/main-controller');
const fighterHelpers = require('../services/fighter-helper');
const authHelpers = require('../services/auth/auth-helper');

mainRouter.get('/', fighterHelpers.getFighterData, mainController.fighter);
mainRouter.post('/', fighterHelpers.getFighterData, mainController.fighter);

mainRouter.get('/user', authHelpers.loginRequired, (req, res) => {
  res.render('user/user-list');
});

// mainRouter.get('/:id', authHelpers.loginRequired, mainController.show);
// mainRouter.get('/:id/edit', authHelpers.loginRequired, mainController.edit);
// mainRouter.put('/:id', authHelpers.loginRequired, mainController.update);
// mainRouter.delete('/:id', authHelpers.loginRequired, mainController.delete);

module.exports = mainRouter;
