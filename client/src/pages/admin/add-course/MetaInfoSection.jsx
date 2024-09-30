import { Box, Stack } from "@mui/material";
import React from "react";
import ContLabelledTextField from "../../../components/controlled/ContLabelledTextField";
import { Controller, useFormContext } from "react-hook-form";
import LabelWrapper from "../../../wrappers/LabelWrapper";
import ReusableSelect from "../../../components/ReusableSelect";

const MetaInfoSection = () => {
  const { control } = useFormContext();
  return (
    <>
      <Stack direction="row" spacing={2}>
        <ContLabelledTextField name="code" label="code *" flex={1} />
        <ContLabelledTextField name="acronym" label="acronym " flex={1} />
        <ContLabelledTextField name="title" label="title *" flex={2} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack flex={1} spacing={2} justifyContent="flex-start">
          <ContLabelledTextField name="category" label="category" flex={1} />
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
                    { label: "hidden", value: "hidden" },
                    { label: "live", value: "live" },
                    { label: "locked", value: "locked" },
                    { label: "deleted", value: "deleted" },
                    { label: "archived", value: "archived" },
                  ]}
                />
              </Stack>
            )}
          />
          <Box height="100%" flex={1}></Box>
        </Stack>
        <ContLabelledTextField
          multiline
          name="description"
          label="description "
          flex={3}
        />
      </Stack>
    </>
  );
};

export default MetaInfoSection;
