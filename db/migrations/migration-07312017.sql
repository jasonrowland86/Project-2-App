\c mma_dashboard_dev;

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS picks
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  nickname VARCHAR(255),
  weight_class VARCHAR(255),
  -- winpick BOOLEAN,
  user_id INT REFERENCES users(id)
);
