import React from "react";
import { Box, Typography } from "@mui/material";

import AddFavorite from "./AddFavorite";

const styles = {
  container: {
    m: { xs: 6, sm: 4 },
    boxShadow: " 7px 10px 12px -5px rgba(0,0,0.56)",
    border: "1px solid",
    width: 200,
    maxWidth: "100%",
    textAlign: "center",
    minHeight: "550px",
    position: "relative",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      border: "2px red solid",
    },
  },
  titleSpacing: {
    p: 2,
  },
  releaseDate: {
    position: "absolute",
    left: 40,
    bottom: 80,
  },
};

const MovieMap = ({ movieList, favorites, getFavoriteMovies }) => {
  let favoriteId = [];
  favorites && favorites?.map((favorite) => favoriteId.push(favorite.movieid));

  return (
    <Box sx={styles.container}>
      <Box>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieList.poster_path}`}
          alt="please reload page"
          width={200}
          height={300}
        />
      </Box>
      <Box sx={styles.titleSpacing} component="h3">
        {movieList.title}
      </Box>
      <Box>
        <Typography sx={styles.releaseDate}>
          Released:{" "}
          <strong style={{color: 'white'}}>
            {movieList.release_date
              ? movieList.release_date.slice(0, 4)
              : "No Information on Release Date"}
          </strong>
        </Typography>
      </Box>
      <AddFavorite
        movieList={movieList}
        favoriteId={favoriteId}
        getFavoriteMovies={getFavoriteMovies}
      />
    </Box>
  );
};

export default MovieMap;
