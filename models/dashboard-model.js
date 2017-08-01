const db = require('../db/config');
const Dash = {};

Dash.findAll = (id) => {
  return db.query(`
    SELECT * FROM picks
    WHERE user_id = $1
    `, [id]);
};

module.exports = Dash;
