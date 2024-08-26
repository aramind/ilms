import { Checkbox } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TaskCheckBox = ({ course, task }) => {
  return (
    <Checkbox
      checked={course?.progress
        ?.flatMap((p) => p.completedTasks)
        ?.includes(task?._id)}
      icon={<CheckCircleOutlineIcon sx={localStyles.colorLightBlack} />}
      checkedIcon={<CheckCircleIcon sx={localStyles.colorMain} />}
    />
  );
};

export default TaskCheckBox;

const localStyles = {
  colorMain: {
    color: (theme) => theme.palette.secondary.main,
  },
  colorLightBlack: {
    color: (theme) => theme.palette.black.light,
  },
};
