import { Box, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { red, teal } from "@mui/material/colors";
import useConfirmActionDialog from "../../../hooks/useConfirmActionDialog";
import WhiteTypography from "../../../components/WhiteTypography";
import UpdateUserModal from "./UpdateUserModal";

const prepareContent = (row) => {
  const { id, ...userInfo } = row;
  return (
    <>
      <WhiteTypography mb={2}>Delete this user?</WhiteTypography>
      {userInfo &&
        Object.entries(userInfo).map(([key, value]) => {
          return (
            <Stack direction="row" pl={2} key={key}>
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
const RenderUserActions = ({ row, sendPatchUserReq }) => {
  const [openDialogUpdateUser, setOpenDialogUpdateUser] = useState(false);
  const handleEdit = () => {
    console.log(row);
    setOpenDialogUpdateUser(true);
  };

  const { handleOpen: handleConfirm, renderConfirmActionDialog } =
    useConfirmActionDialog();

  const handleConfirmDelete = () => {
    handleConfirm("Confirm Delete", prepareContent(row), () =>
      sendPatchUserReq({ _id: row?.id, data: { status: "deleted" } })
    );
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
      <UpdateUserModal
        open={openDialogUpdateUser}
        setOpen={setOpenDialogUpdateUser}
        title="Update User Information"
        row={row}
      />
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
