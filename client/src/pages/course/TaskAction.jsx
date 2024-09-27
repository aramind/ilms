import React from "react";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import SmartDisplayTwoToneIcon from "@mui/icons-material/SmartDisplayTwoTone";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
// import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";
import { IconButton } from "@mui/material";

const TaskAction = ({ action, onClickHandler, link }) => {
  // console.log(link);
  const renderTaskAction = () => {
    switch (action) {
      case "watch":
        return (
          // <IconButton onClick={onClickHandler} variant="text" color="primary">
          <IconButton variant="text" color="primary">
            <SmartDisplayTwoToneIcon />
          </IconButton>
        );
      case "answer":
        return (
          <a
            href={link}
            target="_blank"
            className="centered-content"
            rel="noreferrer"
          >
            <QuizTwoToneIcon color="primary" sx={{ ml: 1 }} />
          </a>
        );
      case "read":
        return link ? (
          <a
            href={link}
            target="_blank"
            className="centered-content"
            rel="noreferrer"
          >
            <MenuBookTwoToneIcon color="primary" sx={{ ml: 1 }} />
          </a>
        ) : null;
      default:
        return null;
    }
  };
  return renderTaskAction();
};

export default TaskAction;
