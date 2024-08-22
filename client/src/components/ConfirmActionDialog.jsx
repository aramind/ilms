import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
import React, { forwardRef, useRef } from "react";
import Draggable from "react-draggable";
import DialogActionsContainer from "../containers/DialogActionsContainer";
import DialogActionButton from "./DialogActionButton";
import useStyles from "../hooks/useStyles";

const PaperComponent = forwardRef((props, ref) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      nodeRef={ref}
    >
      <Paper
        ref={ref}
        {...props}
        sx={{ bgcolor: (theme) => theme.palette.black.main, width: "100%" }}
      />
    </Draggable>
  );
});

const ConfirmActionDialog = ({
  open = false,
  setOpen,
  title = "",
  content = "",
  handleConfirm,
  maxWidth = "md",
}) => {
  const styles = useStyles();
  const dialogRef = useRef(null);

  const handleClose = (e) => {
    e.stopPropagation();
  };

  return (
    <Dialog
      open={open || false}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      PaperProps={{ ref: dialogRef }}
      fullWidth
      maxWidth={maxWidth}
    >
      <DialogTitle id="draggable-dialog-title" sx={styles.dialog?.title}>
        {title}
      </DialogTitle>
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
            variant="contained"
          />
        </DialogActionsContainer>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmActionDialog;
