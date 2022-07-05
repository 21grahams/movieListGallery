import { Typography } from "@mui/material";
import React from "react";
import Search from "./Search";

const styles = {
  titleText: {
    textAlign: "center",
    mt: -2,
    color: "white",
  },
};

const App = () => {
  return (
    <>
      <Typography variant="h6" component="h1" sx={styles.titleText}>
        Movielist Gallery
      </Typography>
      <Search />
    </>
  );
};

export default App;
