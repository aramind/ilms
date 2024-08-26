import { Stack } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";
import useCourseProvider from "../../hooks/useCourseProvider.js";
import CoursesGroup from "../common-components/CoursesGroup.jsx";

const Main = () => {
  const { auth } = useAuth();
  const { enrolledCoursesList } = useCourseProvider();

  return (
    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Dashboard"
        subtitle={`Hi ${auth?.firstName}! Good Luck with your studies!`}
      />
      <CoursesGroup
        coursesList={enrolledCoursesList}
        title="Enrolled Courses"
        textDisplay="No enrolled courses"
      />
    </Stack>
  );
};

export default Main;
