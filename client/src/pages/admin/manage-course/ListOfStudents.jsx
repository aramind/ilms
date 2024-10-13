import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AutocompleteSelector from "../../../components/AutocompleteSelector";
import useApiGet from "../../../hooks/api/useApiGet";
import useCourseReq from "../../../hooks/api/authenticated/useCourseReq";
import useAuth from "../../../hooks/useAuth";
import LoadingPage from "../../LoadingPage";
import ErrorPage from "../../ErrorPage";

const studentsStatusOptions = [
  "all",
  "pending",
  "enrolled",
  "deleted",
  "archived",
  "suspended",
];
const ListOfStudents = ({ selectedCourse }) => {
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

  const students = studentsData?.data;
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
  console.log(students);
  console.log(formattedStudentsData);

  return (
    <Box>
      <Typography>LIST OF STUDENTS</Typography>
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
        {/* <Typography>{selectedCourse?.title} students</Typography> */}
        <br />
      </Stack>
      <Stack direction="row" width="100%" mb={0.5}>
        <Typography sx={localStyles.header} mr={3}>
          #
        </Typography>
        <Typography sx={localStyles.header} flex={1}>
          STUDENT
        </Typography>
        <Typography sx={localStyles.header} flex={1}>
          ENROLLMENT STATUS
        </Typography>
      </Stack>
      {students &&
        students.map((student, index) => (
          <Stack key={index} direction="row" width="100%" mb={0.5}>
            <Typography mr={3}>{index + 1}.</Typography>
            <Typography flex={1}>
              {student?.firstName + " " + student?.lastName}
            </Typography>
            <Typography flex={1}>
              {
                student?.enrolledCourses?.find(
                  (ec) => ec.course === selectedCourse?._id
                )?.status
              }
            </Typography>
          </Stack>
        ))}
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
