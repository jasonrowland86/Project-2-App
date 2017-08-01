const db = require('../db/config');
const Dash = {};

Dash.findAll = (id) => {
  return db.query(`
    SELECT * FROM picks
    WHERE user_id = $1
    `, [id]);
};

Dash.create = (pick) => {
  return db.one(`
    INSERT INTO picks
    (name, weight_class, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [pick.title, pick.weight_class, pick.user_id]);
};



Dash.findById = (id) => {
  return db.oneOrNone(`
  SELECT * FROM picks
  WHERE id = $1
  `, [id]);
};

Dash.update = (pick, id) => {
  return db.one(`
    UPDATE picks SET
    name = $1,
    weight_class = $2,
    user_id = $3
    WHERE id = $4
    RETURNING *
  `, [pick.name, pick.weight_class, pick.user_id, id]);
};

Dash.destroy = (id) => {
  return db.none(`
    DELETE FROM picks
    WHERE id = $1
  `, [id])
}


module.exports = Dash;
