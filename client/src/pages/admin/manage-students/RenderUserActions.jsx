import { IconButton } from "@mui/material";
import React from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const RenderUserActions = ({ row }) => {
  const handleEdit = () => {};

  const handleConfirmDelete = () => {};
  return (
    <>
      <IconButton aria-label="edit" onClick={handleEdit} color="primary">
        <BorderColorRoundedIcon />
      </IconButton>

      <IconButton
        aria-label="delete"
        onClick={handleConfirmDelete}
        disabled={row?.STATUS === "deleted"}
        sx={{ color: (theme) => theme.palette.red.dark }}
      >
        <DeleteRoundedIcon />
      </IconButton>
    </>
  );
};

export default RenderUserActions;
