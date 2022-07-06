import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";

const styles = {
  container: {
    m: 4,
    boxShadow: " 7px 10px 12px -5px rgba(0,0,0.56)",
    border: "1px solid",
    width: "200px",
    maxWidth: "100%",
    textAlign: "center",
    minHeight: "550px",
    position: "relative",
  },
  titleSpacing: {
    m: 2,
  },
  releaseDate: {
    p: 1,
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

const MovieMap = ({ movieList }) => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [storeFavorites, setStoreFavorites] = useState([]);

  const handleSubmitFavorites = (movie) => {
    const newMovie = {
      name: movie.title,
      id: movie.id,
    };
    axios
      .post("/postMovie", newMovie)
      .then((res) => toggleFav())
      .catch((err) => console.log("Error with Adding Favorite: ", err));

    getAllFavorites();
  };

  const getAllFavorites = () => {
    axios
      .get("/favoriteMovies")
      .then((res) => setStoreFavorites(res.data))
      .catch((err) =>
        console.log("Error with Favorite Movie Retrieval: ", err)
      );
  };

  const handleDeleteFavorites = () => {
    axios
      .delete(`/deleteMovie/${movieList.id}`)
      .then((res) => toggleFav())
      .catch((err) => console.log("Error with Favorite Removal", err));
  };

  const toggleFav = () => {
    setButtonToggle(!buttonToggle);
  };

  return (
    <Box container sx={styles.container}>
      <Box>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieList.poster_path}`}
          alt="please reload page"
          width={200}
          height={300}
        />
      </Box>
      <Box sx={styles.titleSpacing} component="h2">
        {movieList.title}
      </Box>
      <Box>
        <Typography sx={styles.releaseDate}>
          Released:{" "}
          <strong>
            {movieList.release_date
              ? movieList.release_date.slice(0, 4)
              : "No Information on Release Date"}
          </strong>
        </Typography>
      </Box>
      <Box>
        {!buttonToggle ? (
          <Button
            onClick={() => handleSubmitFavorites(movieList)}
            sx={styles.favoritesButton}
            variant="contained"
          >
            Add to Favorites
          </Button>
        ) : (
          <Button
            onClick={handleDeleteFavorites}
            sx={styles.deleteFavoritesButton}
          >
            Remove From Favorites
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default MovieMap;
