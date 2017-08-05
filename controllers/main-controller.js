const mainController = {};

mainController.fighter = (req, res)=>{
    console.log('Got fighter!');
    res.render('main/main', {
      fighter1: res.locals.fighter1,
      fighter2: res.locals.fighter2,
      user: req.user,
    })
    // .catch(err => {
    //   console.log(err);
    //   res.status(500);
    //   res.render('main/main-err', {
    //   message: 'Fighter not found!',
    //   user: req.user,
    // });
  // });
};

// mainController.index = (req, res) => {
//   Main.findAll(req.user.id)
//     .then(picks => {
//       res.render('main/main-index', {
//         data: picks,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };
//
//
// mainController.show = (req, res) => {
//   Main.findById(req.params.id)
//     .then(pick => {
//       res.render('main/main-single', {
//         pick: pick,
//       })
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// }
//
// mainController.create = (req, res) => {
//   Main.create({
//     match: req.body.title,
//     pick: req.body.description,
//     category: req.body.category,
//     user_id: req.user.id,
//   }).then(pick => {
//     console.log(pick);
//     res.redirect('/main');
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// };
//
// mainController.edit = (req, res) => {
//   Main.findById(req.params.id)
//     .then(pick => {
//       res.render('main/main-edit', {
//         pick: pick,
//       })
//     }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// }
//
// mainController.update = (req, res) => {
//   Main.update({
//     name: req.body.name,
//     weight_class: req.body.weight_class,
//     user_id: req.user.id,
//   }, req.params.id).then(pick => {
//     res.redirect('/main');
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// }
//
// mainController.delete = (req, res) => {
//   Main.destroy(req.params.id)
//     .then(() => {
//       res.redirect('/main');
//     }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// }

module.exports = mainController;
