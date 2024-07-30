import React, { useMemo } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import WhiteTypography from "../../components/WhiteTypography";
import { mockTopics } from "../../configs/mockDB";

const mockCourseList = [
  {
    courseId: "1",
    title: "Electronics Review",
  },
  {
    courseId: "2",
    title: "Math Review",
  },
  {
    courseId: "3",
    title: "GEAS Review",
  },
  {
    courseId: "4",
    title: "ESAT Review",
  },
];

const topics = mockTopics;

const completedTopics = ["1", "2", "4"];

const Course = () => {
  const { courseId } = useParams();

  const course = useMemo(
    () => mockCourseList.find((item) => item.courseId === courseId),
    [courseId]
  );
  return (
    <MainLayoutWrapper>
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <WhiteTypography variant="h5">
          COURSES/
          {course?.title}
        </WhiteTypography>
        <Stack direction="row" spacing={1} width={1}>
          {topics?.map((topic) => (
            <Box
              key={topic?.id}
              sx={{
                width: "100%",
                height: "24px",
                bgcolor: completedTopics?.includes(topic?.id)
                  ? (theme) => theme.palette.primary.main
                  : (theme) => theme.palette.black.light,
                borderRadius: "4px",
              }}
            ></Box>
          ))}
        </Stack>
      </Stack>
    </MainLayoutWrapper>
  );
};

export default Course;
