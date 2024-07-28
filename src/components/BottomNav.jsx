import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavMenu from "./BottomNavMenu";

const BottomNav = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        // zIndex: 1200,
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
            onClick={handleOpenMenu}
            label="More"
            icon={<MoreHorizTwoToneIcon />}
            sx={{ color: (theme) => theme.palette.white.main }}
          />
        </BottomNavigation>
        <BottomNavMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          open={open}
        />
      </Box>
    </Paper>
  );
};

export default BottomNav;
