import { createContext, useContext, useEffect, useState } from "react";
import useApiGet from "../hooks/api/useApiGet";
import useCourseReq from "../hooks/api/authenticated/useCourseReq";
import useUserReq from "../hooks/api/authenticated/useUserReq";
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
  const { getEnrolledCourses } = useUserReq({ isPublic: false, showAck: true });

  const {
    data: courses,
    isLoading,
    isError,
  } = useApiGet("courses", () => getCourse({ params: "/trimmed" }), {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  const {
    data: enrolledCourses,
    isLoadingEnrolledCoursesReq,
    isErrorEnrolledCoursesReq,
  } = useApiGet("enrolledCourses", getEnrolledCourses, {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  // console.log(enrolledCourses);
  // Determine the value to pass to the context
  const contextValue = {
    courses: courses?.data || [],
    isLoading,
    isError,
    enrolledCourses: enrolledCourses?.data?.enrolledCourses?.filter(
      (c) => c.status === "enrolled"
    ),
    isLoadingEnrolledCoursesReq,
    isErrorEnrolledCoursesReq,
    pendingCourses: enrolledCourses?.data?.enrolledCourses?.filter(
      (c) => c.status === "pending"
    ),
  };

  // console.log("COURSE CONTECT", contextValue);
  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
