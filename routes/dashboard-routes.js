const express = require('express');
const dashboardRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const dashboardController = require('../controllers/dashboard-controller');

dashboardRouter.get('/', authHelpers.loginRequired, dashboardController.index);
dashboardRouter.post('/', authHelpers.loginRequired, dashboardController.create);

dashboardRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('dashboard/dashboard-add');
});
dashboardRouter.get('/:id', authHelpers.loginRequired, dashboardController.show);
dashboardRouter.get('/:id/edit', authHelpers.loginRequired, dashboardController.edit);
dashboardRouter.put('/:id', authHelpers.loginRequired, dashboardController.update);
dashboardRouter.delete('/:id', authHelpers.loginRequired, dashboardController.delete);


module.exports = dashboardRouter;
