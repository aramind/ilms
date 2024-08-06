import { Stack } from "@mui/material";
import React, { useContext } from "react";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import { getCourseProgress, getEnrolledCourses } from "../../configs/API";
import { db } from "../../configs/db";
import PageHeader from "../../components/PageHeader";
import { useGlobalState } from "../../context/GlobalStatesContextProvider";

const Main = () => {
  const enrolledCourses = getEnrolledCourses();
  const {
    globalState: { currentUser },
  } = useGlobalState();

  console.log("CU", currentUser);
  return (
    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Dashboard"
        subtitle={`Hi ${currentUser}! Good Luck with your studies!`}
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
