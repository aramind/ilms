import { Box, Typography } from "@mui/material";
import React from "react";
import AutocompleteSelector from "../../../components/AutocompleteSelector";

const studentsStatusOptions = ["all", "enrolled", "pending", "suspended"];
const ListOfStudents = () => {
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
      </Box>
    </Box>
  );
};

export default ListOfStudents;
