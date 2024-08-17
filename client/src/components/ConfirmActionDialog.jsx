import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
import React from "react";
import Draggable from "react-draggable";
import DialogActionsContainer from "../containers/DialogActionsContainer";
import DialogActionButton from "./DialogActionButton";
import useStyles from "../hooks/useStyles";

const PaperComponent = (props) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root]'}
    >
      <Paper
        {...props}
        sx={{ bgcolor: (theme) => theme.palette.black.light, width: "100%" }}
      />
    </Draggable>
  );
};

const ConfirmActionDialog = ({
  open,
  setOpen,
  title = "",
  content = "",
  handleConfirm,
  maxWidth = "md",
}) => {
  const styles = useStyles();

  const handleClose = (e) => {
    e.stopPropagation();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      fullWidth
      maxWidth={maxWidth}
    >
      <DialogTitle sx={styles.dialog?.title}>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <DialogActionsContainer>
          <DialogActionButton
            label="cancel"
            onClickHandler={() => setOpen(false)}
          />
          <DialogActionButton
            label="confirm"
            onClickHandler={() => {
              handleConfirm();
              setOpen(false);
            }}
          />
        </DialogActionsContainer>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmActionDialog;
