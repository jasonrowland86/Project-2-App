const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/user-controller');
const authHelpers = require('../services/auth/auth-helper');
const fighterHelpers = require('../services/fighter-helper');
const mainController = require('../controllers/main-controller');


userRoutes.post('/', authHelpers.loginRequired, usersController.add);
userRoutes.get('/', authHelpers.loginRequired, usersController.index);

//
// userRoutes.post('/', authHelpers.loginRequired, mainController.add);
// userRoutes.post('/', authHelpers.loginRequired, mainController.create2);
//
// userRoutes.get('/user',(req,res)=>{
//   res.render('user/user-list',{})
// })
// //
// userRoutes.get('/:id', mainController.show)
// userRoutes.put('/:id', mainController.update)

module.exports = userRoutes;
