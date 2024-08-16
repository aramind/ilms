import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import LectureMetaInfo from "./LectureMetaInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TaskSection from "./TaskSection";

const TopicsSection = ({ control }) => {
  const [expanded, setExpanded] = useState([0]);

  const handleAccordionChange = (index) => {
    setExpanded((pv) =>
      pv.includes(index) ? pv.filter((item) => item !== index) : [...pv, index]
    );
  };

  const {
    fields: topics,
    append: appendTopic,
    remove: removeTopic,
  } = useFieldArray({
    control,
    name: "topics",
  });

  return (
    <>
      <Typography>TOPICS</Typography>
      <Box width={1}>
        {topics.map((topic, topicIndex) => (
          <Accordion
            key={topicIndex}
            expanded={expanded.includes(topicIndex)}
            sx={localStyles.accordion}
            onChange={() => handleAccordionChange(topicIndex)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={localStyles.expandIcon} />}
              aria-controls={`panel${topicIndex}-content`}
              id={`panel${topicIndex}-header`}
              sx={{
                bgcolor: (theme) => theme.palette.white.dark,
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography color={(theme) => theme.palette.black.main}>
                  Lecture {topicIndex + 1}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => removeTopic(topicIndex)}
                >
                  Remove
                </Button>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <LectureMetaInfo topicIndex={topicIndex} />
                {/* task */}
                <TaskSection topicIndex={topicIndex} />
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button
          sx={{ marginTop: 1 }}
          fullWidth
          variant="contained"
          onClick={() => {
            appendTopic({});
            setExpanded((pv) => [...pv, expanded.length]);
          }}
        >
          Add Topic
        </Button>
      </Box>
    </>
  );
};

export default TopicsSection;

const localStyles = {
  accordion: {
    width: "100%",
    outline: "1px solid",
    outlineColor: (theme) => theme.palette.white.darkest,
    bgcolor: (theme) => theme.palette.white.main,

    // "&:before": {
    //   display: "none",
    // },
    boxShadow: "none", // Remove shadow for the entire Accordion
    "& .MuiAccordionSummary-root": {
      boxShadow: "none", // Remove shadow for AccordionSummary
    },
    "& .MuiAccordionDetails-root": {
      boxShadow: "none", // Remove shadow for AccordionDetails
    },
    // "& .MuiAccordionSummary-content": {
    //   my: "1rem",
    // },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      my: "12px",
    },
  },
  expandIcon: {
    color: (theme) => theme.palette.primary.main,
    fontSize: "2rem",
    margin: 0,
  },
};
