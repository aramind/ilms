import { useContext } from "react";
import { CourseContext } from "../context/CourseProvider";

const useCourseProvider = () => {
  const { coursesList, enrolledCoursesList, pendingCoursesList } =
    useContext(CourseContext);
  return {
    coursesList,
    enrolledCoursesList,
    pendingCoursesList,
  };
};

export default useCourseProvider;
