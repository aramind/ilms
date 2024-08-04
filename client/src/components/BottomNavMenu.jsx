import {
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
import sideNavLinks from "../configs/sideNavLinks";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import { useNavigate } from "react-router-dom";

const BottomNavMenu = ({ anchorEl, setAnchorEl, open }) => {
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="basic-menu"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseMenu}
      TransitionComponent={Zoom}
      TransitionProps={{ unmountOnExit: true, timeout: 300 }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
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
              {option?.text?.[0]?.toUpperCase() + option?.text?.substring(1)}
            </Typography>
          </Stack>
        </MenuItem>
      ))}
      <Divider
        sx={{
          opacity: "0.4",
          backgroundColor: (theme) => theme.palette.black.light,
          width: "100%",
          my: 1,
          height: 1,
        }}
      />
      <MenuItem>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
          onClick={() => navigate(`/signin`)}
        >
          <Typography color="primary.darkest">
            <ExitToAppTwoToneIcon />
          </Typography>
          <Typography color={(theme) => theme.palette.black.darkest}>
            Sign out
          </Typography>
        </Stack>
      </MenuItem>
    </Menu>
  );
};

export default BottomNavMenu;
