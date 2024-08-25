import React from "react";
import { Stack } from "@mui/material";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";
import CourseCardTest from "../../components/card/CourseCardTest.jsx";
import useCourseProvider from "../../hooks/useCourseProvider.js";
import WhiteTypography from "../../components/WhiteTypography.jsx";

const Main = () => {
  const { auth } = useAuth();
  // const enrolledCourses = getEnrolledCourses();
  const { courses, enrolledCourses, pendingCourses } = useCourseProvider();

  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Courses"
        subtitle={`Hi ${auth?.firstName}! Good Luck with your studies!`}
      />

      <CardGroupWithTitle title="Enrolled Courses">
        {enrolledCourses?.length > 0 ? (
          <CardGroupWrapper>
            {enrolledCourses &&
              enrolledCourses.map((course) => (
                <CourseCardTest
                  key={course._id}
                  {...course.course}
                  courseId={course._id}
                  isEnrolled={true}
                />
              ))}
          </CardGroupWrapper>
        ) : (
          <WhiteTypography>
            You are not enrolled yet in any course
          </WhiteTypography>
        )}
      </CardGroupWithTitle>
      <CardGroupWithTitle title="Recommended Courses">
        <CardGroupWrapper>
          {courses &&
            courses?.map((course) => (
              <CourseCardTest
                key={course._id}
                {...course}
                courseId={course._id}
                isEnrolled={false}
              />
            ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
