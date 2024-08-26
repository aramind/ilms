import React from "react";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import SmartDisplayTwoToneIcon from "@mui/icons-material/SmartDisplayTwoTone";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
// import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";
import { IconButton, Link } from "@mui/material";

const TaskAction = ({ action, onClickHandler, link }) => {
  // console.log(link);
  const renderTaskAction = () => {
    switch (action) {
      case "watch":
        return (
          <IconButton onClick={onClickHandler} variant="text" color="primary">
            <SmartDisplayTwoToneIcon />
          </IconButton>
        );
      case "answer":
        return (
          <Link
            href="https://www.indiabix.com/digital-electronics/integrated-circuit-logic-families/discussion-1225"
            target="_blank"
            className="centered-content"
          >
            <QuizTwoToneIcon color="primary" sx={{ ml: 1 }} />
          </Link>
        );
      case "read":
        return link ? (
          <Link
            href={link}
            target="_blank"
            className="centered-content"
            rel="noreferrer"
          >
            <MenuBookTwoToneIcon color="primary" sx={{ ml: 1 }} />
          </Link>
        ) : null;
      default:
        return null;
    }
  };
  return renderTaskAction();
};

export default TaskAction;
