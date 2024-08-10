import { Stack, Typography } from "@mui/material";
import React from "react";
import ContLabelledTextField from "../../components/controlled/ContLabelledTextField";
import { useFieldArray, useForm } from "react-hook-form";

const AddTopic = () => {
  const { control, register, getValues } = useForm({
    defaultValues: {
      tasks: [{ instruction: "", link: "", action: "" }],
      title: "",
      description: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });

  return (
    <Stack>
      <ContLabelledTextField name="title" label="title" />
      <ContLabelledTextField multiline name="description" label="description" />
      <Typography>TASKS</Typography>
      <Stack spacing={2} padding={2}>
        <Stack direction="row" spacing={2}></Stack>
      </Stack>
    </Stack>
  );
};

export default AddTopic;
