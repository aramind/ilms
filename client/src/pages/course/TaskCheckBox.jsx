import { Checkbox } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TaskCheckBox = ({
  course,
  topicId,
  taskId,
  handleToggleTaskCompletion,
}) => {
  return (
    <Checkbox
      checked={course?.progress
        ?.flatMap((p) => p.completedTopicTasks)
        ?.includes(taskId)}
      icon={<CheckCircleOutlineIcon sx={localStyles.colorLightBlack} />}
      onClick={() => handleToggleTaskCompletion(taskId, topicId, course?._id)}
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
