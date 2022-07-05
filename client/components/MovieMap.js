import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const styles = {
  container: {
    m: 2,
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
    position: "absolute",
    right: 50,
    bottom: 80,
  },
  favoritesButton: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
};

const MovieMap = ({ movieList }) => {
  console.log("movieList: ", movieList);
  return (
    <Box container sx={styles.container}>
      <Grid container>
        <Grid item lg={12}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieList.poster_path}`}
            alt="please reload page"
            width={200}
            height={300}
          />
        </Grid>
        <Grid item lg={12} sx={styles.titleSpacing} component="h2">
          {movieList.title}
        </Grid>
        <Grid item lg={12}>
          <Typography sx={styles.releaseDate}>
            Released: <strong>{movieList.release_date.slice(0, 4)}</strong>
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <Button sx={styles.favoritesButton} variant="contained">
            Add to Favorites
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieMap;
