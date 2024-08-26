import { createContext, useContext, useEffect, useState } from "react";
import useApiGet from "../hooks/api/useApiGet";
import useCourseReq from "../hooks/api/authenticated/useCourseReq";
import useUserReq from "../hooks/api/authenticated/useUserReq";
import useAuth from "../hooks/useAuth";

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
  const { getEnrolledCourses } = useUserReq({ isPublic: false, showAck: true });
  const {
    data: coursesData,
    // isLoading,
    // isError,
  } = useApiGet("courses", () => getCourse({ params: "/trimmed" }), {
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: !!auth?._id,
  });

  const {
    data: enrolledCoursesData,
    // isLoadingEnrolledCoursesReq,
    // isErrorEnrolledCoursesReq,
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
      coursesData?.data?.filter((c) => !enrolledCoursesIds?.includes(c._id))
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
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
