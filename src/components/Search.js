import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Favorites from "../pages/Favorites";

const styles = {
  root: {
    display: "flex",
    bgcolor: "black",
    color: "white",
    justifyContent: "space-between",
    p: 4,
    ml: -2,
    mr: -2,
  },
};

const Search = ({
  setMovies,
  searchEnabled,
  setSearchedEnabled,
  getPopularMovies,
}) => {
  const [searchedMovie, setSearchedMovie] = useState("");

  const handleMovieSearch = (e) => {
    e.preventDefault();
    axios
      .get(`/searchedMovies/${searchedMovie}`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Error With Movie Search", err));
    clearInput();
    setSearchedEnabled(true);
  };

  const clearInput = () => {
    setSearchedMovie("");
  };

  return (
    <>
      <Box sx={styles.root}>
        <Link to="/favorites">
          <Button variant="outlined" component="h3">
            Favorites
          </Button>
        </Link>
        <Routes>
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
        <form onSubmit={handleMovieSearch}>
          <input
            value={searchedMovie}
            name="searchedMovie"
            placeholder="Search Movie Here..."
            onChange={(e) => setSearchedMovie(e.target.value)}
          />
          {searchEnabled && (
            <Button
              variant="outlined"
              size="small"
              sx={{ ml: 1 }}
              onClick={getPopularMovies}
            >
              Back
            </Button>
          )}
          <Button
            variant="outlined"
            size="small"
            sx={{ ml: 1 }}
            onClick={handleMovieSearch}
          >
            Search
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Search;
