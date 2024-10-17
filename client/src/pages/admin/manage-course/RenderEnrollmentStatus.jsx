import { Stack } from "@mui/material";
import React, { useCallback, useState } from "react";
import ReusableSelect from "../../../components/ReusableSelect";

const RenderEnrollmentStatus = ({ row, handleUpdateEnrollmentStatus }) => {
  const [enrollmentStatus, setEnrollmentStatus] = useState(
    row?.enrollmentStatus
  );

  const handleChange = useCallback(
    (e) => {
      const newStatus = e.target.value;
      setEnrollmentStatus(e.target.value);
      alert("changing status");

      handleUpdateEnrollmentStatus({
        userId: row?._id,
        field: "status",
        data: { data: newStatus },
      });
    },
    [handleUpdateEnrollmentStatus, row?._id]
  );

  return (
    <Stack direction="row">
      <ReusableSelect
        labelId="enrollmentStatus-selector"
        id="enrollmentStatus-selector"
        value={enrollmentStatus}
        onChange={handleChange}
        options={[
          { label: "pending", value: "pending" },
          { label: "enrolled", value: "enrolled" },
          { label: "deleted", value: "deleted" },
          { label: "archived", value: "archived" },
          { label: "suspended", value: "suspended" },
        ]}
      />
    </Stack>
  );
};

export default RenderEnrollmentStatus;
