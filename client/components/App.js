import React from "react";
import Search from "./Search";
import { Box } from "@mui/material";

const styles = {
  movieTitle: {
    textAlign: "center",
    mt: -2,
  },
};

const App = () => {
  return (
    <Box >
      <Box component="h1" sx={styles.movieTitle}>
        Movie Gallery App
      </Box>
      <Search />
    </Box>
  );
};

export default App;
