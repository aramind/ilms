import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const WhiteTypography = ({ ...props }) => {
  return <Typography sx={{ color: grey[300] }} {...props} />;
};

export default WhiteTypography;
