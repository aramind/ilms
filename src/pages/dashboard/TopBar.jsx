import { Stack, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (
    <Stack justifyContent="space-between" direction="row" width="100%">
      <Typography>Search</Typography>
      <Stack direction="row" spacing={2}>
        <Typography>Settings</Typography>
        <Typography>Profile</Typography>
        <Typography>Logout</Typography>
      </Stack>
    </Stack>
  );
};

export default TopBar;
