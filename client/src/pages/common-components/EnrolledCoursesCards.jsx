import React from "react";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CourseCard from "../../components/card/CourseCard";
import WhiteTypography from "../../components/WhiteTypography";

const EnrolledCoursesCards = ({ enrolledCoursesList }) => {
  return (
    <CardGroupWithTitle title="Enrolled Courses">
      {enrolledCoursesList?.length > 0 ? (
        <CardGroupWrapper>
          {enrolledCoursesList.map((ec) => (
            <CourseCard
              key={ec?.course?._id}
              title={ec?.course?.title}
              description={ec?.course?.description}
              progress={ec?.progress}
              status={ec?.status}
              courseId={ec?.course?._id}
            />
          ))}
        </CardGroupWrapper>
      ) : (
        <WhiteTypography>
          You are not enrolled yet in any course
        </WhiteTypography>
      )}
    </CardGroupWithTitle>
  );
};

export default EnrolledCoursesCards;
