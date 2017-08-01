\c todo_review_dev;

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS fight_picks
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  category VARCHAR(255),
  completed BOOLEAN,
  user_id INT REFERENCES users(id)
);
