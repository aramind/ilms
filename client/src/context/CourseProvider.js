import { createContext, useContext, useEffect, useState } from "react";
import useApiGet from "../hooks/api/useApiGet";
import useCourseReq from "../hooks/api/authenticated/useCourseReq";
import useUserReq from "../hooks/api/authenticated/useUserReq";
import useAuth from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";

// Define a type for the context value if using TypeScript
const defaultContextValue = {};

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

  const [coursesList, setCoursesList] = useState([]);
  const [enrolledCoursesList, setEnrolledCoursesList] = useState([]);
  const [pendingCoursesList, setPendingCoursesList] = useState([]);
  const [recommendedCoursesList, setRecommendedCoursesList] = useState([]);
  const { getCourse } = useCourseReq({ isPublic: false, showAck: false });
  const { getEnrolledCourses } = useUserReq({
    isPublic: false,
    showAck: false,
  });
  const {
    data: coursesData,
    isLoading: isLoadingInCoursesReq,
    isError: isErrorInCoursesReq,
    error: errorInCourseReq,
  } = useApiGet("courses", () => getCourse({ params: "/trimmed" }), {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  const {
    data: enrolledCoursesData,
    isLoading: isLoadingInEnrolledCoursesReq,
    isError: isErrorInEnrolledCoursesReq,
    error: errorInEnrolledCourseReq,
  } = useApiGet("enrolledCourses", getEnrolledCourses, {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  useEffect(() => {
    const enrolledCoursesIds = enrolledCoursesData?.data?.enrolledCourses?.map(
      (ec) => ec?._id
    );
    setCoursesList(coursesData?.data);
    setRecommendedCoursesList(
      coursesData?.data
        ?.filter((c) => !enrolledCoursesIds?.includes(c._id))
        .map((c) => ({
          course: c,
        }))
    );
    setEnrolledCoursesList(
      enrolledCoursesData?.data?.enrolledCourses?.filter(
        (ec) => ec.status === "enrolled"
      )
    );
    setPendingCoursesList(
      enrolledCoursesData?.data?.enrolledCourses?.filter(
        (ec) => ec.status === "pending"
      )
    );
  }, [coursesData?.data, enrolledCoursesData?.data?.enrolledCourses]);

  // / Combine loading and error states
  const isLoading = isLoadingInCoursesReq || isLoadingInEnrolledCoursesReq;
  const isError = isErrorInCoursesReq || isErrorInEnrolledCoursesReq;

  const getErrorMessage = () => {
    const error = errorInCourseReq || errorInEnrolledCourseReq;
    return error?.message || "Request Error";
  };

  // console.log("COURSE CONTECT", contextValue);

  return (
    <CourseContext.Provider
      value={{
        coursesList,
        enrolledCoursesList,
        pendingCoursesList,
        recommendedCoursesList,
      }}
    >
      {isLoading ? (
        <LoadingPage />
      ) : isError ? (
        <ErrorPage message={getErrorMessage()} />
      ) : (
        children
      )}
      {/* {children} */}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
