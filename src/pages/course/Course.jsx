import React, { useMemo, useState } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import WhiteTypography from "../../components/WhiteTypography";
import ProgressIndicator from "../../components/card/ProgressIndicator";
import { db } from "../../configs/db";
import { getTopicProgress, getTopicsInCourse } from "../../configs/API";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PageHeader from "../../components/PageHeader";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import SmartDisplayTwoToneIcon from "@mui/icons-material/SmartDisplayTwoTone";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";
import VideoEmbed from "../../components/VideoEmbed";

const getIcon = (action) => {
  switch (action) {
    case "read":
      return <MenuBookTwoToneIcon />;

    case "watch":
      return <SmartDisplayTwoToneIcon />;

    case "quiz":
      return <QuizTwoToneIcon />;
    default:
      return <InsertDriveFileTwoToneIcon />;
  }
};
const Course = () => {
  const { courseId } = useParams();
  const [videoId, setVideoId] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

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

  console.log(videoId);
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
        <PageHeader title={`Courses/${course?.title}`} />

        <Box className="centered-content" width={1}>
          {videoId && <VideoEmbed videoId={videoId} setVideoId={setVideoId} />}
        </Box>

        <Stack direction="row" spacing={1} width={1}>
          {updatedTopics?.map((topic) => (
            <Box width={1}>
              <ProgressIndicator
                value={topic?.progress?.percentage || 0}
                height="24px"
              />
            </Box>
          ))}
        </Stack>
        {updatedTopics?.map((topic, index) => (
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
                    {topic?.progress?.inSteps}
                  </WhiteTypography>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={localStyles.accordionDetails}>
              <Box width={1} mt={1}>
                <ProgressIndicator
                  value={topic?.progress?.percentage || 0}
                  height="4px"
                />
              </Box>
              <Stack width={1}>
                {topic?.topicTasks?.map((task, j) => (
                  <Stack
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
                      <Box key={j} ml={1}>
                        {index + 1}.{j + 1}.
                      </Box>
                      <Box key={j} ml={1}>
                        {task.instruction}{" "}
                      </Box>

                      {task?.action === "watch" ? (
                        <IconButton
                          onClick={() => handleClick(task?.link)}
                          variant="text"
                          color="primary"
                        >
                          <SmartDisplayTwoToneIcon />
                        </IconButton>
                      ) : (
                        ""
                      )}
                    </Stack>

                    <Checkbox
                      checked={j <= 2}
                      icon={
                        <CheckCircleOutlineIcon
                          sx={localStyles.colorLightBlack}
                        />
                      }
                      checkedIcon={
                        <CheckCircleIcon sx={localStyles.colorMain} />
                      }
                    />
                  </Stack>
                ))}
              </Stack>
              <Divider
                sx={{
                  backgroundColor: (theme) => theme.palette.black.main,
                  width: "100%",
                  height: 1,
                }}
              />
              <WhiteTypography variant="subtitle2" sx={{ fontStyle: "italic" }}>
                Downloadables:
              </WhiteTypography>
              <Stack direction="row" flexWrap="wrap" spacing={3} ml={2} my="0">
                {topic?.files?.map((file) => (
                  <Link
                    to="https://www.linkedin.com/in/robin-mon-miranda/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhiteTypography
                      variant="subtitle2"
                      sx={{
                        fontStyle: "italic",
                        ...localStyles.linkHover,
                      }}
                    >
                      {file}
                    </WhiteTypography>
                  </Link>
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
  colorMain: {
    color: (theme) => theme.palette.secondary.main,
  },
  colorLightBlack: {
    color: (theme) => theme.palette.black.light,
  },
  linkHover: {
    "&:hover": {
      color: "primary.special",
    },
  },
};
