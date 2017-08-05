const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
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

usersController.show = (req, res) => {
  User.findById(req.params.id)
    .then(pick => {
      res.render('user/user-single', {
        pick: pick,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

usersController.create = (req, res) => {
  User.create({
    match: req.body.title,
    pick: req.body.description,
    category: req.body.category,
    user_id: req.user.id,
  }).then(pick => {
    console.log(pick);
    res.redirect('/user');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

usersController.edit = (req, res) => {
  User.findById(req.params.id)
    .then(pick => {
      res.render('user/user-edit', {
        pick: pick,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

usersController.update = (req, res) => {
  User.update({
    name: req.body.name,
  }, req.params.id).then(pick => {
    res.redirect('/user');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

usersController.delete = (req, res) => {
  User.destroy(req.params.id)
    .then(() => {
      res.redirect('/user');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

module.exports = usersController;
