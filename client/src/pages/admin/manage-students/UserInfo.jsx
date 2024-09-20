import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ControlledLabelledTextField from "../../../components/controlled/ContLabelledTextField";
import { Controller, useFormContext } from "react-hook-form";
import LabelWrapper from "../../../wrappers/LabelWrapper";
import ReusableSelect from "../../../components/ReusableSelect";
import useCourseProvider from "../../../hooks/useCourseProvider";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";

const UserInfo = ({ enrolledCourses }) => {
  const { control } = useFormContext();
  const { coursesList } = useCourseProvider();

  console.log(coursesList);
  console.log(control);
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <ControlledLabelledTextField label="first name" name="firstName" />
        <ControlledLabelledTextField label="last name" name="lastName" />
        <ControlledLabelledTextField label="email" name="email" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <Stack flex={1}>
              <LabelWrapper id="role" label="role" />
              <ReusableSelect
                labelId="role-select"
                id="role-select"
                value={field.value}
                onChange={field.onChange}
                styleProps={{ minWidth: "100px" }}
                options={[
                  { label: "student", value: "student" },
                  { label: "admin", value: "admin" },
                ]}
              />
            </Stack>
          )}
        />
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Stack flex={1}>
              <LabelWrapper id="status" label="status" />
              <ReusableSelect
                labelId="status-select"
                id="status-select"
                value={field.value}
                onChange={field.onChange}
                styleProps={{ minWidth: "100px" }}
                options={[
                  { label: "pending", value: "pending" },
                  { label: "active", value: "active" },
                  { label: "suspended", value: "suspended" },
                  { label: "deleted", value: "deleted" },
                ]}
              />
            </Stack>
          )}
        />
        <Controller
          control={control}
          name="accessLevel"
          render={({ field }) => (
            <Stack flex={1}>
              <LabelWrapper id="accessLevel" label="accessLevel" />
              <ReusableSelect
                labelId="accessLevel-select"
                id="accessLevel-select"
                value={field.value}
                onChange={field.onChange}
                styleProps={{ minWidth: "100px" }}
                options={[
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                ]}
              />
            </Stack>
          )}
        />
      </Stack>
      <Typography>Courses</Typography>
      {enrolledCourses &&
        enrolledCourses.map((course, index) => (
          <Stack
            width="32%"
            key={course._id}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Stack direction="row" flex={2} spacing={1}>
              <Typography>{index + 1}.)</Typography>
              <Typography>
                {coursesList.find((c) => c._id === course.course)?.title ||
                  "Unknown Course"}
              </Typography>
            </Stack>
            <Box flex={1}>
              <Controller
                control={control}
                name={`enrolledCourses[${index}].status`} // Update status for each course
                render={({ field }) => (
                  <ReusableSelect
                    labelId={`status-select-${index}`}
                    id={`status-select-${index}`}
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      { label: "pending", value: "pending" },
                      { label: "enrolled", value: "enrolled" },
                      { label: "completed", value: "completed" },
                      { label: "dropped", value: "dropped" },
                    ]}
                  />
                )}
              />
            </Box>
          </Stack>
        ))}
    </Stack>
  );
};

export default UserInfo;
