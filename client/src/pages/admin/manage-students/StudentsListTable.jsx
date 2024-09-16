import { Typography } from "@mui/material";
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
      <DataGrid editMode="row" columns={columns} rows={rows} />
    </>
  );
};

export default StudentsListTable;
