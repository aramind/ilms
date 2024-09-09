import React from "react";
import useCourseProvider from "../../../hooks/useCourseProvider";
import CourseForm from "../course-form/CourseForm";

const EditCourse = ({ selectedCourse }) => {
  return (
    <>
      <CourseForm
        // sendFormCallback={sendAddCourseReq}
        // isLoading={isLoading}
        defaultValues={selectedCourse}
      />
    </>
  );
};

export default EditCourse;
