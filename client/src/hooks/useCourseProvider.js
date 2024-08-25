import { useContext } from "react";
import { CourseContext } from "../context/CourseProvider";

const useCourseProvider = () => {
  const {
    courses,
    enrolledCourses,
    pendingCourses,
    isLoading,
    isError,
    isLoadingEnrolledCoursesReq,
    isErrorEnrolledCoursesReq,
  } = useContext(CourseContext);
  return {
    courses,
    enrolledCourses,
    pendingCourses,
    isLoading,
    isError,
    isLoadingEnrolledCoursesReq,
    isErrorEnrolledCoursesReq,
  };
};

export default useCourseProvider;
