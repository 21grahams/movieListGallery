import React from "react";
import { Box, Typography } from "@mui/material";

import AddFavorite from "./Favorite";

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
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.1)",
      border: "2px red solid",
    },
  },
  titleSpacing: {
    m: 2,
  },
  releaseDate: {
    p: 1,
  },
};

const MovieMap = ({
  movieList,
  favorites,
  getFavoriteMovies,
}) => {
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
        <AddFavorite
          movieList={movieList}
          favoriteId={favoriteId}
          getFavoriteMovies={getFavoriteMovies}
        />
      </Box>
    </Box>
  );
};

export default MovieMap;
