import { BottomNavigationAction, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import sideNavLinks from "../configs/sideNavLinks";

const BottomNavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <BottomNavigationAction
        onClick={handleClick}
        label="More"
        icon={<MoreHorizTwoToneIcon />}
        sx={{ color: (theme) => theme.palette.white.main }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {sideNavLinks?.map((option, index) => (
          <MenuItem key={index}>{option?.text}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default BottomNavMenu;
