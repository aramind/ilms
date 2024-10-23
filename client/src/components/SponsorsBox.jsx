import { IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sponsors from "./Sponsors";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SponsorsBox = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);
  const handleCloseSponsorBox = () => {
    setVisible(false);
  };

  if (!visible) {
    return;
  }

  return (
    <Stack
      direction="row"
      pt={0.5}
      pb={1}
      pl={1}
      width="250px"
      alignItems="flex-start"
      justifyContent="space-between"
      sx={{
        borderRadius: "0.2rem",
        zIndex: "100",
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        bgcolor: (theme) => theme.palette.white.light,
        opacity: "0.2",
        "&:hover": {
          transition: "all 0.3s ease-in-out", // Smooth transition
          opacity: "0.9",
        },
      }}
    >
      <Sponsors />
      <IconButton size="small" onClick={handleCloseSponsorBox}>
        {" "}
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default SponsorsBox;
