import { CircularProgress, Dialog, DialogContent, Stack } from "@mui/material";
import React from "react";
import WhiteTypography from "../components/WhiteTypography";

const LoadingPage = ({ open, text }) => {
  return (
    <Dialog
      open={open}
      onClose={() => {}}
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          height: "100%",
          bgcolor: (theme) => theme.palette.black.darkest,
          opacity: "0.9",
          margin: 0,
          padding: 0,
        },
      }}
      fullScreen
      disableEscapeKeyDown
    >
      <DialogContent
        className="centered-content"
        sx={{
          height: "100%",
        }}
      >
        <Stack direction="column" className="centered-content" spacing={3}>
          <CircularProgress />
          <WhiteTypography variant="h5">
            {text?.[0].toUpperCase() + text?.substring(1)}
          </WhiteTypography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingPage;
