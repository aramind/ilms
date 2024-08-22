import { useContext } from "react";
import { CourseContext } from "../context/CourseProvider";

const useCourseProvider = () => {
  const { courses, isLoading, isError } = useContext(CourseContext);
  return { courses, isLoading, isError };
};

export default useCourseProvider;
