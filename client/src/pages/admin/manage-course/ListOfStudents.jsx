import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const ListOfStudents = () => {
  return (
    <div>
      {" "}
      <Divider
        variant="fullWidth"
        sx={{
          my: 2,
          height: "5px",
          bgcolor: (theme) => theme.palette.black.main,
        }}
      />
      <Box>
        <Typography>List of Students</Typography>
      </Box>
    </div>
  );
};

export default ListOfStudents;
