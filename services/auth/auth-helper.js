const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/user');
  return next();
}

function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login');
  return next();
}

function alreadyRegistered(req, res, next) {
  console.log('registered');
  if (req.user) {
    //alert('You\'re already registered!');
    return res.redirect('/auth/login');
  }
  return next();
  //if user input already exist then
  //alert already registered
  //redirect to log in
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  alreadyRegistered,
};
