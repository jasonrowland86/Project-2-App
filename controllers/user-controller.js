const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const Main = require('../models/main-model')
// const getFighterData = require('getFighterData');

const usersController = {};

usersController.fighter = (req, res)=>{
  console.log('Got fighter!');
  res.render('user/user-add', {
    fighter1: res.locals.fighter1,
    fighter2: res.locals.fighter2,
    user: req.user,
  });
};

usersController.index = (req, res) => {
  res.render('user/user-index', {
    user: req.user,
    data: 'User profile',
  });
};

usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};


module.exports = usersController;
