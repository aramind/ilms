import React from "react";
import { Stack } from "@mui/material";
import FormWrapper from "../../wrappers/FormWrapper";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import MetaInfoSection from "./add-course/MetaInfoSection";
import TopicsSection from "./add-course/TopicsSection";

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
          <MetaInfoSection />
          <TopicsSection control={control} />
        </Stack>
        <DevTool control={control} />
      </form>
      <DevTool control={control} />
    </FormWrapper>
  );
};

export default AddCourse;
