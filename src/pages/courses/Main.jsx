import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import { Stack } from "@mui/material";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import { mockCourses } from "../../configs/mockDB";
import { getEnrolledCourses, getProgress } from "../../configs/API";
import { db } from "../../configs/db";

const Main = () => {
  const enrolledCourses = getEnrolledCourses();

  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <WhiteTypography variant="h5" mb={1}>
        Courses
      </WhiteTypography>
      <WhiteTypography mb={2}>
        Hi Robin! Good Luck with your studies!
      </WhiteTypography>

      <CardGroupWithTitle title="Enrolled Courses">
        <CardGroupWrapper>
          {enrolledCourses?.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              courseId={course.id}
              progress={getProgress(course?.id, db?.users?.[0]?.id)}
            />
          ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
      <CardGroupWithTitle title="Recommended Courses">
        <CardGroupWrapper>
          {mockCourses
            .filter((course) => !course.isPurchased)
            .map((course) => (
              <CourseCard key={course.id} {...course} courseId={course.id} />
            ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
