import { Stack, Typography } from "@mui/material";
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
      <Stack direction="row" spacing={1}>
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
                styleProps={{ minWidth: "100px" }}
                options={[
                  { label: "student", value: "student" },
                  { label: "admin", value: "admin" },
                ]}
              />
            </Stack>
          )}
        />
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Stack flex={1}>
              <LabelWrapper id="status" label="status" />
              <ReusableSelect
                labelId="status-select"
                id="status-select"
                value={field.value}
                onChange={field.onChange}
                styleProps={{ minWidth: "100px" }}
                options={[
                  { label: "pending", value: "pending" },
                  { label: "active", value: "active" },
                  { label: "suspended", value: "suspended" },
                  { label: "deleted", value: "deleted" },
                ]}
              />
            </Stack>
          )}
        />
        <Controller
          control={control}
          name="accessLevel"
          render={({ field }) => (
            <Stack flex={1}>
              <LabelWrapper id="accessLevel" label="accessLevel" />
              <ReusableSelect
                labelId="accessLevel-select"
                id="accessLevel-select"
                value={field.value}
                onChange={field.onChange}
                styleProps={{ minWidth: "100px" }}
                options={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                ]}
              />
            </Stack>
          )}
        />
      </Stack>
      <Typography>Enrolled Courses</Typography>

      {/* <ControlledLabelledTextField label="email" name="email" /> */}
    </Stack>
  );
};

export default UserInfo;
