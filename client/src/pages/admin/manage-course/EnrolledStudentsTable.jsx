import React, { useState } from "react";
import CenteredBox from "../../../components/CenteredBox";
import RenderStatus from "../manage-students/RenderStatus";
import { Box, Typography } from "@mui/material";

const createColumns = (sendPatchUserReq) => {
  return [
    { field: "lastName", headerName: "last name" },
    { field: "enrollmentStatus", headerName: "enrollment status" },
    { field: "firstName", headerName: "first name" },
    { field: "email", headerName: "email" },
    {
      field: "status",
      headerName: "status",
      renderCell: (params) => (
        <CenteredBox>
          {" "}
          <RenderStatus row={params.row} sendPatchUserReq={sendPatchUserReq} />
        </CenteredBox>
      ),
    },
    { field: "accessLevel", headerName: "access level" },
  ];
};

const formatColHeaders = (col) => {
  const formattedColumns = col.map((c) => ({
    ...c,
    flex: 1,
    headerAlign: "center",
    renderCell: c.renderCell
      ? c.renderCell
      : (params) => <CenteredBox> {params.value}</CenteredBox>,
    editable: false,
    renderHeader: () => (
      <Typography
        sx={{
          fontWeight: "bold",

          color: (theme) => theme.palette.primary.main,
        }}
      >
        {c.headerName.toUpperCase()}
      </Typography>
    ),
  }));

  return formattedColumns;
};

const EnrolledStudentsTable = (
  data,
  title = "",
  filterOptions,
  sendPatchUserReq
) => {
  const [rows, setRows] = useState([]);
  const columns = createColumns(sendPatchUserReq);

  return <Box width="100%" px={1} textAlign="center"></Box>;
};

export default EnrolledStudentsTable;
