import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const WhiteTypography = ({ children, ...props }) => {
  return (
    <Typography color={grey[300]} {...props}>
      {children}
    </Typography>
  );
};

export default WhiteTypography;
