import { Box, Typography } from "@mui/material";
import React from "react";
import AutocompleteSelector from "../../../components/AutocompleteSelector";

const studentsStatusOptions = ["all", "enrolled", "pending", "suspended"];
const ListOfStudents = ({ selectedCourse }) => {
  // const {data: studentsData, isLoading}
  return (
    <Box>
      <Typography>LIST OF STUDENTS</Typography>
      <Box width={{ xs: "100%", md: "50%" }}>
        <AutocompleteSelector
          value={studentsStatusOptions[0]}
          // setValue={setSelectedCourse}
          options={studentsStatusOptions}
          label="Select Course"
        />
        <Typography>{selectedCourse?.title} students</Typography>
      </Box>
    </Box>
  );
};

export default ListOfStudents;
