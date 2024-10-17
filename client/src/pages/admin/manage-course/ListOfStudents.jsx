import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AutocompleteSelector from "../../../components/AutocompleteSelector";
import useApiGet from "../../../hooks/api/useApiGet";
import useCourseReq from "../../../hooks/api/authenticated/useCourseReq";
import useAuth from "../../../hooks/useAuth";
import LoadingPage from "../../LoadingPage";
import ErrorPage from "../../ErrorPage";
import EnrolledStudentsTable from "./EnrolledStudentsTable";

const studentsStatusOptions = [
  "all",
  "pending",
  "enrolled",
  "deleted",
  "archived",
  "suspended",
];
const ListOfStudents = ({ selectedCourse, handleUpdateEnrollmentStatus }) => {
  // const [students, setStudents] = useState([]);
  const [category, setCategory] = useState("all");
  const { auth } = useAuth();
  const { getStudents } = useCourseReq({ isPublic: false, showAck: false });

  const {
    data: studentsData,
    isLoading,
    isError,
    error,
    refetch,
  } = useApiGet(
    "students",
    () =>
      getStudents({
        courseId: selectedCourse?._id,
        params: `?fields=_id,email,firstName,lastName,status, enrolledCourses`,
      }),
    {
      retry: 3,
      enabled: !!auth?._id && !!selectedCourse?._id,
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, selectedCourse]);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage message={error?.message || "Request Error"} />;

  const formattedStudentsData = studentsData?.data?.map((student) => {
    const { enrolledCourses, ...data } = student;
    const formattedStudent = {
      ...data,
      enrollmentStatus: student.enrolledCourses?.filter(
        (course) => course._id === selectedCourse?._id
      )?.[0]?.status,
    };
    return formattedStudent;
  });

  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center" my={2}>
        <Typography height="100%">Selecting</Typography>
        <Box flex={0.2}>
          {
            <AutocompleteSelector
              value={category}
              setValue={setCategory}
              options={studentsStatusOptions}
              label="Select Course"
            />
          }
        </Box>
        <Typography height="100%">students</Typography>
        <br />
      </Stack>

      <EnrolledStudentsTable
        data={formattedStudentsData}
        filterOptions={category}
        handleUpdateEnrollmentStatus={handleUpdateEnrollmentStatus}
      />
    </Box>
  );
};

export default ListOfStudents;

const localStyles = {
  header: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: "bold",
  },
};
