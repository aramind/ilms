import React, { Fragment, useEffect, useState } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
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
  const { coursesList, enrolledCoursesList } = useCourseProvider();
  const [course, setCourse] = useState();
  const { courseId } = useParams();
  const [videoId, setVideoId] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [courseProgress, setCourseProgress] = useState({
    percentage: 0,
    steps: "N/A",
  });

  const { updateTopicTasks } = useUserReq({ isPublic: false, showAck: true });

  const { mutate: sendUpdateTopicTasks } = useApiSend(updateTopicTasks, [
    "enrolledCourses",
    "courses",
  ]);

  useEffect(() => {
    setCourse(enrolledCoursesList?.filter((c) => c._id === courseId)?.[0]);
  }, [courseId, enrolledCoursesList]);

  useEffect(() => {
    const progress = enrolledCoursesList?.filter((c) => c._id === courseId)?.[0]
      ?.progress;
    // console.log(progress);
    const liveTopics = coursesList
      ?.filter((c) => c?._id === courseId)?.[0]
      ?.topics?.filter((topic) => topic.status === "live");
    // console.log(liveTopics);
    const liveTasks = liveTopics
      ?.flatMap((topic) => topic.topicTasks)
      ?.filter((task) => task.status === "live")
      .map((lt) => lt._id);

    const completedTasksOnProgress = progress?.flatMap(
      (t) => t.completedTopicTasks
    );
    // console.log(completedTasksOnProgress);

    const totalLiveTasks = liveTasks?.length || 0;
    const completedLiveTasks = completedTasksOnProgress?.filter((t) =>
      liveTasks?.includes(t)
    );

    const totalCompletedLiveTasks = completedLiveTasks?.length || 0;
    // const totalTasks =
    //   coursesList
    //     ?.filter((c) => c?._id === courseId)?.[0]
    //     ?.topics?.flatMap((t) => t.topicTasks)?.length || 1;
    // const completedTasks =
    //   progress?.flatMap((t) => t.completedTopicTasks)?.length || 0;
    setCourseProgress({
      steps: `${totalCompletedLiveTasks}/${totalLiveTasks}`,
      percentage: Math.floor((totalCompletedLiveTasks / totalLiveTasks) * 100),
    });
  }, [courseId, coursesList, enrolledCoursesList]);

  const handleAccordionChange = (event, isExpanded) => {
    setIsAccordionOpen(isExpanded);
    if (!isAccordionOpen) {
      setVideoId(null);
    }
  };

  const handleClick = (link, action) => {
    // Scroll to the top of the page
    if (action === "watch") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setVideoId(link);
    } else {
      window.open(link, "_blank");
    }
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

  // const getTopicProgress = (topic) => {
  //   try {
  //     const completedTasks =
  //       course?.progress?.filter((p) => p.topic === topic?._id)?.[0]
  //         ?.completedTopicTasks?.length || 0;
  //     const allTopicTasks =
  //       topic?.topicTasks?.filter((task) => task === "live").length || 0;
  //     const percentage = Math.floor((completedTasks / allTopicTasks) * 100);
  //     const progress = {
  //       percentage: percentage,
  //       steps: `${completedTasks}/${allTopicTasks}`,
  //     };
  //     return progress;
  //   } catch (error) {
  //     console.error(error);
  //     return 0;
  //   }
  // };

  const getTopicProgress = (topic) => {
    try {
      const completedTopicTasksOnProgress = course?.progress?.filter(
        (p) => p.topic === topic?._id
      )?.[0]?.completedTopicTasks;

      const allLiveTopicTasks = topic?.topicTasks
        ?.filter((tt) => tt.status === "live")
        ?.map((tt) => tt?._id);

      const numberOfCompleted =
        allLiveTopicTasks?.filter((tt) =>
          completedTopicTasksOnProgress.includes(tt)
        )?.length || 0;

      const totalLiveTopicTasks = allLiveTopicTasks?.length || 0;

      const percentage = Math.floor(
        (numberOfCompleted / totalLiveTopicTasks) * 100
      );
      const progress = {
        percentage: percentage,
        steps: `${numberOfCompleted}/${totalLiveTopicTasks}`,
      };
      return progress;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  // console.log(
  //   course?.course?.topics?.filter((topic) => topic?.status === "live")
  // );
  return (
    <MainLayoutWrapper>
      <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
        <PageHeader title={`Courses/${course?.course?.title}`} />

        <Box className="centered-content" width={1}>
          {videoId && <VideoEmbed videoId={videoId} setVideoId={setVideoId} />}
        </Box>
        <Stack direction="row" spacing={1} width={1} alignItems="center">
          {course?.course?.topics
            ?.filter((topic) => topic?.status === "live")
            .map((topic, index) => (
              <Box width={1} key={index}>
                <ProgressIndicator
                  value={getTopicProgress(topic)?.percentage}
                  height="24px"
                />
              </Box>
            ))}
          <Stack spacing="0px" alignItems="center">
            <Typography variant="h5" color="secondary">
              {courseProgress?.percentage}%
            </Typography>
            <WhiteTypography
              variant="caption"
              sx={{ textTransform: "uppercase" }}
            >
              progress
            </WhiteTypography>
          </Stack>
        </Stack>
        {course?.course?.topics?.map(
          (topic, index) =>
            topic?.status === "live" && (
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
                    <Stack
                      width={1}
                      direction="row"
                      justifyContent="space-between"
                    >
                      <WhiteTypography variant="h6">
                        Lecture {index} : {topic.title}
                      </WhiteTypography>

                      <Typography
                        variant="h6"
                        // fontWeight="bold"
                        sx={{
                          color: (theme) => theme.palette.secondary.main,
                        }}
                      >
                        {getTopicProgress(topic)?.steps}
                      </Typography>
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
                    {topic?.topicTasks
                      ?.filter((task) => task?.status === "live")
                      ?.map((task, j) => (
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
                            onClick={() =>
                              handleClick(task?.link, task?.action)
                            }
                            sx={{
                              ...localStyles.linkHover,
                              cursor: "pointer",
                            }}
                          >
                            <Box ml={1}>
                              {index + 1}.{j + 1}.
                            </Box>
                            <Box ml={1}>{task.instruction} </Box>
                            <TaskAction
                              action={task?.action}
                              link={task?.link}
                            />
                          </Stack>

                          <TaskCheckBox
                            course={course}
                            topicId={topic?._id}
                            taskId={task?._id}
                            handleToggleTaskCompletion={
                              handleToggleTaskCompletion
                            }
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
            )
        )}
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
