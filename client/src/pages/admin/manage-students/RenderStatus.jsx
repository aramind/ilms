import { FormControl, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";

const RenderStatus = ({ row }) => {
  const [status, setStatus] = useState(row?.status);

  return (
    <Stack direction="row">
      <FormControl sx={{ m: 1, minWidth: "100px" }} size="small">
        <Select
          labelId="status-selector"
          id="status-selector"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            console.log(row?.id);
            console.log(e.target.value);
          }}
        >
          <MenuItem value="pending">pending</MenuItem>
          <MenuItem value="active">active</MenuItem>
          <MenuItem value="suspended">suspended</MenuItem>
          <MenuItem value="deleted">deleted</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default RenderStatus;
