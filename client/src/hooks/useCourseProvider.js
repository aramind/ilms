import { useContext } from "react";
import { CourseContext } from "../context/CourseProvider";

const useCourseProvider = () => {
  const {
    coursesList,
    enrolledCoursesList,
    pendingCoursesList,
    recommendedCoursesList,
  } = useContext(CourseContext);
  return {
    coursesList,
    enrolledCoursesList,
    pendingCoursesList,
    recommendedCoursesList,
  };
};

export default useCourseProvider;
