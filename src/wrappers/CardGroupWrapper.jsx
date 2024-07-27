import { Stack } from "@mui/material";
import React from "react";

const CardGroupWrapper = ({ children }) => {
  return (
    <Stack
      direction="row"
      justifyContent={{ xs: "center", md: "flex-start" }}
      // spacing={2}
      gap={2}
      width="100%"
      flexWrap="wrap"
    >
      {children}
    </Stack>
  );
};

export default CardGroupWrapper;
