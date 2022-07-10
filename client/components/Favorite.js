import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

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

const AddFavorite = ({
  handleFavoriteClick,
  handleDeleteFavoriteClick,
  movieList,
  searchEnabled,
}) => {
  const [storedAsFavorite, setStoredAsFavorite] = useState(false);

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem("movieFavorites"));
    movieFavorites.forEach((favorite) => {
      favorite.title === movieList.title && setStoredAsFavorite(true);
    });
    // searchEnabled && setStoredAsFavorite(false);
  }, [storedAsFavorite]);


  const handleToggle = () => {
    setStoredAsFavorite(!storedAsFavorite);
  };
  return (
    <>
      {!storedAsFavorite ? (
        <Box onClick={handleToggle}>
          <Button
            onClick={() => handleFavoriteClick(movieList)}
            sx={styles.favoritesButton}
            variant="contained"
          >
            Add to Favorites
          </Button>
        </Box>
      ) : (
        <Box onClick={handleToggle}>
          <Button
            onClick={() => handleDeleteFavoriteClick(movieList)}
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
