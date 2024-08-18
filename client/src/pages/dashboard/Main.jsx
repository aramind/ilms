import { Stack } from "@mui/material";
import React, { useContext } from "react";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import { getCourseProgress, getEnrolledCourses } from "../../configs/API";
import { db } from "../../configs/db";
import PageHeader from "../../components/PageHeader";
import { AuthContext } from "../../context/AuthProvider";

const Main = () => {
  const { auth } = useContext(AuthContext);
  const enrolledCourses = getEnrolledCourses();

  return (
    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Dashboard"
        subtitle={`Hi ${auth?.firstName}! Good Luck with your studies!`}
      />
      <CardGroupWithTitle title="My Courses">
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
    </Stack>
  );
};

export default Main;
