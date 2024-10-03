import React, { useEffect, useState } from "react";
import useCourseProvider from "../../hooks/useCourseProvider";
import useAuth from "../../hooks/useAuth";
import EditCourse from "./manage-course/EditCourse";
import AutocompleteSelector from "../../components/AutocompleteSelector";
import { Box, Stack } from "@mui/material";
const ManageCourse = () => {
  // const [selectedCourse, setSelectedCourse] = useState({});
  const { coursesList } = useCourseProvider();
  const { auth } = useAuth();
  const [options, setOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(options[0] || null);

  useEffect(() => {
    if (coursesList && auth?._id) {
      setOptions((pv) => coursesList);
    }
  }, [auth?._id, coursesList, setOptions]);

  return (
    <>
      <Stack direction="row" width={1} mt={2} mb={3} alignItems="center">
        <Box width={{ xs: "100%", md: "50%" }}>
          <AutocompleteSelector
            value={selectedCourse}
            setValue={setSelectedCourse}
            options={options}
            label="Select Course"
          />
        </Box>
      </Stack>

      {selectedCourse && <EditCourse selectedCourse={selectedCourse} />}
    </>
  );
};

export default ManageCourse;
