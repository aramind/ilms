import React, { useEffect, useState } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import WhiteTypography from "../../components/WhiteTypography";
import ProgressIndicator from "../../components/card/ProgressIndicator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import PageHeader from "../../components/PageHeader";

import VideoEmbed from "../../components/VideoEmbed";

import useCourseProvider from "../../hooks/useCourseProvider";
import TaskAction from "./TaskAction";
import Downloadables from "./Downloadables";
import TaskCheckBox from "./TaskCheckBox";
import useUserReq from "../../hooks/api/authenticated/useUserReq";
import useApiSend from "../../hooks/api/useApiSend";

const Course = () => {
  const { enrolledCourses } = useCourseProvider();
  const [course, setCourse] = useState();
  const { courseId } = useParams();
  const [videoId, setVideoId] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const { updateTopicTasks } = useUserReq({ isPublic: false, showAck: true });

  const { mutate: sendUpdateTopicTasks } = useApiSend(updateTopicTasks, [
    "enrolledCourses",
    "courses",
  ]);

  useEffect(() => {
    setCourse(enrolledCourses?.filter((c) => c._id === courseId)?.[0]);
  }, [courseId, enrolledCourses]);

  const handleAccordionChange = (event, isExpanded) => {
    setIsAccordionOpen(isExpanded);
    if (!isAccordionOpen) {
      setVideoId(null);
    }
  };

  const handleClick = (link) => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setVideoId(link);
  };

  const handleToggleTaskCompletion = (taskId, topicId, courseId) => {
    let isConfirmed = window.confirm("Update task?");
    if (isConfirmed) {
      sendUpdateTopicTasks({ courseId, topicId, taskId });
    } else {
      return;
    }
  };
  // console.log(course);

  const getTopicProgress = (topic) => {
    try {
      const completedTasks =
        course?.progress?.filter((p) => p.topic === topic?._id)?.[0]
          ?.completedTopicTasks?.length || 0;
      const allTopicTasks = topic?.topicTasks?.length || 1;
      const percentage = Math.floor((completedTasks / allTopicTasks) * 100);
      const progress = {
        percentage: percentage,
        steps: `${completedTasks}/${allTopicTasks}`,
      };
      return progress;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };
  return (
    <MainLayoutWrapper>
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <PageHeader title={`Courses/${course?.course?.title}`} />
        <Box className="centered-content" width={1}>
          {videoId && <VideoEmbed videoId={videoId} setVideoId={setVideoId} />}
        </Box>
        <Stack direction="row" spacing={1} width={1}>
          {course?.course?.topics?.map((topic, index) => (
            <Box width={1} key={index}>
              <ProgressIndicator
                value={getTopicProgress(topic)?.percentage}
                height="24px"
              />
            </Box>
          ))}
        </Stack>
        {course?.course?.topics?.map((topic, index) => (
          <Accordion
            key={index}
            sx={localStyles.accordion}
            onChange={handleAccordionChange}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={localStyles.expandIcon} />}
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
                    {getTopicProgress(topic)?.steps}
                  </WhiteTypography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={localStyles.accordionDetails}>
              <Box width={1} mt={1}>
                <ProgressIndicator
                  value={getTopicProgress(topic)?.percentage || 0}
                  height="4px"
                />
              </Box>
              <Stack width={1}>
                {topic?.topicTasks?.map((task, j) => (
                  <Stack
                    key={j}
                    width={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack
                      direction="row"
                      flex={1}
                      // spacing={1}
                      alignItems="center"
                      color={(theme) => theme.palette.white.main}
                      sx={{ ...localStyles.linkHover }}
                    >
                      <Box ml={1}>
                        {index + 1}.{j + 1}.
                      </Box>
                      <Box ml={1}>{task.instruction} </Box>
                      <TaskAction
                        action={task?.action}
                        onClickHandler={() => handleClick(task?.link)}
                        link={task?.link}
                      />
                    </Stack>
                    <TaskCheckBox
                      course={course}
                      topicId={topic?._id}
                      taskId={task?._id}
                      handleToggleTaskCompletion={handleToggleTaskCompletion}
                    />
                  </Stack>
                ))}
              </Stack>

              {topic?.files?.length > 0 && (
                <>
                  <Divider
                    sx={{
                      backgroundColor: (theme) => theme.palette.black.main,
                      width: "100%",
                      height: 1,
                    }}
                  />
                  <Downloadables files={topic?.files} />
                </>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </MainLayoutWrapper>
  );
};

export default Course;

const localStyles = {
  accordion: {
    width: "100%",
    borderRadius: "1rem",
    bgcolor: (theme) => theme.palette.black.dark,
    mb: 5,
    "&:before": {
      display: "none",
    },
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    pt: 0,
  },
  expandIcon: {
    color: (theme) => theme.palette.primary.main,
    fontSize: "2rem",
    margin: 0,
  },

  linkHover: {
    "&:hover": {
      color: "primary.special",
    },
  },
};
