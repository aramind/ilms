import { IconButton, Stack } from "@mui/material";
import React from "react";
import Sponsors from "./Sponsors";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SponsorsBox = () => {
  return (
    <Stack
      direction="row"
      pt={0.5}
      pb={1}
      pl={1}
      width="200px"
      alignItems="flex-start"
      justifyContent="space-between"
      sx={{
        borderRadius: "0.2rem",
        zIndex: "100",
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        bgcolor: (theme) => theme.palette.white.light,
        opacity: "0.5",
      }}
    >
      <Sponsors />
      <IconButton size="small">
        {" "}
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default SponsorsBox;
