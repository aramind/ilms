import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const BottomNav = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        display: { md: "none" },
      }}
      elevation={3}
    >
      <Box sx={{ width: "100%" }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Recents" color={red[500]} />
          <BottomNavigationAction label="Favorites" />
          <BottomNavigationAction label="Nearby" />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};

export default BottomNav;
