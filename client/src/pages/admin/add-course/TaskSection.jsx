import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ControlledRGroup from "../../../components/controlled/ControlledRGroup";
import ContLabelledTextField from "../../../components/controlled/ContLabelledTextField";
import { useFieldArray, useFormContext } from "react-hook-form";
import { grey, red } from "@mui/material/colors";

const TaskSection = ({ topicIndex }) => {
  const { control } = useFormContext();

  const {
    fields: topicTasks,
    append: appendTask,
    remove: removeTask,
  } = useFieldArray({
    control,
    name: `topics[${topicIndex}].topicTasks`,
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
      {topicTasks.map((task, taskIndex) => (
        <Stack spacing={1} pb={2} key={task.id}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontWeight="bold" color="primary" flex={1}>{`${
              topicIndex + 1
            }.${taskIndex + 1}`}</Typography>
            <Stack
              direction="row"
              alignItems="center"
              flex={5}
              justifyContent="space-between"
              gap={1}
            >
              <ControlledRGroup
                direction="row"
                name={`topics[${topicIndex}].topicTasks[${taskIndex}].action`}
                values={["read", "watch", "answer"]}
              />
              <Box flex={1} />
              <Button
                variant="outlined"
                sx={localStyles.removeBtn}
                onClick={() => removeTask(taskIndex)}
              >
                Remove
              </Button>
            </Stack>
          </Stack>
          <Stack direction="row" alignContent="center" gap={2}>
            <Typography
              textTransform="uppercase"
              variant="caption"
              // fontWeight="bold"
              flex={1}
              color={(theme) => theme.palette.black.main}
              my="auto"
            >
              STATUS :
            </Typography>
            <Box flex={5}>
              <ControlledRGroup
                direction="row"
                name={`topics[${topicIndex}].topicTasks[${taskIndex}].status`}
                values={["hidden", "live", "locked"]}
              />
            </Box>
          </Stack>
          {["instruction", "link"].map((item, index) => (
            <Stack direction="row" alignItems="center" spacing={2} key={index}>
              <Typography
                flex={1}
                textTransform="uppercase"
                variant="caption"
                // fontWeight="bold"
                color={(theme) => theme.palette.black.main}
              >
                {item} :
              </Typography>
              <Box flex={5}>
                <ContLabelledTextField
                  key={index}
                  tfProps={{ variant: "standard" }}
                  name={`topics[${topicIndex}].topicTasks[${taskIndex}].${item}`}
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
