import React, { useEffect, useState } from "react";
import useCourseProvider from "../../hooks/useCourseProvider";
import useAuth from "../../hooks/useAuth";
import EditCourse from "./manage-course/EditCourse";
const ManageCourse = () => {
  // const [selectedCourse, setSelectedCourse] = useState({});
  const { coursesList } = useCourseProvider();
  const { auth } = useAuth();
  const [selectedCourse, setSelectedCourse] = useState({});

  useEffect(() => {
    // Only update if coursesList and auth are defined
    if (coursesList && auth?._id) {
      const selected =
        coursesList.find((course) => course.creator === auth._id) || {};
      setSelectedCourse(selected);
    }
  }, [auth?._id, coursesList]);

  return (
    <>{selectedCourse && <EditCourse selectedCourse={selectedCourse} />}</>
  );
};

export default ManageCourse;
