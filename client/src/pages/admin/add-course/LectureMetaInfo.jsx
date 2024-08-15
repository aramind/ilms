import { Box, Stack } from "@mui/material";
import React from "react";
import ContLabelledTextField from "../../../components/controlled/ContLabelledTextField";

const LectureMetaInfo = ({ topicIndex }) => {
  return (
    <Stack spacing={2} flex={1}>
      <Box>
        <ContLabelledTextField
          name={`topics[${topicIndex}].title`}
          label="title"
        />
      </Box>
      <Box>
        <ContLabelledTextField
          name={`topics[${topicIndex}].description`}
          label="description"
          multiline
        />
      </Box>
    </Stack>
  );
};

export default LectureMetaInfo;
