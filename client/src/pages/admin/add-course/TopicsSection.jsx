import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import LectureMetaInfo from "./LectureMetaInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { nanoid } from "nanoid";

import TaskSection from "./TaskSection";
import { grey, red } from "@mui/material/colors";

const TopicsSection = ({ control }) => {
  const [expanded, setExpanded] = useState([]);
  const [isAdding, setIsAdding] = useState(true);

  const {
    fields: topics,
    append: appendTopic,
    remove: removeTopic,
  } = useFieldArray({
    control,
    name: "topics",
  });

  useEffect(() => {
    if (isAdding) {
      setExpanded((pv) => [...pv, topics[topics.length - 1].id]);
    }
  }, [topics, isAdding]);

  const handleAccordionChange = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addNewTopic = () => {
    const newId = nanoid();
    appendTopic({ id: newId });
    setExpanded((prev) => [...prev, newId]);
    setIsAdding((pv) => true);
  };

  return (
    <>
      <Typography>TOPICS</Typography>
      <Box width={1}>
        {topics.map((topic, topicIndex) => (
          <Accordion
            key={topic.id}
            expanded={expanded.includes(topic.id)}
            sx={localStyles.accordion}
            onChange={() => handleAccordionChange(topic.id)}
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
                  onClick={() => {
                    setExpanded((prev) =>
                      prev.filter((item) => item !== topic?.id)
                    );
                    removeTopic(topicIndex);
                    setIsAdding((pv) => false);
                  }}
                  sx={{
                    "&:hover": {
                      color: grey[50],
                      borderColor: red[700],
                      bgcolor: red[700],
                    },
                  }}
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
          onClick={addNewTopic}
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
