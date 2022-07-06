DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

\c movies;

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  movieID INT,
  name VARCHAR(1000)
);