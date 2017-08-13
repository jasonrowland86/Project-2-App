// const mma = require('mma');
require('isomorphic-fetch');

// stack overflow options
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// mma.fighter('Jon Jones', function(data) {
//   console.log(data.name);
// })
//
//
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

  // let myFighter = toTitleCase(req.body.name1);
  // console.log(string);

  fetch('http://ufc-data-api.ufc.com/api/v3/us/fighters')
  .then(response => response.json())

  .then(response => {
    let fighter1 = response.filter(r =>
      `${r.first_name}` + ' ' + `${r.last_name}`  === req.body.name1 )
      console.log('fighter1', fighter1[0].first_name);
      res.locals.fighter1 = fighter1[0];


    let fighter2 = response.filter(r =>
    `${r.first_name}` + ' ' + `${r.last_name}`   === req.body.name2 )
      console.log('fighter2', fighter2[0].first_name);
      res.locals.fighter2 = fighter2[0];
      next();
  })
}


module.exports = {
  getFighterData: getFighterData,
};
