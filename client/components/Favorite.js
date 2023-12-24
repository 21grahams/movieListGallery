import React from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";

const styles = {
  overlay: {
    color: "white",
    position: "absolute",
    mx: 1,
    right: 30,
    transition: "0.8s ease",
    background: "rgba(0, 0, 0, 0.8)",
    bottom: 10,
    opacity: 0.1,
    "&:hover": {
      cursor: "pointer",
      opacity: 1,
    },
  },
  favoritesButton: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
  deleteFavoritesButton: {
    bgcolor: "red",
    color: "white",
    position: "absolute",
    mx: 1,
    right: 0,
    bottom: 10,
  },
};

const AddFavorite = ({ movieList, favoriteId, getFavoriteMovies }) => {
  const handleFavoriteMovie = (movie) => {
    const favoriteMovie = {
      id: movie.id,
      name: movie.original_title,
    };

    axios
      .post("/postMovie", favoriteMovie)
      .then(getFavoriteMovies())
      .catch((err) => console.log("Error Saving Favorite Movie: ", err));
  };

  const handleRemoveFavoriteMovie = (movie) => {
    axios
      .delete(`/deleteMovie/${movie.id}`)
      .then(getFavoriteMovies())
      .catch((err) => console.log("Error Deleting Favorite Movie: ", err));
  };

  return (
    <>
      {!favoriteId.includes(movieList.id) ? (
        <Box>
          <Button
            onClick={() => handleFavoriteMovie(movieList)}
            sx={styles.favoritesButton}
            variant="contained"
          >
            Add to Favorites
          </Button>
        </Box>
      ) : (
        <Box>
          <Button
            onClick={(e) => handleRemoveFavoriteMovie(movieList)}
            sx={styles.deleteFavoritesButton}
          >
            Remove From Favorites
          </Button>
        </Box>
      )}
    </>
  );
};

export default AddFavorite;
