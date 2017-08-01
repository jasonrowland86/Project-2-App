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

dashController.show = (req, res) => {
  Dash.findById(req.params.id)
    .then(pick => {
      res.render('dashboard/dashboard-single', {
        todo: todo,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

dashController.create = (req, res) => {
  Dash.create({
    match: req.body.title,
    pick: req.body.description,
    category: req.body.category,
    user_id: req.user.id,
  }).then(pick => {
    console.log(pick);
    res.redirect('/dashboard');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

dashController.edit = (req, res) => {
  Dash.findById(req.params.id)
    .then(pick => {
      res.render('dashboard/dashboard-edit', {
        pick: pick,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

dashController.update = (req, res) => {
  Dash.update({
    name: req.body.name,
    weight_class: req.body.weight_class,
    user_id: req.user.id,
  }, req.params.id).then(pick => {
    res.redirect('/dashboard');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

dashController.delete = (req, res) => {
  Dash.destroy(req.params.id)
    .then(() => {
      res.redirect('/dashboard');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

module.exports = dashController;
