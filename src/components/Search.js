import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";

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
  toggleFavorites,
  setToggleFavorites,
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
        <Button
          variant="outlined"
          component="h3"
          onClick={() => setToggleFavorites(!toggleFavorites)}
        >
          {toggleFavorites ? "Home" : "Favorites"}
        </Button>
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
