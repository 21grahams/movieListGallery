import { Box, Button, Typography } from "@mui/material";
import React from "react";

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
};

const MovieMap = ({ movieList }) => {
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
        <Button sx={styles.favoritesButton} variant="contained">
          Add to Favorites
        </Button>
      </Box>
    </Box>
  );
};

export default MovieMap;
