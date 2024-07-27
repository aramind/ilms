import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
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
        <BottomNavigation
          showLabels
          sx={{ bgcolor: (theme) => theme.palette.black.main }}
        >
          <BottomNavigationAction
            label="Store"
            icon={<StorefrontTwoToneIcon />}
            sx={{ color: (theme) => theme.palette.white.main }}
          />
          <BottomNavigationAction
            label="Dashboard"
            icon={<DashboardTwoToneIcon />}
            sx={{ color: (theme) => theme.palette.white.main }}
          />
          <BottomNavigationAction
            label="More"
            icon={<MoreHorizTwoToneIcon />}
            sx={{ color: (theme) => theme.palette.white.main }}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};

export default BottomNav;
