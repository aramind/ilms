import { createContext, useContext, useEffect, useState } from "react";
import useApiGet from "../hooks/api/useApiGet";
import useCourseReq from "../hooks/api/authenticated/useCourseReq";
import useAuth from "../hooks/useAuth";

// Define a type for the context value if using TypeScript
const defaultContextValue = {
  courses: [],
  isLoading: true,
  isError: false,
};

export const CourseContext = createContext(defaultContextValue);

// Custom hook for accessing the context
export const useCourses = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
};

const CourseProvider = ({ children }) => {
  const { auth } = useAuth();
  const { getCourse } = useCourseReq({ isPublic: false, showAck: false });

  const {
    data: courses,
    isLoading,
    isError,
  } = useApiGet("courses", () => getCourse({ params: "/trimmed" }), {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  // const {
  //   data: enrolledCourses,
  //   isLoadingEnrolledCoursesReq,
  //   isErrorEnrolledCoursesReq
  // } = useApiGet("enrolledCourses", () => getEnrolledCourse)

  // Determine the value to pass to the context
  const contextValue = {
    courses: courses?.data || [],
    isLoading,
    isError,
  };

  console.log(contextValue.courses);
  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
