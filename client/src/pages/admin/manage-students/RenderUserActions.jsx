import { IconButton } from "@mui/material";
import React from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { red, teal } from "@mui/material/colors";

const RenderUserActions = ({ row }) => {
  const handleEdit = () => {};

  const handleConfirmDelete = () => {};
  return (
    <>
      <IconButton
        aria-label="edit"
        onClick={handleEdit}
        color="primary"
        sx={localStyles.editIcon}
      >
        <BorderColorRoundedIcon />
      </IconButton>

      <IconButton
        aria-label="delete"
        onClick={handleConfirmDelete}
        disabled={row?.STATUS === "deleted"}
        sx={localStyles.deleteIcon}
      >
        <DeleteRoundedIcon />
      </IconButton>
    </>
  );
};

export default RenderUserActions;

const localStyles = {
  editIcon: {
    "&:hover": {
      bgcolor: teal[100],
    },
  },
  deleteIcon: {
    color: (theme) => theme.palette.red.dark,
    "&:hover": {
      color: (theme) => theme.palette.red.dark,
      bgcolor: red[100],
    },
  },
};
