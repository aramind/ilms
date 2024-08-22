import React, { useMemo } from "react";
import { Stack } from "@mui/material";
import CourseCard from "../../components/card/CourseCard";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import { mockCourses } from "../../configs/mockDB";
import { getCourseProgress, getEnrolledCourses } from "../../configs/API";
import { db } from "../../configs/db";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";
import useApiGet from "../../hooks/api/useApiGet.js";
import useCourseReq from "../../hooks/api/authenticated/useCourseReq.js";
import CourseCardTest from "../../components/card/CourseCardTest.jsx";
import useCourseProvider from "../../hooks/useCourseProvider.js";

const Main = () => {
  const { auth } = useAuth();
  const enrolledCourses = getEnrolledCourses();
  const { courses } = useCourseProvider();

  // Convert arrayA to a Set for efficient lookup
  const enrolledCourseIds = useMemo(
    () => new Set(auth?.enrolledCourses || []),
    [auth?.enrolledCourses]
  );

  const enrolledCoursesDetails = useMemo(
    () => courses.filter((course) => enrolledCourseIds.has(course._id)),
    [courses, enrolledCourseIds]
  );
  const unEnrolledCoursesDetails = useMemo(
    () => courses.filter((course) => !enrolledCourseIds.has(course._id)),
    [courses, enrolledCourseIds]
  );

  // console.log(courses);

  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Courses"
        subtitle={`Hi ${auth?.firstName}! Good Luck with your studies!`}
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
          {unEnrolledCoursesDetails &&
            unEnrolledCoursesDetails?.map((course) => (
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
