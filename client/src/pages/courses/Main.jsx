import React from "react";
import { Stack } from "@mui/material";

import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";

import useCourseProvider from "../../hooks/useCourseProvider.js";

import CoursesGroup from "../common-components/CoursesGroup.jsx";

const Main = () => {
  const { auth } = useAuth();
  const { enrolledCoursesList, pendingCoursesList, recommendedCoursesList } =
    useCourseProvider();

  console.log(auth);
  console.log("PC", pendingCoursesList);
  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Courses"
        subtitle={`Hi ${auth?.firstName}! Good Luck with your studies!`}
      />
      <CoursesGroup
        coursesList={enrolledCoursesList}
        title="Enrolled Courses"
        textDisplay="No enrolled courses"
      />
      {pendingCoursesList?.length > 0 && (
        <CoursesGroup
          coursesList={pendingCoursesList}
          title="Pending Courses"
        />
      )}
      {recommendedCoursesList?.length > 0 && (
        <CoursesGroup
          coursesList={recommendedCoursesList}
          title="Recommended Courses"
        />
      )}
    </Stack>
  );
};

export default Main;
