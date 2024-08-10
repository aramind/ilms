import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import FormWrapper from "../../wrappers/FormWrapper";
import { useFieldArray, useForm } from "react-hook-form";
import ControlledTextField from "../../components/controlled/ControlledTextField";
import ContLabelledTextField from "../../components/controlled/ContLabelledTextField";
import { DevTool } from "@hookform/devtools";
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

  const {
    fields: topics,
    append: appendTopic,
    remove: removeTopic,
  } = useFieldArray({
    control,
    name: "topics",
  });

  const {
    fields: tasks,
    append: appendTask,
    remove: removeTask,
  } = useFieldArray({
    control,
    name: "tasks",
  });

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

          {topics.map((topic, topicIndex) => (
            <Stack
              key={topic.id}
              p={1}
              mx={1}
              sx={{
                outline: "1px solid",
                outlineColor: (theme) => theme.palette.primary.main,
              }}
            >
              <Typography>Topic {topicIndex + 1}</Typography>

              <Button onClick={() => removeTopic(topicIndex)}>
                Remove Topic
              </Button>
            </Stack>
          ))}
          <Button onClick={() => appendTopic({})}>Add Topic</Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </FormWrapper>
  );
};

export default AddCourse;
