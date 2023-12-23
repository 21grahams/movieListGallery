import { Typography } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import axios from "axios";

const styles = {
  titleText: {
    textAlign: "center",
    mt: -2,
    color: "white",
    cursor: "pointer",
  },
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchEnabled, setSearchedEnabled] = useState(false);

  const handleHome = () => {
    axios
      .get("/popularMovies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Error With Popular Movie Display", err));
    setSearchedEnabled(false);
  };

  return (
    <>
      <Typography
        variant="h6"
        component="h1"
        sx={styles.titleText}
        onClick={handleHome}
      >
        Movielist Gallery
      </Typography>
      <Search
        movies={movies}
        setMovies={setMovies}
        searchEnabled={searchEnabled}
        setSearchedEnabled={setSearchedEnabled}
        handleHome={handleHome}
      />
    </>
  );
};

export default App;
