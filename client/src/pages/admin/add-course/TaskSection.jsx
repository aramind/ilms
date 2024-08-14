import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ControlledRGroup from "../../../components/controlled/ControlledRGroup";
import ContLabelledTextField from "../../../components/controlled/ContLabelledTextField";

const TaskSection = ({ tasks, topicIndex, removeTask, appendTask }) => {
  return (
    <Stack spacing={1} flex={{ xs: 1, md: 1.8 }}>
      {" "}
      <Typography>TASKS</Typography>
      {tasks.map((task, taskIndex) => (
        <Stack spacing={1} p={2} key={taskIndex}>
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
              <Button onClick={() => removeTask(taskIndex)}>Remove</Button>
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
      <Button onClick={() => appendTask({})}>Add Task</Button>
      <Box flex={1} />
    </Stack>
  );
};

export default TaskSection;
