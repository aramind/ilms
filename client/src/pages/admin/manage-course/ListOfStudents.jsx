import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AutocompleteSelector from "../../../components/AutocompleteSelector";
import useApiGet from "../../../hooks/api/useApiGet";
import useCourseReq from "../../../hooks/api/authenticated/useCourseReq";
import useAuth from "../../../hooks/useAuth";
import LoadingPage from "../../LoadingPage";
import ErrorPage from "../../ErrorPage";

const studentsStatusOptions = ["all", "enrolled", "pending", "suspended"];
const ListOfStudents = ({ selectedCourse }) => {
  const [students, setStudents] = useState([]);
  const { auth } = useAuth();
  console.log(selectedCourse?._id);
  const { getStudents } = useCourseReq({ isPublic: false, showAck: false });

  const {
    data: studentsData,
    isLoading,
    isError,
    error,
  } = useApiGet(
    "students",
    () =>
      getStudents({
        courseId: selectedCourse?._id,
        params: `?fields=_id,email,firstName,lastName,status`,
      }),
    {
      refetchOnWindowFocus: true,
      retry: 3,
      enabled: !!auth?._id,
    }
  );

  useEffect(() => {
    setStudents((prev) => studentsData?.data);
  }, [studentsData]);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage message={error?.message || "Request Error"} />;

  return (
    <Box>
      <Typography>LIST OF STUDENTS</Typography>
      <Box width={{ xs: "100%", md: "50%" }}>
        <AutocompleteSelector
          value={studentsStatusOptions[0]}
          // setValue={setSelectedCourse}
          options={studentsStatusOptions}
          label="Select Course"
        />
        <Typography>{selectedCourse?.title} students</Typography>
        {students &&
          students.map((student, index) => (
            <Typography key={index}>{student?.email}</Typography>
          ))}
      </Box>
    </Box>
  );
};

export default ListOfStudents;
