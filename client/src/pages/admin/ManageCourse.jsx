import React from "react";
import useCourseProvider from "../../hooks/useCourseProvider";
import useAuth from "../../hooks/useAuth";
const ManageCourse = () => {
  const { coursesList } = useCourseProvider();
  const { auth } = useAuth();

  console.log(coursesList.filter((course) => course.creator === auth?._id));
  return <div>ManageCourse</div>;
};

export default ManageCourse;
