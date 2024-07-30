import React, { useMemo } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import WhiteTypography from "../../components/WhiteTypography";
import ProgressIndicator from "../../components/card/ProgressIndicator";
import { db } from "../../configs/db";
import { getTopicProgress, getTopicsInCourse } from "../../configs/API";

const Course = () => {
  const { courseId } = useParams();

  const course = useMemo(
    () =>
      db?.courses.find((item) => item.id.toString() === courseId.toString()),
    [courseId]
  );

  const updatedTopics = useMemo(() => {
    const topics = getTopicsInCourse(Number(courseId));

    return topics?.map((topic) => {
      const progress = getTopicProgress(+courseId, topic.id.toString(), 1);
      return { ...topic, progress };
    });
  }, [courseId]);

  return (
    <MainLayoutWrapper>
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <WhiteTypography variant="h5">
          COURSES/
          {course?.title}
        </WhiteTypography>
        <Stack direction="row" spacing={1} width={1}>
          {updatedTopics?.map((topic) => (
            <Box width={1}>
              <ProgressIndicator value={topic?.progress || 0} height="24px" />
            </Box>
          ))}
        </Stack>
      </Stack>
    </MainLayoutWrapper>
  );
};

export default Course;
