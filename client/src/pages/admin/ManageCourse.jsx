import React, { useEffect, useState } from "react";
import useCourseProvider from "../../hooks/useCourseProvider";
import useAuth from "../../hooks/useAuth";
import EditCourse from "./manage-course/EditCourse";
import AutocompleteSelector from "../../components/AutocompleteSelector";
import { Box, Stack, Switch, Typography } from "@mui/material";
import ListOfStudents from "./manage-course/ListOfStudents";
import useUserReq from "../../hooks/api/authenticated/useUserReq";
import useApiSend from "../../hooks/api/useApiSend";
import LoadingPage from "../LoadingPage";

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

const DynamicSection = ({ sectionName, title, children }) => {
  const [visibleSections, setVisibleSections] = useState([
    "meta",
    "topics",
    "students",
  ]);

  const isVisible = visibleSections.includes(sectionName);

  const handleChange = () => {
    setVisibleSections(
      (prev) =>
        prev.includes(sectionName)
          ? prev.filter((e) => e !== sectionName) // Remove sectionName if it's visible
          : [...prev, sectionName] // Add sectionName if it's not visible
    );
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{title.toUpperCase()}</Typography>

        <Switch checked={isVisible} onChange={handleChange} />
      </Stack>
      {isVisible && <Box mt={2}>{children}</Box>}
    </>
  );
};

const ManageCourse = () => {
  // const [selectedCourse, setSelectedCourse] = useState({});
  const { allCoursesList } = useCourseProvider();
  const { auth } = useAuth();
  const [options, setOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(options[0] || null);
  const { updateUser } = useUserReq({
    isPublic: false,
    showAck: true,
  });
  // console.log(allCoursesList);
  useEffect(() => {
    if (allCoursesList && auth?._id) {
      setOptions((pv) => allCoursesList);
    }
  }, [auth?._id, allCoursesList, setOptions]);

  const { mutate: sendPatchUserReq, isLoadingUpdateUser } = useApiSend(
    (patchInfo) => updateUser(patchInfo),
    ["users", "students"]
    // (data) => {
    //   console.log(data?.data);
    // }
  );
  // updating student
  const handleUpdateEnrollmentStatus = (data) => {
    console.log("updating enrollment status", data);
    sendPatchUserReq(data);
  };

  if (isLoadingUpdateUser) {
    return <LoadingPage />;
  }

  console.log(selectedCourse?._id);
  return (
    <>
      <br />
      <WhiteBoxWrapper>
        <Box width="100%">
          <AutocompleteSelector
            value={selectedCourse}
            setValue={setSelectedCourse}
            options={options}
            label="Select Course"
          />
        </Box>
      </WhiteBoxWrapper>
      <br />

      {selectedCourse && (
        <>
          <WhiteBoxWrapper>
            <DynamicSection sectionName="meta" title="course details">
              <EditCourse selectedCourse={selectedCourse} />
            </DynamicSection>
          </WhiteBoxWrapper>
          <br />
          <WhiteBoxWrapper>
            <DynamicSection sectionName="students" title="students">
              <ListOfStudents
                selectedCourse={selectedCourse}
                handleUpdateEnrollmentStatus={handleUpdateEnrollmentStatus}
              />
            </DynamicSection>
          </WhiteBoxWrapper>
        </>
      )}
    </>
  );
};

export default ManageCourse;
