import React, { useMemo } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import WhiteTypography from "../../components/WhiteTypography";
import ProgressIndicator from "../../components/card/ProgressIndicator";
import { db } from "../../configs/db";
import { getTopicProgress, getTopicsInCourse } from "../../configs/API";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
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

  console.log(updatedTopics);
  return (
    <MainLayoutWrapper>
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <Stack direction="row" flexWrap="wrap">
          <WhiteTypography fontSize={{ xs: "1.3rem", md: "1.5rem" }}>
            Courses/
          </WhiteTypography>
          <WhiteTypography fontSize={{ xs: "1.3rem", md: "1.5rem" }}>
            {course?.title}
          </WhiteTypography>
        </Stack>
        <Stack direction="row" spacing={1} width={1}>
          {updatedTopics?.map((topic) => (
            <Box width={1}>
              <ProgressIndicator value={topic?.progress || 0} height="24px" />
            </Box>
          ))}
        </Stack>
        {/* {updatedTopics?.map((topic, index) => (
          <Stack
            key={index}
            justifyContent="flex-start"
            alignItems="flex-start"
            px={2}
            py={1}
            width={1}
            borderRadius="1rem"
            bgcolor={(theme) => theme.palette.black.dark}
            //   onClick={() => alert("Clicked")}
            sx={{
              // Set cursor to pointer
              "&:hover": {
                //   backgroundColor: "#ffffff", // Optional: change background color on hover
                outline: "2px solid",
                outlineColor: (theme) => theme.palette.primary.darkest,
              },
            }}
          >
            <Stack width={1} direction="row" justifyContent="space-between">
              <WhiteTypography variant="h5">
                Lecture {index + 1} : {topic.title}
              </WhiteTypography>
              <Typography variant="h5" color="primary" fontWeight="bold">
                {topic?.progress}%
              </Typography>
            </Stack>
            <Box width={1}>
              <ProgressIndicator value={topic?.progress || 0} height="8px" />
            </Box>
            <Stack width={1}>
              {topic?.topicTasks?.map((task, j) => (
                <WhiteTypography key={index}>
                  {index + 1}.{j + 1}. {task.instruction}
                </WhiteTypography>
              ))}
            </Stack>
          </Stack>
        ))} */}
        {updatedTopics?.map((topic, index) => (
          <Accordion
            key={index}
            sx={{
              width: "100%",
              borderRadius: "1rem",
              bgcolor: (theme) => theme.palette.black.dark,
              mb: 5,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontSize: "2rem",
                    margin: 0,
                  }}
                />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Stack width={1} pr={2}>
                <Stack width={1} direction="row" justifyContent="space-between">
                  <WhiteTypography variant="h6">
                    Lecture {index + 1} : {topic.title}
                  </WhiteTypography>

                  <WhiteTypography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                    }}
                  >
                    {topic?.progress}%
                  </WhiteTypography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                pt: 0,
              }}
            >
              <Box width={1} mt={1}>
                <ProgressIndicator value={topic?.progress || 0} height="4px" />
              </Box>
              <Stack width={1}>
                {topic?.topicTasks?.map((task, j) => (
                  <Stack
                    width={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" flex={1} spacing={1}>
                      <WhiteTypography key={j}>
                        {index + 1}.{j + 1}.
                      </WhiteTypography>
                      <WhiteTypography key={j}>
                        {task.instruction}{" "}
                      </WhiteTypography>
                    </Stack>

                    <Checkbox
                      checked={j <= 2}
                      icon={
                        <CheckCircleOutlineIcon
                          sx={{
                            color: (theme) => theme.palette.black.light,
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckCircleIcon
                          sx={{
                            color: (theme) => theme.palette.secondary.main,
                          }}
                        />
                      }
                    />
                    {/* <Typography
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                      }}
                    >
                      <CheckCircleOutlineIcon /> <CheckCircleIcon />
                      <CheckCircleTwoToneIcon />
                      <CheckCircleOutlineTwoToneIcon />
                    </Typography> */}
                  </Stack>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </MainLayoutWrapper>
  );
};

export default Course;
