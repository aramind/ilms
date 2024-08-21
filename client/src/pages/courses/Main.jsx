import React from "react";
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

const Main = () => {
  const { auth } = useAuth();
  const enrolledCourses = getEnrolledCourses();
  const { getCourse } = useCourseReq({ isPublic: false, showAck: false });

  const { data: courses } = useApiGet(
    "courses",
    () => getCourse({ params: "/trimmed" }),
    {
      refetchOnWindowFocus: true,
      retry: 3,
    }
  );

  console.log(courses?.data);
  // console.log(enrolledCourses);
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
          {courses?.data &&
            courses?.data?.map((course) => (
              <CourseCard key={course.id} {...course} courseId={course._id} />
            ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
