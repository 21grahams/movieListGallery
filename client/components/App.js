import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Search from "./Search";
import MovieMap from "./MovieMap";

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
        searchEnabled={searchEnabled}
        setSearchedEnabled={setSearchedEnabled}
        getPopularMovies={getPopularMovies}
      />
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
          <CircularProgress color="success" mt={25} />
        )}
      </Box>
    </>
  );
};

export default App;
