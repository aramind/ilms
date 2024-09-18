import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import Draggable from "react-draggable";
import FormWrapper from "../../../wrappers/FormWrapper";
import { useForm } from "react-hook-form";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import DialogActionButton from "../../../components/DialogActionButton";

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
        sx={{ bgcolor: (theme) => theme.palette.white.main, width: "100%" }}
      />
    </Draggable>
  );
});

const UpdateUserModal = ({ open, setOpen, title = "", row }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm({ mode: "onTouched", defaultValues: row });

  const formMethods = { handleSubmit, control, errors };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleReset = () => {
    reset({ ...row });
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <FormWrapper formMethods={formMethods}>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          maxWidth="lg"
          fullWidth
        >
          <DialogTitle>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {title}
              <IconButton onClick={handleClose}>
                <CloseTwoToneIcon />
              </IconButton>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <form>
              <Stack spacing={1}>
                <Typography>FORM HERE</Typography>
              </Stack>
            </form>
          </DialogContent>
          <DialogActions>
            <DialogActionButton
              label="reset"
              onClickHandler={handleReset}
              disabled={!isDirty}
            />
            <DialogActionButton
              label="save"
              onClickHandler={() => handleSubmit(onSubmit)()}
              disabled={
                !row?.id || !isDirty || Object.keys(errors).length !== 0
              }
            />
          </DialogActions>
        </Dialog>
      </FormWrapper>
    </>
  );
};

export default UpdateUserModal;
