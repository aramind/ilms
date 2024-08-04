import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      width="100%"
      alignItems="center"
    >
      <Typography>Search</Typography>

      <Tooltip title="Sign out" placement="left-end">
        <IconButton
          onClick={() => navigate("/signin")}
          sx={{
            opacity: "0.7",
            color: (theme) => theme.palette.black.main,
            fontSize: "4rem",
            // "&:hover": {
            //   color: (theme) => theme.palette.black.lightest,
            // },
          }}
          aria-label="add an alarm"
          // size="large"
        >
          <ExitToAppTwoToneIcon
            sx={{
              // color: (theme) => theme.palette.primary.darkest,
              fontSize: "2rem",
              "&:hover": {
                color: (theme) => theme.palette.black.lightest,
              },
            }}
          />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default TopBar;
