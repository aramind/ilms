import { Stack } from "@mui/material";
import React from "react";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";
import useCourseProvider from "../../hooks/useCourseProvider.js";

const Main = () => {
  const { auth } = useAuth();
  const { enrolledCoursesList } = useCourseProvider();

  return (
    <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Dashboard"
        subtitle={`Hi ${auth?.firstName}! Good Luck with your studies!`}
      />
      <CardGroupWithTitle title="My Courses">
        <CardGroupWrapper>
          {enrolledCoursesList?.map((ec) => (
            <CourseCard
              key={ec?.course?._id}
              title={ec?.course?.title}
              description={ec?.course?.description}
              progress={ec?.progress}
              isEnrolled={true}
              status={ec?.status}
              courseId={ec?.course?._id}
            />
          ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
