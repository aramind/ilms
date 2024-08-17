import React from "react";

import { Button } from "@mui/material";

const DialogActionButton = ({
  label,
  type,
  disabled,
  onClickHandler,
  onSubmit,
  variant = "outlined",
  otherStyles = {},
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClickHandler}
      variant={variant}
      disableElevation
    >
      {label}
    </Button>
  );
};

export default DialogActionButton;
