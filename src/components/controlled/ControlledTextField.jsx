import { Stack, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextFieldError from "../TextFieldError";

const ControlledTextField = ({ label = "", name, tfProps }) => {
  const { errors } = useFormContext();

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Stack>
          <TextField
            {...tfProps}
            {...field}
            id={name}
            label={label}
            value={field.value}
            size={tfProps?.size || "small"}
            variant={tfProps?.variant || "outlined"}
            fullWidth={tfProps?.fullWidth || true}
            error={!!errors?.[name]}
          />
          <TextFieldError errMsg={errors?.[name]?.message || ""} />
        </Stack>
      )}
    />
  );
};

export default ControlledTextField;
