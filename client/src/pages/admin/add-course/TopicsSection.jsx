import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ContLabelledTextField from "../../../components/controlled/ContLabelledTextField";
import { Controller, useFieldArray } from "react-hook-form";
import LectureMetaInfo from "./LectureMetaInfo";

const TopicsSection = ({ control }) => {
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
    <>
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
          <Typography>Lecture {topicIndex + 1}</Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1}
            className="outlined"
          >
            <LectureMetaInfo topicIndex={topicIndex} />
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
                      <FormControl>
                        <Controller
                          name={`topics[${topicIndex}].tasks[${taskIndex}].action`}
                          control={control}
                          // defaultValue={task.action || ""}
                          render={({ field }) => (
                            <RadioGroup row {...field}>
                              <FormControlLabel
                                value="read"
                                control={<Radio />}
                                label="read"
                              />
                              <FormControlLabel
                                value="watch"
                                control={<Radio />}
                                label="watch"
                              />
                              <FormControlLabel
                                value="answer"
                                control={<Radio />}
                                label="answer"
                              />
                            </RadioGroup>
                          )}
                        />
                      </FormControl>
                      <Button onClick={() => removeTask(taskIndex)}>
                        Remove
                      </Button>
                    </Stack>
                  </Stack>
                  {["instruction", "link"].map((item, index) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      key={index}
                    >
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
          </Stack>

          <Button onClick={() => removeTopic(topicIndex)}>Remove Topic</Button>
        </Stack>
      ))}
      <Button onClick={() => appendTopic({})}>Add Topic</Button>
    </>
  );
};

export default TopicsSection;
