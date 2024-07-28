import { Stack } from "@mui/material";
import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";

const Main = () => {
  return (
    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
      <WhiteTypography variant="h5">Dashboard</WhiteTypography>
      <WhiteTypography>Hi Robin! Good Luck with your studies!</WhiteTypography>
      <CardGroupWithTitle title="My Courses">
        <CardGroupWrapper>
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
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
