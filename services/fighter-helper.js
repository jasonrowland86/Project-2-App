const mma = require('mma');
require('isomorphic-fetch');

// mma.fighter('Jon Jones', function(data) {
//   console.log(data.name);
// })


// function getFighterData(req, res, next) {
//   console.log('getting fighter data!');
//   mma.fighter(req.body.name1, function(data) {
//     res.locals.fighter1 = data;
//     console.log('fighter1', data.name);
//   });
//   mma.fighter(req.body.name2, function(data) {
//     res.locals.fighter2 = data;
//     console.log('fighter2', data.name);
//     next();
//   });
// }



function getFighterData(req, res, next) {
  fetch('http://ufc-data-api.ufc.com/api/v3/us/fighters')
  .then(response => response.json())
  .then(response => {
    let fighter1 = response.filter(r =>  r.nickname == req.body.name1 )
    console.log('fighter1', fighter1);
    res.locals.fighter1 = fighter1;
    // let fighter2 = response.filter(r =>  r.nickname == req.body.name2 )
  })
}


module.exports = {
  getFighterData: getFighterData,
};
