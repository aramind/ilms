import { IconButton } from "@mui/material";
import React from "react";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { red } from "@mui/material/colors";

const RenderUserActions = ({ row }) => {
  const handleEdit = () => {};

  const handleConfirmDelete = () => {};
  return (
    <>
      <IconButton aria-label="edit" onClick={handleEdit} color="primary">
        <EditTwoToneIcon />
      </IconButton>

      <IconButton
        aria-label="delete"
        onClick={handleConfirmDelete}
        disabled={row?.STATUS === "deleted"}
      >
        <DeleteTwoToneIcon />
      </IconButton>
    </>
  );
};

export default RenderUserActions;
