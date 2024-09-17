import React, { useEffect, useState } from "react";
import useUserReq from "../../hooks/api/authenticated/useUserReq";
import useApiGet from "../../hooks/api/useApiGet";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

import StudentsListTable from "./manage-students/StudentsListTable";
import useApiSend from "../../hooks/api/useApiSend";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const statusOptions = ["all", "pending", "active", "suspended", "deleted"];

const ManageStudent = () => {
  // const [updateArguments, setUpdateArguments] = useState({});
  const [filterOptions, setFilterOptions] = useState({ status: "all" });

  useEffect(() => {}, []);

  const { getUsers, updateUser } = useUserReq({
    isPublic: false,
    showAck: true,
  });

  const {
    data: students,
    isLoading,
    isError,
    error,
  } = useApiGet(
    "students",
    () =>
      getUsers({
        params: `?role=student&fields=firstName,lastName,email,_id,status,accessLevel`,
      }),
    {
      refetchOnWindowFocus: true,
      retry: 3,
      // enabled: !!auth?.id,
    }
  );

  const { mutate: sendPatchUserReq, isLoadingUpdateUser } = useApiSend(
    (patchInfo) => updateUser(patchInfo),
    ["users", "students"]
    // (data) => {
    //   console.log(data?.data);
    // }
  );

  if (isLoading || isLoadingUpdateUser) {
    return <LoadingPage />;
  }

  if (isError) {
    <ErrorPage message={`${error?.message}`} />;
  }

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center" mb={2}>
        <Typography>SELECT</Typography>

        <FormControl sx={{ m: 1, minWidth: "100px" }} size="small">
          <Select
            labelId="status-selector"
            id="status-selector"
            value={filterOptions?.status}
            onChange={(e) => {
              setFilterOptions({ status: e.target.value });
            }}
          >
            {statusOptions?.map((option) => (
              <MenuItem key={option} value={option}>
                <Typography color="primary.dark" fontWeight="bold">
                  {option.toUpperCase()}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography>STUDENTS</Typography>
      </Stack>
      <Box width={1}>
        <StudentsListTable
          data={students?.data}
          filterOptions={filterOptions?.status === "all" ? {} : filterOptions}
          sendPatchUserReq={sendPatchUserReq}
        />
      </Box>
    </>
  );
};

export default ManageStudent;
