const express = require("express");
const app = express();
const queries = require("../database/index.js");
const cors = require("cors");

// middleware
// serve static files from dist dir
app.use(express.static(__dirname + "/../dist"));
// use express.json for parsing JSON
app.use(express.json());
// use cors middleware for enabling CORS with various options
app.use(cors());

// CRUD REQUESTS BELOW

// set port where server will listen
const port = 3000;

// tell server to listen on predefined port
app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
