import { LinearProgress, linearProgressClasses } from "@mui/material";
import React from "react";

const ProgressIndicator = ({ value, height = 10, borderRadius = 5 }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: height,
        borderRadius: borderRadius,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: (theme) => theme.palette.black.lightest,
        },
        [`& .${linearProgressClasses.bar}`]: {
          // borderRadius: 5,
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      }}
    />
  );
};

export default ProgressIndicator;
