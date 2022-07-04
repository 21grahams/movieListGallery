import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  container: {
    p: 2,
    m: 2,
    boxShadow: " 7px 10px 12px -5px rgba(0,0,0.56)",
    border: "1px solid",
    width: "200px",
    maxWidth: "100%",
    textAlign: "center",
    minHeight: "500px",
  },
  titleSpacing: {
    mt: -1,
  },
  releaseDate: {
    pb: 2,
  },
  posterImage: {
    pb: 2,
  },
  overview: {
    mt: 5,
    textAlign: "center",
    width: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

const MovieMap = ({ movieList }) => {
  console.log("movieList: ", movieList);
  return (
    <Box>
      <Box sx={styles.container}>
        <Box sx={styles.titleSpacing} component="h2">
          {movieList.title}
        </Box>
        <Box sx={styles.releaseDate}>Released: {movieList.release_date.slice(0, 4)}</Box>
        <Box sx={styles.posterImage}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieList.poster_path}`}
            alt="please reload page"
            width={200}
            height={300}
          />
        </Box>
        <Typography sx={styles.overview}>{movieList.overview}</Typography>
      </Box>
    </Box>
  );
};

export default MovieMap;
