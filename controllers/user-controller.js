const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = (req, res) => {
  res.json({
    user: req.user,
    data: 'User profile',
  });
};

usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password: hash,
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
