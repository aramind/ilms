import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import LectureMetaInfo from "./LectureMetaInfo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { nanoid } from "nanoid";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

import TaskSection from "./TaskSection";
import { grey, red } from "@mui/material/colors";
import LabelWrapper from "../../../wrappers/LabelWrapper";
import ReusableSelect from "../../../components/ReusableSelect";

const TopicsSection = ({ control, handleFormSubmit }) => {
  const [expanded, setExpanded] = useState([]);

  const {
    fields: topics,
    append: appendTopic,
    remove: removeTopic,
  } = useFieldArray({
    control,
    name: "topics",
  });

  useEffect(() => {
    if (topics.length > 0) {
      const lastTopic = topics[topics.length - 1];
      if (lastTopic?.id) {
        setExpanded((pv) => [...pv, lastTopic.id]);
      }
    }
  }, [topics]);

  const handleAccordionChange = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addNewTopic = () => {
    const newId = nanoid();
    appendTopic({ id: newId, topicTasks: [{}] });
    setExpanded((prev) => [...prev, newId]);
    // setIsAdding((pv) => true);
  };

  const handleRemoveTopic = (topicId, topicIndex) => {
    setExpanded((prev) => prev.filter((item) => item !== topicId));
    removeTopic(topicIndex);
    // setIsAdding((pv) => false);
  };

  console.log(topics);
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
              sx={localStyles.accordionSummary}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                width={1}
                pr={2}
              >
                <Typography color={(theme) => theme.palette.black.main}>
                  Lecture {topicIndex + 1} :
                </Typography>
                <Typography color="primary" fontWeight="bold">
                  {topic?.title}
                </Typography>
                <Box flex={1} width="100%"></Box>

                <IconButton
                  sx={{ color: (theme) => theme.palette.red.dark }}
                  onClick={() => handleRemoveTopic(topic?.id, topicIndex)}
                >
                  {/* <ClearRoundedIcon fontSize="small" /> */}
                  <DeleteTwoToneIcon fontSize="small" />
                </IconButton>

                <Controller
                  control={control}
                  name={`topics[${topicIndex}].status`}
                  render={({ field }) => (
                    <ReusableSelect
                      labelId="topic-status-select"
                      id="topic-status-select"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        handleFormSubmit();
                      }}
                      styleProps={{ minWidth: "100px" }}
                      options={[
                        { label: "hidden", value: "hidden" },
                        { label: "live", value: "live" },
                        { label: "locked", value: "locked" },
                      ]}
                    />
                  )}
                />

                {/* <Button
                  variant="outlined"
                  onClick={() => handleRemoveTopic(topic?.id, topicIndex)}
                  sx={localStyles.removeBtn}
                >
                  Remove
                </Button> */}
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <LectureMetaInfo topicIndex={topicIndex} />
                <TaskSection topicIndex={topicIndex} />
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button
          fullWidth
          variant="outlined"
          onClick={addNewTopic}
          sx={localStyles.addBtn}
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
  accordionSummary: {
    bgcolor: (theme) => theme.palette.white.dark,
  },
  expandIcon: {
    color: (theme) => theme.palette.primary.main,
    fontSize: "2rem",
    margin: 0,
  },
  removeBtn: {
    // bgcolor: red[700],
    py: 0.1,
    px: 1,
    borderColor: red[500],
    color: red[500],
    "&:hover": {
      color: grey[50],
      borderColor: red[500],
      bgcolor: red[500],
      opacity: 0.8,
    },
  },
  addBtn: {
    marginTop: 1,
    // "&:hover": {
    //   color: grey[50],
    //   bgcolor: (theme) => theme.palette.primary.dark,
    // },
  },
};
