import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import React from "react";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
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
            onClick={() => navigate("/store")}
            label="Store"
            icon={<StorefrontTwoToneIcon />}
            sx={{ color: (theme) => theme.palette.white.main }}
          />
          <BottomNavigationAction
            onClick={() => navigate("/dashboard")}
            label="Dashboard"
            icon={<DashboardTwoToneIcon />}
            sx={{ color: (theme) => theme.palette.white.main }}
          />
          <BottomNavigationAction
            onClick={() => navigate("/courses")}
            label="Courses"
            icon={<MenuBookTwoToneIcon />}
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
