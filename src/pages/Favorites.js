import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <Box>
      The Favorites Display Page
      <Link to="/">Home</Link>
    </Box>
  );
};

export default Favorites;
