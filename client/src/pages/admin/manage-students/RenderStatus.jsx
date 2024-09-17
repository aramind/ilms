import { FormControl, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";
import useUserReq from "../../../hooks/api/authenticated/useUserReq";
import useApiSend from "../../../hooks/api/useApiSend";

const RenderStatus = ({ row }) => {
  const [status, setStatus] = useState(row?.status);

  const { updateUser } = useUserReq({ isPublic: false, showAck: true });

  const { mutate: sendPatchUserInfo, isLoading } = useApiSend(
    () => updateUser({ _id: row?.id, data: { status } }),
    ["users"],
    (data) => {
      console.log(data?.data);
    }
  );

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
            sendPatchUserInfo({ _id: row?.id, data: { status } });
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
