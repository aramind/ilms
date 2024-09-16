import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const setId = (user, index) => {
  return user?._id || index + 1;
};

const columns = [
  { field: "lastName", headerName: "last name" },
  { field: "firstName", headerName: "first name" },
  { field: "email", headerName: "email" },
  { field: "status", headerName: "status" },
  { field: "accessLevel", headerName: "access level" },
];

const formatColHeaders = (col) => {
  const formattedColumns = col.map((c) => ({
    ...c,
    flex: 1,

    renderCell: (params) => (
      <Box width={1} textAlign="start" pl={1}>
        {params.value}
      </Box>
    ),
    editable: false,
    renderHeader: () => (
      <Typography
        sx={{
          fontWeight: "bold",
          width: "100%",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {c.headerName.toUpperCase()}
      </Typography>
    ),
  }));

  return formattedColumns;
};
const StudentsListTable = ({ data, filterOptions }) => {
  const [rows, setRows] = useState([]);

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
  return (
    <>
      <Typography>Students</Typography>
      <DataGrid
        editMode="row"
        columns={formatColHeaders([
          {
            field: "ACTIONS",
            headerName: "ACTIONS",
            renderCell: (params) => <Typography>ADD</Typography>,
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
      />
    </>
  );
};

export default StudentsListTable;
