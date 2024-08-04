import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BottomNavMenu from "./BottomNavMenu";
import useIsLandsCape from "../hooks/useIsLandsCape";

const BottomNavSD = () => {
  const isLandscape = useIsLandsCape();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  if (!isLandscape) {
    return null;
  }

  return (
    <>
      <Button
        variant="contained"
        className="outlined"
        onClick={handleOpenMenu}
        // color="primary"
        aria-label="add to shopping cart"
        sx={{
          display: { md: "none" },
          opacity: "0.5",
          position: "fixed",
          bottom: 16,
          right: 16,
          width: "2rem",
          //   height: "3rem",
          p: "5px",
          borderRadius: "50%",
          backgroundColor: (theme) => theme.palette.primary.darkest,
        }}
      >
        <MenuRoundedIcon
          sx={{
            fontSize: "3rem",
            color: (theme) => theme.palette.primary.special,
          }}
        />
      </Button>
      <BottomNavMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        open={open}
      />
    </>
  );
};

export default BottomNavSD;
