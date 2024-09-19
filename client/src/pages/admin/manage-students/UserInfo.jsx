import { Stack } from "@mui/material";
import React from "react";
import ControlledLabelledTextField from "../../../components/controlled/ContLabelledTextField";
import { Controller, useFormContext } from "react-hook-form";
import LabelWrapper from "../../../wrappers/LabelWrapper";
import ReusableSelect from "../../../components/ReusableSelect";

const UserInfo = () => {
  const { control } = useFormContext();

  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <ControlledLabelledTextField label="first name" name="firstName" />
        <ControlledLabelledTextField label="last name" name="lastName" />
        <ControlledLabelledTextField label="email" name="email" />
      </Stack>
      <Controller
        control={control}
        name="role"
        render={({ field }) => (
          <Stack flex={1}>
            <LabelWrapper id="role" label="role" />
            <ReusableSelect
              labelId="role-select"
              id="role-select"
              value={field.value}
              onChange={field.onChange}
              styleProps={{ minWidth: "100px", maxWidth: "33%" }}
              options={[
                { label: "student", value: "student" },
                { label: "admin", value: "admin" },
              ]}
            />
          </Stack>
        )}
      />

      {/* <ControlledLabelledTextField label="email" name="email" /> */}
    </Stack>
  );
};

export default UserInfo;
