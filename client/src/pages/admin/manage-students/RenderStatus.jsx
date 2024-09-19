import { Stack } from "@mui/material";
import React, { useState } from "react";
import ReusableSelect from "../../../components/ReusableSelect";

const RenderStatus = ({ row, sendPatchUserReq }) => {
  const [status, setStatus] = useState(row?.status);

  const handleChange = (e) => {
    setStatus(e.target.value);
    sendPatchUserReq({
      _id: row?.id,
      data: { status: e.target.value },
    });
  };
  return (
    <Stack direction="row">
      <ReusableSelect
        labelId="status-selector"
        id="status-selector"
        value={status}
        onChange={handleChange}
        options={[
          { label: "pending", value: "pending" },
          { label: "active", value: "active" },
          { label: "suspended", value: "suspended" },
          { label: "deleted", value: "deleted" },
        ]}
      />
    </Stack>
  );
};

export default RenderStatus;
