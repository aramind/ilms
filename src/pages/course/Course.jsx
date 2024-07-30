import React, { useMemo } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import WhiteTypography from "../../components/WhiteTypography";
import { mockProgress, mockTopics } from "../../configs/mockDB";
import ProgressIndicator from "../../components/card/ProgressIndicator";

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

const Course = () => {
  const { courseId } = useParams();

  const course = useMemo(
    () => mockCourseList.find((item) => item.courseId === courseId),
    [courseId]
  );

  const updatedTopics = useMemo(() => {
    return topics.map((topic) => {
      const progress = mockProgress.find((p) => p.id === topic.id);
      const progressPercent = progress ? progress.progress : 0;
      return { ...topic, progress: progressPercent };
    });
  }, []);

  console.log(updatedTopics);
  return (
    <MainLayoutWrapper>
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <WhiteTypography variant="h5">
          COURSES/
          {course?.title}
        </WhiteTypography>
        <Stack direction="row" spacing={1} width={1}>
          {updatedTopics?.map((topic) => (
            // <Box
            //   key={topic?.id}
            //   sx={{
            //     width: "100%",
            //     height: "24px",
            //     bgcolor:
            //       topic.progress === "100%"
            //         ? (theme) => theme.palette.primary.main
            //         : (theme) => theme.palette.black.light,
            //     borderRadius: "4px",
            //   }}
            // >{}</Box>
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
