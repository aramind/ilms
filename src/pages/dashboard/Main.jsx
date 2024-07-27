import { Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import CourseCard from "../../components/card/CourseCard";

const Main = () => {
  return (
    <Stack spacing={2}>
      <WhiteTypography variant="h5">Dashboard</WhiteTypography>
      <WhiteTypography>Hi Robin! Good Luck with your studies!</WhiteTypography>
      <Stack>
        <WhiteTypography variant="h6">My Courses</WhiteTypography>

        <Stack
          direction="row"
          justifyContent="flex-start"
          // spacing={2}
          gap={2}
          width={{ xs: "100vw", md: "100%" }}
          flexWrap="wrap"
        >
          <CourseCard
            title="Mathematics"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
          <CourseCard
            title="Electronics"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
          <CourseCard
            title="GEAS"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
          <CourseCard
            title="Electronic Systems and Technologies"
            description=" Review course for Electronics in the ECE Licensure Examination.Review course for Electronics in the ECE Licensure Examination.Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
          <CourseCard
            title="Mathematics"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
          <CourseCard
            title="Electronics"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
          <CourseCard
            title="GEAS"
            description=" Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
          <CourseCard
            title="Electronic Systems and Technologies"
            description=" Review course for Electronics in the ECE Licensure Examination.Review course for Electronics in the ECE Licensure Examination.Review course for Electronics in the ECE Licensure Examination."
            progress="30"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Main;
