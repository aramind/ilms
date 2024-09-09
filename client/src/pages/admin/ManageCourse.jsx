import React, { useEffect, useState } from "react";
import useCourseProvider from "../../hooks/useCourseProvider";
import useAuth from "../../hooks/useAuth";
import EditCourse from "./manage-course/EditCourse";
import AutocompleteSelector from "../../components/AutocompleteSelector";
import { Box, Button, Stack } from "@mui/material";
const ManageCourse = () => {
  // const [selectedCourse, setSelectedCourse] = useState({});
  const { coursesList } = useCourseProvider();
  const { auth } = useAuth();
  const [options, setOptions] = useState({});
  const [selectedCourse, setSelectedCourse] = useState({});

  useEffect(() => {
    // Only update if coursesList and auth are defined
    if (coursesList && auth?._id) {
      // const selected =
      //   coursesList.find((course) => course.creator === auth._id) || {};
      // setSelectedCourse(selected);
      setOptions((pv) => coursesList);
    }
  }, [auth?._id, coursesList, setOptions]);

  return (
    <>
      <Stack direction="row" width={1} mt={2} mb={3} alignItems="center">
        <Box flex={1}>
          <AutocompleteSelector
            value={selectedCourse}
            setValue={setSelectedCourse}
            options={options || {}}
            label="Select Course"
          />
        </Box>
        <Stack flex={1} gap={2} direction="row" justifyContent="flex-end">
          <Button variant="contained">temp button</Button>
          <Button variant="contained">temp button</Button>
          <Button variant="contained">temp button</Button>
        </Stack>
      </Stack>

      {selectedCourse && <EditCourse selectedCourse={selectedCourse} />}
    </>
  );
};

export default ManageCourse;
