import React from "react";
import CardGroupWithTitle from "../../wrappers/CardGroupWithTitle";
import CardGroupWrapper from "../../wrappers/CardGroupWrapper";
import CourseCard from "../../components/card/CourseCard";
import WhiteTypography from "../../components/WhiteTypography";

const CoursesGroup = ({ coursesList, title, textDisplay }) => {
  return (
    <CardGroupWithTitle title={title}>
      {coursesList?.length > 0 ? (
        <CardGroupWrapper>
          {coursesList.map((cl) => (
            <CourseCard
              key={cl?.course?._id}
              title={cl?.course?.title}
              description={cl?.course?.description}
              progress={cl?.progress}
              status={cl?.status}
              courseId={cl?.course?._id}
              isEnrolled={cl?.status === "enrolled"}
            />
          ))}
        </CardGroupWrapper>
      ) : (
        <WhiteTypography>{textDisplay || ""}</WhiteTypography>
      )}
    </CardGroupWithTitle>
  );
};

export default CoursesGroup;
