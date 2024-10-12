import React, { useEffect, useState } from "react";
import useCourseProvider from "../../hooks/useCourseProvider";
import useAuth from "../../hooks/useAuth";
import EditCourse from "./manage-course/EditCourse";
import AutocompleteSelector from "../../components/AutocompleteSelector";
import { Box, Stack } from "@mui/material";
import ListOfStudents from "./manage-course/ListOfStudents";

const WhiteBoxWrapper = ({ children }) => {
  return (
    <Box
      borderRadius={1}
      p={2}
      sx={{ bgcolor: (theme) => theme.palette.white.light }}
    >
      {children}
    </Box>
  );
};
const ManageCourse = () => {
  // const [selectedCourse, setSelectedCourse] = useState({});
  const { allCoursesList } = useCourseProvider();
  const { auth } = useAuth();
  const [options, setOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(options[0] || null);

  // console.log(allCoursesList);
  useEffect(() => {
    if (allCoursesList && auth?._id) {
      setOptions((pv) => allCoursesList);
    }
  }, [auth?._id, allCoursesList, setOptions]);

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

      {selectedCourse && (
        <>
          <WhiteBoxWrapper>
            <EditCourse selectedCourse={selectedCourse} />
          </WhiteBoxWrapper>
          <br />
          <WhiteBoxWrapper>
            <ListOfStudents selectedCourse={selectedCourse} />
          </WhiteBoxWrapper>
        </>
      )}
    </>
  );
};

export default ManageCourse;
