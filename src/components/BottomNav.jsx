import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sideNavLinks from "../configs/sideNavLinks";

const BottomNav = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
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
        <Menu
          id="basic-menu"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {sideNavLinks?.map((option, index) => (
            <MenuItem key={index}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={2}
                onClick={() => navigate(`/${option?.text}`)}
              >
                <Typography color="primary.darkest">{option?.icon}</Typography>
                <Typography color={(theme) => theme.palette.black.darkest}>
                  {option?.text?.[0]?.toUpperCase() +
                    option?.text?.substring(1)}
                </Typography>
              </Stack>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Paper>
  );
};

export default BottomNav;
