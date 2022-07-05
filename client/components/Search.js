import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import MovieMap from "./MovieMap";
import CircularProgress from "@mui/material/CircularProgress";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

const Search = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const handleMovieSearch = (e) => {
    e.preventDefault();
    axios
      .get(`/getMovies/${searchedMovie}`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Error With Movie Search", err));
    clearInput();
  };

  const handlePopularMovieSearch = () => {
    axios
      .get("/popularMovies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Error With Popular Movie Display", err));
  };

  useEffect(() => {
    handlePopularMovieSearch();
  }, []);

  const clearInput = () => {
    setSearchedMovie("");
  };

  return (
    <Box>
      <form onSubmit={handleMovieSearch}>
        <input
          value={searchedMovie}
          name="searchedMovie"
          placeholder="Search Movie Here"
          onChange={(e) => setSearchedMovie(e.target.value)}
        />
        <button onClick={handleMovieSearch}>Search</button>
      </form>
      <Box sx={styles.root}>
        {movies.results ? (
          movies.results.map((movie, index) => (
            <MovieMap movieList={movie} key={index} />
          ))
        ) : (
          <CircularProgress color="success" />
        )}
      </Box>
    </Box>
  );
};

export default Search;
