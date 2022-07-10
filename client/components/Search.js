import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MovieMap from "./MovieMap";
import CircularProgress from "@mui/material/CircularProgress";
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
  movieOuterContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

const Search = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchEnabled, setSearchedEnabled] = useState(false);
  
  useEffect(() => {
    handlePopularMovieSearch();
  }, []);
  
  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('movieFavorites')
      );
      setFavorites(movieFavorites);
    }, []);
    
    const saveToLocalStorage = (items) => {
		localStorage.setItem('movieFavorites', JSON.stringify(items));
	};

  const handleMovieSearch = (e) => {
    e.preventDefault();
    axios
      .get(`/searchedMovies/${searchedMovie}`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Error With Movie Search", err));
    clearInput();
    setSearchedEnabled(true)
  };

  const handlePopularMovieSearch = () => {
    axios
      .get("/popularMovies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Error With Popular Movie Display", err));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorites) => favorites.title !== movie.title
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const clearInput = () => {
    setSearchedMovie("");
  };

  return (
    <>
      <Box sx={styles.root}>
        <Typography variant="h6" component="h3">
          Favorites
        </Typography>
        <form onSubmit={handleMovieSearch}>
          <input
            value={searchedMovie}
            name="searchedMovie"
            placeholder="Search Movie Here..."
            onChange={(e) => setSearchedMovie(e.target.value)}
          />
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
      <Box sx={styles.movieOuterContainer}>
        {movies.results ? (
          movies.results.map((movie, index) => (
            <MovieMap
              movieList={movie}
              key={index}
              handleFavoriteClick={addFavoriteMovie}
              handleDeleteFavoriteClick={removeFavoriteMovie}
              searchEnabled={searchEnabled}
              />
            ))
        ) : (
          <CircularProgress color="success" />
        )}
      </Box>
    </>
  );
};

export default Search;
