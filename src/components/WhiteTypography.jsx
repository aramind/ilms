import { Typography } from "@mui/material";
import React from "react";

const WhiteTypography = ({ ...props }) => {
  return <Typography color={(theme) => theme.palette.white.dark} {...props} />;
};

export default WhiteTypography;
