import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const AddFavorite = ({
  handleFavoriteClick,
  handleDeleteFavoriteClick,
  movieList,
  favorites
}) => {
  const [activeFavorite, setActiveFavorite] = useState(false);

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

  const toggleFav = () => {
    setActiveFavorite(!activeFavorite);
  };

  return (
    <>
      {!activeFavorite && favorites ? (
        <Box onClick={toggleFav}>
          <Button
            onClick={() => handleFavoriteClick(movieList)}
            sx={styles.favoritesButton}
            variant="contained"
          >
            Add to Favorites
          </Button>
        </Box>
      ) : (
        <Box onClick={toggleFav}>
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
