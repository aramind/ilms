import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ControlledRGroup from "../../../components/controlled/ControlledRGroup";
import ContLabelledTextField from "../../../components/controlled/ContLabelledTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import { grey, red } from "@mui/material/colors";

const TaskSection = ({ topicIndex }) => {
  const { control } = useFormContext();

  const {
    fields: tasks,
    append: appendTask,
    remove: removeTask,
  } = useFieldArray({
    control,
    name: `topics[${topicIndex}].tasks`,
  });

  return (
    <Stack pl={4} spacing={1} flex={{ xs: 1, md: 1.8 }}>
      {" "}
      <Typography
        width={1}
        textAlign="center"
        variant="caption"
        // fontWeight="bold"
        color={(theme) => theme.palette.black.main}
      >
        TASKS
      </Typography>
      {tasks.map((task, taskIndex) => (
        <Stack spacing={1} pb={2} key={task.id}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography flex={1}>{`${topicIndex + 1}.${
              taskIndex + 1
            }`}</Typography>
            <Stack
              direction="row"
              alignItems="center"
              flex={4}
              justifyContent="space-between"
            >
              <ControlledRGroup
                direction="row"
                name={`topics[${topicIndex}].tasks[${taskIndex}].action`}
                values={["read", "watch", "answer"]}
              />
              <Button
                variant="outlined"
                sx={localStyles.removeBtn}
                onClick={() => removeTask(taskIndex)}
              >
                Remove
              </Button>
            </Stack>
          </Stack>
          {["instruction", "link"].map((item, index) => (
            <Stack direction="row" alignItems="center" spacing={2} key={index}>
              <Typography flex={1} textTransform="uppercase">
                {item} :
              </Typography>
              <Box flex={4}>
                <ContLabelledTextField
                  key={index}
                  tfProps={{ variant: "standard" }}
                  name={`topics[${topicIndex}].tasks[${taskIndex}].${item}`}
                />
              </Box>
            </Stack>
          ))}
        </Stack>
      ))}
      <Button sx={{ mt: 0 }} variant="outlined" onClick={() => appendTask({})}>
        Add Task
      </Button>
      <Box flex={1} />
    </Stack>
  );
};

export default TaskSection;

const localStyles = {
  removeBtn: {
    // bgcolor: red[700],
    py: 0.1,
    px: 1,
    borderColor: red[500],
    color: red[500],
    "&:hover": {
      color: grey[50],
      borderColor: red[500],
      bgcolor: red[500],
      opacity: 0.8,
    },
  },
};
