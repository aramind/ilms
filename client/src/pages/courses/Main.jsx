import React, { Fragment } from "react";
import { Stack } from "@mui/material";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth.js";
import WhiteTypography from "../../components/WhiteTypography.jsx";
import useCourseProvider from "../../hooks/useCourseProvider.js";
import CourseCard from "../../components/card/CourseCard.jsx";

const Main = () => {
  const { auth } = useAuth();
  const { enrolledCoursesList, pendingCoursesList, recommendedCoursesList } =
    useCourseProvider();

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
                <CourseCard
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
                <CourseCard
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
              <CourseCard
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
