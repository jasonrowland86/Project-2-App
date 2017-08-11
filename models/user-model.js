const db = require('../db/config');

const User = {};

User.findByUserName = (username) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [username]);
};

User.create = (user) => {
  console.log(user);
  return db.one(`
    INSERT INTO users
    (username, password_digest)
    VALUES ($1, $2)
    RETURNING *
  `, [user.username, user.password_digest]);
};

// User.create = (pick) => {
//   console.log(pick);
//   return db.one(`
//     INSERT INTO picks
//     (name, user_id)
//     VALUES ($1, $2)
//     RETURNING *
//   `, [pick.name, pick.user_id]);
// };


module.exports = User;
