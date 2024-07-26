import { Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import WhiteTypography from "../../components/WhiteTypography";

const Main = () => {
  return (
    <Stack spacing={2}>
      <WhiteTypography>Dashboard</WhiteTypography>
      <WhiteTypography>Hi Robin! Good Luck with your studies!</WhiteTypography>
      <Stack>
        <WhiteTypography>My Courses</WhiteTypography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          spacing={2}
          sx={{
            borderRadius: "0.5rem",
            p: 2,
            bgcolor: (theme) => theme.palette.black.dark,
          }}
        >
          <Box height="200px" width="120px" sx={{ backgroundColor: grey[500] }}>
            Electronics
          </Box>
          <Box height="200px" width="120px" sx={{ backgroundColor: grey[500] }}>
            Mathematics
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Main;
