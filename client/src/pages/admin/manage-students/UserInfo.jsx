import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ControlledLabelledTextField from "../../../components/controlled/ContLabelledTextField";
import { Controller, useFormContext } from "react-hook-form";
import LabelWrapper from "../../../wrappers/LabelWrapper";

const UserInfo = () => {
  const { control } = useFormContext();
  console.log(control);
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <ControlledLabelledTextField label="first name" name="firstName" />
        <ControlledLabelledTextField label="last name" name="lastName" />
        <ControlledLabelledTextField label="email" name="email" />
        <ControlledLabelledTextField label="role" name="role" />
      </Stack>
      <Controller
        control={control}
        name="role"
        render={({ field }) => (
          <Stack flex={1}>
            <LabelWrapper id="role" label="role">
              <Typography>{field?.value}</Typography>
            </LabelWrapper>
          </Stack>
        )}
      />

      {/* <ControlledLabelledTextField label="email" name="email" /> */}
    </Stack>
  );
};

export default UserInfo;
