import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import React from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.black.lightest,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ProgressIndicator = ({ value }) => {
  return <BorderLinearProgress variant="determinate" value={value} />;
};

export default ProgressIndicator;
