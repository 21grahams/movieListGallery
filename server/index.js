const express = require("express");
const app = express();
const queries = require("../database/index.js");
const config = require("../config/config.js");
const axios = require("axios");
const cors = require("cors");

// middleware
// serve static files from dist dir
app.use(express.static(__dirname + "/../dist"));
// use express.json for parsing JSON
app.use(express.json());
// use cors middleware for enabling CORS with various options
app.use(cors());

// CRUD REQUESTS BELOW

// get POPULAR movies
app.get(`/popularMovies`, (req, res) => {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${config.config}&language=en-US&page=1`,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});


// get SEARCHED movies
app.get(`/getMovies/:id`, (req, res) => {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${config.config}&query=${req.params.id}`,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});

// set port where server will listen
const port = 3000;

// tell server to listen on predefined port
app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
