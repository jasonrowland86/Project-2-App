-- \c mma_dash_dev;

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT
);

CREATE TABLE IF NOT EXISTS picks
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  user_id INT REFERENCES users(id)
);
