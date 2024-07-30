import { Stack } from "@mui/material";
import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import { mockCourses } from "../../configs/mockDB";

const Main = () => {
  return (
    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
      <WhiteTypography variant="h5">Dashboard</WhiteTypography>
      <WhiteTypography>Hi Robin! Good Luck with your studies!</WhiteTypography>
      <CardGroupWithTitle title="My Courses">
        <CardGroupWrapper>
          {mockCourses
            .filter((course) => course.isPurchased)
            .map((course) => (
              <CourseCard key={course.id} {...course} courseId={course.id} />
            ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
