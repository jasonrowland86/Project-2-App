const Dash = require('../models/todo');

const dashController = {};

dashController.index = (req, res) => {
  Dash.findAll(req.user.id)
    .then(picks => {
      res.render('dashboard/dashboard-index', {
        data: picks,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

// dashController.create = (req, res) => {
//   Dash.create({
//     title: req.body.title,
//     description: req.body.description,
//     category: req.body.category,
//     user_id: req.user.id,
//   }).then(todo => {
//     console.log(todo);
//     res.redirect('/dashboard');
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// };

module.exports = dashController;
