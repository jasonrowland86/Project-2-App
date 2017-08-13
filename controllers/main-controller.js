const mainController = {};
const Main = require('../models/main-model');


mainController.fighter = (req, res, next)=>{
    console.log('Got fighter!');
    res.render('main/main', {
      fighter1: res.locals.fighter1,
      fighter2: res.locals.fighter2,
      user: req.user,
    });
}

mainController.index = (req, res) => {
  Main.findAll(req.user.id)
    .then(picks => {
      res.render('user/user-list', {
        picks: picks,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

// mainController.show = (req, res) => {
//   Main.findById(req.params.id)
//     .then(pick => {
//       res.render('user/user-single', {
//         pick: pick,
//       })
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// }


mainController.delete = (req, res) => {
  console.log('Deleted!');
  Main.destroy(req.params.id)
    .then(() => {
      res.redirect('/user');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}



module.exports = mainController;
