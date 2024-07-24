import { Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const TextFieldError = ({ errMsg }) => {
  return (
    <Stack sx={{ minHeight: "1.5rem" }} alignItems="flex-start" px={1}>
      <Typography
        variant="caption"
        color={red[400]}
        sx={{ fontSize: "0.6rem" }}
        width={1}
        textAlign="end"
      >
        {errMsg || ""}
      </Typography>
    </Stack>
  );
};

export default TextFieldError;
