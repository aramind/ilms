import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";
import LectureMetaInfo from "./LectureMetaInfo";

import TaskSection from "./TaskSection";

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
            {/* task */}
            <TaskSection
              tasks={tasks}
              topicIndex={topicIndex}
              removeTask={removeTask}
              appendTask={appendTask}
            />
          </Stack>

          <Button onClick={() => removeTopic(topicIndex)}>Remove Topic</Button>
        </Stack>
      ))}
      <Button onClick={() => appendTopic({})}>Add Topic</Button>
    </>
  );
};

export default TopicsSection;
