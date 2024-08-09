import React from "react";
import { Stack, Typography } from "@mui/material";
import FormWrapper from "../../wrappers/FormWrapper";
import { useForm } from "react-hook-form";
import ControlledTextField from "../../components/controlled/ControlledTextField";
import ContLabelledTextField from "../../components/controlled/ContLabelledTextField";

const AddCourse = () => {
  // form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const formMethods = {
    control,
    handleSubmit,
    errors,
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <FormWrapper formMethods={formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack gap={2}>
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
          <Typography>TOPICS</Typography>
        </Stack>
      </form>
    </FormWrapper>
  );
};

export default AddCourse;
