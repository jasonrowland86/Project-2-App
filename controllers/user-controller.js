const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const Main = require('../models/main-model')
// const getFighterData = require('getFighterData');

const usersController = {};

usersController.index = (req, res) => {
  res.render('user/user-index', {
    user: req.user,
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
// ***********************************

usersController.add = (req, res) => {
  console.log('adding', req.body)
  Main.create({
    name: name1,
    // weight_class: fighter1.weight_class,
    user_id: req.user.id,
  }).then(pick => {
    res.redirect('/user');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

// usersController.add2 = (req, res) => {
//   console.log('adding', req.body)
//   Main.create({
//     name: name2,
//     // weight_class: fighter1.weight_class,
//     user_id: req.user.id,
//   }).then(pick => {
//     console.log('pick', pick);
//     res.render('user/user-list', {
//       user: req.user,
//       picks: req.picks,
//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// }

module.exports = usersController;
