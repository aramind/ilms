import { Stack } from "@mui/material";
import React from "react";
import ContLabelledTextField from "../../../components/controlled/ContLabelledTextField";

const MetaInfoSection = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <ContLabelledTextField name="code" label="code *" flex={1} />
        <ContLabelledTextField name="acronym" label="acronym " flex={1} />
        <ContLabelledTextField name="title" label="title *" flex={2} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <ContLabelledTextField name="category" label="category" flex={1} />
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
