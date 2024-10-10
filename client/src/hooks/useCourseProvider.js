import { useContext } from "react";
import { CourseContext } from "../context/CourseProvider";

const useCourseProvider = () => {
  const {
    allCoursesList,
    coursesList,
    enrolledCoursesList,
    pendingCoursesList,
    recommendedCoursesList,
  } = useContext(CourseContext);
  return {
    allCoursesList,
    coursesList,
    enrolledCoursesList,
    pendingCoursesList,
    recommendedCoursesList,
  };
};

export default useCourseProvider;
