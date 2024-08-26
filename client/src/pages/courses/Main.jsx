import React, { Fragment, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";
import CourseCardTest from "../../components/card/CourseCardTest.jsx";

import WhiteTypography from "../../components/WhiteTypography.jsx";
import useCourseProvider from "../../hooks/useCourseProvider.js";

const Main = () => {
  const { auth } = useAuth();
  const { enrolledCoursesList, pendingCoursesList, recommendedCoursesList } =
    useCourseProvider();
  // const [coursesList, setCoursesList] = useState([]);
  // const [enrolledCoursesList, setEnrolledCoursesList] = useState([]);
  // const [pendingCOursesList, setPendingCoursesList] = useState([]);
  // const { getCourse } = useCourseReq({ isPublic: false, showAck: false });
  // const { getEnrolledCourses } = useUserReq({ isPublic: false, showAck: true });
  // const { data: coursesData } = useApiGet(
  //   "courses",
  //   () => getCourse({ params: "/trimmed" }),
  //   {
  //     refetchOnWindowFocus: true,
  //     retry: 3,
  //     enabled: !!auth?._id,
  //   }
  // );

  // const { data: enrolledCoursesData } = useApiGet(
  //   "enrolledCourses",
  //   getEnrolledCourses,
  //   {
  //     refetchOnWindowFocus: true,
  //     retry: 3,
  //     enabled: !!auth?._id,
  //   }
  // );

  // useEffect(() => {
  //   const enrolledCoursesIds = enrolledCoursesData?.data?.enrolledCourses?.map(
  //     (ec) => ec?._id
  //   );
  //   setCoursesList(
  //     coursesData?.data?.filter((c) => !enrolledCoursesIds.includes(c._id))
  //   );
  //   setEnrolledCoursesList(
  //     enrolledCoursesData?.data?.enrolledCourses?.filter(
  //       (ec) => ec.status === "enrolled"
  //     )
  //   );
  //   setPendingCoursesList(
  //     enrolledCoursesData?.data?.enrolledCourses?.filter(
  //       (ec) => ec.status === "pending"
  //     )
  //   );
  // }, [coursesData?.data, enrolledCoursesData?.data?.enrolledCourses]);

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
                  status={ec?.status}
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
      <CardGroupWithTitle title="Pending Courses">
        {pendingCoursesList?.length > 0 ? (
          <CardGroupWrapper>
            {pendingCoursesList.map((ec) => (
              <Fragment key={ec?._id}>
                <CourseCardTest
                  title={ec?.course?.title}
                  description={ec?.course?.description}
                  progress={ec?.progress}
                  status={ec?.status}
                  isEnrolled={false}
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
          {recommendedCoursesList &&
            recommendedCoursesList?.map((course) => (
              <CourseCardTest
                key={course._id}
                {...course}
                courseId={course._id}
                status={course?.status}
                isEnrolled={false}
              />
            ))}
        </CardGroupWrapper>
      </CardGroupWithTitle>
    </Stack>
  );
};

export default Main;
