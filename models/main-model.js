const db = require('../db/config');
const Main = {};

Main.findAll = (id) => {
  return db.query(`
    SELECT * FROM picks
    WHERE user_id = $1
    `, [id]);
};

Main.create = (pick) => {
  console.log(pick);
  return db.one(`
    INSERT INTO picks
    (name, user_id)
    VALUES ($1, $2)
    RETURNING *
  `, [pick.name, pick.user_id]);
};



Main.findById = (id) => {
  return db.oneOrNone(`
  SELECT * FROM picks
  WHERE id = $1
  `, [id]);
};

Main.update = (pick, id) => {
  return db.one(`
    UPDATE picks SET
    name = $1,
    user_id = $2,
    WHERE id = $3
    RETURNING *
  `, [pick.name, pick.user_id, id]);
};

Main.destroy = (id) => {
  return db.none(`
    DELETE FROM picks
    WHERE id = $1
  `, [id])
}


module.exports = Main;
