import React from "react";
import { IconButton } from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const DeleteIconButton = ({ onClick, size }) => {
  return (
    <IconButton
      sx={{ color: (theme) => theme.palette.red.dark }}
      onClick={onClick}
    >
      {/* <ClearRoundedIcon fontSize="small" /> */}
      <DeleteTwoToneIcon fontSize={size} />
    </IconButton>
  );
};

export default DeleteIconButton;
