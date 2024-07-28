import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";

import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavMenu from "./BottomNavMenu";
import { prefBottomNavOptions } from "../configs/prefBottomNavOptions";

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
          {prefBottomNavOptions?.map((option, i) => (
            <BottomNavigationAction
              onClick={() => navigate(`/${option?.text?.toLowerCase()}`)}
              label={
                option?.text?.[0]?.toUpperCase() + option?.text?.substring(1)
              }
              icon={option?.icon}
              sx={{ color: (theme) => theme.palette.white.main }}
            />
          ))}
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
