import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Search from "./components/Search";
import MovieMap from "./components/MovieMap";

const styles = {
  titleText: {
    textAlign: "center",
    mt: -1,
    color: "white",
    cursor: "pointer",
  },
  movieOuterContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchEnabled, setSearchedEnabled] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [toggleFavorites, setToggleFavorites] = useState(false);

  useEffect(() => {
    getFavoriteMovies();
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    axios
      .get("/popularMovies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Error With Popular Movie Display", err));
    setSearchedEnabled(false);
  };

  const getFavoriteMovies = () => {
    axios
      .get("/favoriteMovies")
      .then((res) => setFavorites(res.data))
      .catch((err) => console.log("Error with Favorite Movies: ", err));
  };

  return (
    <>
      <Typography
        variant="h6"
        component="h1"
        sx={styles.titleText}
        onClick={getPopularMovies}
      >
        Movielist Gallery
      </Typography>
      <Search
        setMovies={setMovies}
        toggleFavorites={toggleFavorites}
        setToggleFavorites={setToggleFavorites}
        searchEnabled={searchEnabled}
        setSearchedEnabled={setSearchedEnabled}
        getPopularMovies={getPopularMovies}
      />
      {toggleFavorites &&
        favorites.rows.map((favorite) => (
          <Typography key={favorite.name}>{favorite.name}</Typography>
        ))}
      <Box sx={styles.movieOuterContainer}>
        {movies.results ? (
          movies.results.map((movie, index) => (
            <MovieMap
              key={index}
              movieList={movie}
              favorites={favorites.rows}
              setFavorites={setFavorites}
              getFavoriteMovies={getFavoriteMovies}
            />
          ))
        ) : (
          <Box mt={25}>
            <CircularProgress color="success" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default App;
