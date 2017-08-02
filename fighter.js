var mma = require('mma');

let fighter = {};

 mma.fighter("Connor MacGreggor", function(data) {
    console.log(
      data.name,
      data.weight_class,
      data.height,
      data.weight,
      data.record
    );
    fighter = {
      name: data.name,
      weight_class: data.weight_class,
      weight: data.weight,
      record: data.record
    }
    console.log(fighter.name);
});


// function stats() {
//   console.log(`${data.name}, ${data.weight_class}`);
// }
