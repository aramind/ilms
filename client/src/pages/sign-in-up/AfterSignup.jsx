import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AfterSignup = ({ open, setOpen, onClick }) => {
  const handleClose = () => {
    setOpen(false);
    onClick();
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: (theme) => theme.palette.black.dark,
            opacity: "0.8",
            margin: 0,
            padding: 0,
          },
        }}
      >
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6" color="secondary">
{/*               Sign up successful. Please wait for the confirmation via the
              provided email. Thank you! */}
              Sign up successful. You can use your account now.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AfterSignup;
