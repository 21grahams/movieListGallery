import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  titleSpacing: {
    p: 2,
    m: 2,
    boxShadow: " 7px 10px 12px -5px rgba(0,0,0.56)",
    border: "1px solid",
    width: "540px",
    maxWidth: "100%",
    textAlign: "center",
  },
  overview: {
    mt: 2,
  },
};

const MovieMap = ({ movieList }) => {
  console.log('movieList: ', movieList)
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleSpacing}>
        <Box component="h2">{movieList.title}</Box>
        <Box>Released: {movieList.release_date.slice(0, 4)}</Box>
        <Box>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieList.poster_path}`}
            alt="please reload page"
            width={285}
            height={385}
          />
        </Box>
        <Box sx={styles.overview}>{movieList.overview}</Box>
      </Box>
    </Box>
  );
};

export default MovieMap;
