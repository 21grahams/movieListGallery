import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieMap from "./MovieMap";
import CircularProgress from '@mui/material/CircularProgress';

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
    <div>
      <form onSubmit={handleMovieSearch}>
        <input
          value={searchedMovie}
          name="searchedMovie"
          placeholder="Search Movie Here"
          onChange={(e) => setSearchedMovie(e.target.value)}
        />
        <button onClick={handleMovieSearch}>Search</button>
      </form>
      {movies.results ? (
        movies.results.map((movie, index) => (
          <MovieMap movieList={movie} key={index} />
        ))
      ) : (
        <CircularProgress color="success" />
      )}
    </div>
  );
};

export default Search;
