import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import { Stack } from "@mui/material";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";

const Main = () => {
  return (
    <Stack spacing={2}>
      <WhiteTypography>Courses</WhiteTypography>
      <WhiteTypography>Hi Robin! Good Luck with your studies!</WhiteTypography>
      <CardGroupWithTitle title="Enrolled Courses">
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
        </CardGroupWrapper>
      </CardGroupWithTitle>
      <CardGroupWithTitle title="Recommended Courses">
        <CardGroupWrapper>
          <CourseCard
            title="Math Refresher"
            description=" Review course for Electronics in the ECE Licensure Examination."
            isPurchased={false}
            price="500"
          />
          <CourseCard
            title="Elex Refresher"
            description=" Review course for Electronics in the ECE Licensure Examination."
            isPurchased={false}
            price="500"
          />
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
