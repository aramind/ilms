import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import RenderUserActions from "./RenderUserActions";
import RenderStatus from "./RenderStatus";

const setId = (user, index) => {
  return user?._id || index + 1;
};

const createColumns = (sendPatchUserReq) => {
  return [
    { field: "lastName", headerName: "last name", width: 150 },
    { field: "firstName", headerName: "first name", width: 150 },
    { field: "email", headerName: "email" },
    {
      field: "status",
      headerName: "status",
      renderCell: (params) => (
        <RenderStatus row={params.row} sendPatchUserReq={sendPatchUserReq} />
      ),
    },
    { field: "accessLevel", headerName: "access level", width: 150 },
  ];
};

const formatColHeaders = (col) => {
  const formattedColumns = col.map((c) => ({
    ...c,
    flex: c.width ? 0 : 1,

    renderCell: c.renderCell
      ? c.renderCell
      : (params) => (
          <Box width={1} textAlign="start" pl={1}>
            {params.value}
          </Box>
        ),
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

const StudentsListTable = ({
  data,
  title = "",
  filterOptions,
  sendPatchUserReq,
}) => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = createColumns(sendPatchUserReq);
  const processedRows = useMemo(() => {
    if (!data) return [];

    // Filter the data based on multiple fields
    const filtered = filterOptions
      ? data.filter((user) => {
          // Check each key in filterOptions and return true if all match
          return Object.keys(filterOptions).every((key) => {
            // If filterOptions[key] is provided, match the user's field with it
            if (filterOptions[key]) {
              return user[key] === filterOptions[key];
            }
            return true; // If no filter is provided for this key, don't filter by it
          });
        })
      : data;

    return filtered.map((user, index) => ({
      id: setId(user, index),

      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      status: user.status,
      accessLevel: user.accessLevel,
    }));
  }, [data, filterOptions]);

  useEffect(() => {
    setRows(processedRows);
  }, [processedRows]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectedRows((pv) => newSelection);
  };
  return (
    <Box width="100%" px={1} textAlign="center">
      {rows?.length < 1 ? (
        <Typography my={2} sx={{ color: (theme) => theme.palette.red.dark }}>
          No students to show.
        </Typography>
      ) : (
        <DataGrid
          sx={{ width: "100%", overflowX: "auto" }}
          editMode="row"
          columns={formatColHeaders([
            {
              field: "ACTIONS",
              headerName: "ACTIONS",
              width: 100,
              renderCell: (params) => <RenderUserActions row={params.row} />,
            },
            ...columns,
          ])}
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
          rowSelectionModel={selectedRows}
          onRowSelectionModelChange={handleSelectionModelChange}
        />
      )}
    </Box>
  );
};

export default StudentsListTable;
