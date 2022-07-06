const pool = require("./index.js");

//===========================
/////// GET ALL DATA ////////
//===========================

// get favorite movie
const favoriteMovie = (cb) => {
  pool.query("SELECT * from favorites", cb);
};

// post favorite movie
const postMovie = (data, cb) => {
  pool.query("INSERT INTO favorites (movieId, name) VALUES ($1, $2)", data, cb);
};

// delete favorite movie
const deleteMovie = (id, cb) => {
  pool.query(`DELETE FROM favorites WHERE MovieId=${id}`, cb);
};

module.exports = {
  postMovie,
  deleteMovie,
  favoriteMovie
};
