import React, { useEffect, useMemo, useState } from "react";
import CenteredBox from "../../../components/CenteredBox";
import RenderStatus from "../manage-students/RenderStatus";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import RenderEnrollmentStatus from "./RenderEnrollmentStatus";

const setId = (user, index) => {
  return user?._id || index + 1;
};

const createColumns = (handleUpdateEnrollmentStatus, sendPatchUserReq) => {
  return [
    { field: "lastName", headerName: "last name" },
    { field: "firstName", headerName: "first name" },
    {
      field: "enrollmentStatus",
      headerName: "enrollment status",
      renderCell: (params) => (
        <CenteredBox>
          {" "}
          <RenderEnrollmentStatus
            row={params.row}
            handleUpdateEnrollmentStatus={handleUpdateEnrollmentStatus}
          />
        </CenteredBox>
      ),
    },
    {
      field: "progress",
      headerName: "progress (%)",
      renderCell: (params) => (
        <Typography height={1} textAlign="center" alignContent="center">
          {params.row.progress}
        </Typography>
      ),
    },
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

    // { field: "accessLevel", headerName: "access level" },
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

const EnrolledStudentsTable = ({
  data,
  title = "",
  filterOptions,
  sendPatchUserReq,
  handleUpdateEnrollmentStatus,
}) => {
  const [rows, setRows] = useState([]);
  const columns = createColumns(handleUpdateEnrollmentStatus, sendPatchUserReq);

  const processedRows = useMemo(() => {
    const students = data;
    if (!students) return [];

    // Filter the data based on multiple fields
    const filtered =
      filterOptions === "all" || filterOptions === ""
        ? students
        : students?.filter(
            (student) => student.enrollmentStatus === filterOptions
          );

    return filtered?.map((student, index) => ({
      ...student,
      id: setId(student, index),
    }));
  }, [data, filterOptions]);

  useEffect(() => {
    setRows(processedRows);
  }, [processedRows]);

  return (
    <Box width="100%" px={1} textAlign="center">
      {rows?.length < 1 ? (
        <Typography my={2} sx={{ color: (theme) => theme.palette.red.dark }}>
          No students to show
        </Typography>
      ) : (
        <DataGrid
          sx={{ width: "100%", overflowX: "auto" }}
          editMode="row"
          columns={formatColHeaders([...columns])}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 20, 30, 40, 50]}
          disableRowSelectionOnClick
          checkboxSelection
          //   rowSelectionModel={selectedRows}
          //   onRowSelectionModelChange={handleSelectionModelChange}
          slots={{ toolbar: GridToolbar }}
        />
      )}
    </Box>
  );
};

export default EnrolledStudentsTable;
