import React, { Fragment, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";
import CourseCardTest from "../../components/card/CourseCardTest.jsx";

import WhiteTypography from "../../components/WhiteTypography.jsx";
import useCourseReq from "../../hooks/api/authenticated/useCourseReq.js";
import useApiGet from "../../hooks/api/useApiGet.js";
import useUserReq from "../../hooks/api/authenticated/useUserReq.js";

const Main = () => {
  const { auth } = useAuth();
  // const enrolledCourses = getEnrolledCourses();

  const [coursesList, setCoursesList] = useState([]);
  const [enrolledCoursesList, setEnrolledCoursesList] = useState([]);
  const { getCourse } = useCourseReq({ isPublic: false, showAck: false });
  const { getEnrolledCourses } = useUserReq({ isPublic: false, showAck: true });
  const {
    data: coursesData,
    // isLoading,
    // isError,
  } = useApiGet("courses", () => getCourse({ params: "/trimmed" }), {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  const {
    data: enrolledCoursesData,
    // isLoadingEnrolledCoursesReq,
    // isErrorEnrolledCoursesReq,
  } = useApiGet("enrolledCourses", getEnrolledCourses, {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  useEffect(() => {
    setCoursesList(coursesData?.data);
    setEnrolledCoursesList(
      enrolledCoursesData?.data?.enrolledCourses?.filter(
        (ec) => ec.status === "enrolled"
      )
    );
  }, [coursesData?.data, enrolledCoursesData?.data?.enrolledCourses]);

  // console.log(coursesList);
  console.log(enrolledCoursesData?.data?.enrolledCourses);
  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <PageHeader
        title="Courses"
        subtitle={`Hi ${auth?.firstName}! Good Luck with your studies!`}
      />

      <CardGroupWithTitle title="Enrolled Courses">
        {enrolledCoursesList?.length > 0 ? (
          <CardGroupWrapper>
            {enrolledCoursesList.map((ec) => (
              <Fragment key={ec?._id}>
                <CourseCardTest
                  title={ec?.course?.title}
                  description={ec?.course?.description}
                  progress={ec?.progress}
                  isEnrolled={true}
                  courseId={ec?.course?._id}
                />
              </Fragment>
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
          {coursesList &&
            coursesList?.map((course) => (
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
