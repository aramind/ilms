import React from "react";
import useCourseReq from "../../../hooks/api/authenticated/useCourseReq";
import useApiSend from "../../../hooks/api/useApiSend";
import CourseForm from "../course-form/CourseForm";

const defaultValues = {
  code: "",
  acronym: "",
  title: "",
  category: "",
  description: "",
  topics: [
    {
      title: "",

      description: "",

      topicTasks: [{ action: "read", instruction: "", link: "" }],
    },
  ],
};

const AddCourse = () => {
  const { addCourse } = useCourseReq({ isPublic: false, showAck: true });

  const { mutate: sendAddCourseReq, isLoading } = useApiSend(
    addCourse,
    ["courses"],
    (data) => {
      console.log(data?.data);
    }
  );

  return (
    <>
      <CourseForm
        sendFormCallback={sendAddCourseReq}
        isLoading={isLoading}
        defaultValues={defaultValues}
      />
    </>
  );
};

export default AddCourse;
