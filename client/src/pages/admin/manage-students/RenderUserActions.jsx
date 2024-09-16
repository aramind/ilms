import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { red, teal } from "@mui/material/colors";
import useConfirmActionDialog from "../../../hooks/useConfirmActionDialog";
import WhiteTypography from "../../../components/WhiteTypography";

const prepareContent = (row) => {
  const { id, ...userInfo } = row;
  return (
    <>
      <WhiteTypography mb={2}>Delete this user?</WhiteTypography>
      {userInfo &&
        Object.entries(userInfo).map(([key, value]) => {
          return (
            <Stack direction="row" pl={2}>
              <Box width="20%">
                <WhiteTypography>{`${key.toUpperCase()} : `}</WhiteTypography>
              </Box>
              <WhiteTypography>{` ${value}`}</WhiteTypography>
            </Stack>
          );
        })}
    </>
  );
};
const RenderUserActions = ({ row }) => {
  const handleEdit = () => {
    alert("Editing..");
  };

  const { handleOpen: handleConfirm, renderConfirmActionDialog } =
    useConfirmActionDialog();

  const handleConfirmDelete = () => {
    handleConfirm("Confirm Delete", prepareContent(row), () => {
      console.log(row);
      alert("Deleted");
    });
  };

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
      {renderConfirmActionDialog()}
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
