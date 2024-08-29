import { useTheme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DangerousTwoToneIcon from "@mui/icons-material/DangerousTwoTone";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Stack
      display="flex"
      alignItems="center"
      height="80vh"
      justifyContent="center"
      spacing={0.5}
    >
      <DangerousTwoToneIcon
        sx={{ fontSize: "10rem", color: theme.palette.error.main }}
      />
      <Typography sx={{ fontWeight: "bold", fontSize: "3rem" }}>
        {message}
      </Typography>
      <br />
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Stack>
  );
};

export default ErrorPage;
