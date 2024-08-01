import React from "react";
import { Stack } from "@mui/material";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import { mockCourses } from "../../configs/mockDB";
import { getCourseProgress, getEnrolledCourses } from "../../configs/API";
import { db } from "../../configs/db";
import PageHeader from "../../components/PageHeader";

const Main = () => {
  const enrolledCourses = getEnrolledCourses();

  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Courses"
        subtitle="Hi Robin! Good Luck with your studies!"
      />

      <CardGroupWithTitle title="Enrolled Courses">
        <CardGroupWrapper>
          {enrolledCourses?.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              courseId={course.id}
              progress={getCourseProgress(course?.id, db?.users?.[0]?.id)}
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
