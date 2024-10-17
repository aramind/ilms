import { Stack } from "@mui/material";
import React, { useState } from "react";
import ReusableSelect from "../../../components/ReusableSelect";

const RenderEnrollmentStatus = ({ row, handleUpdateEnrollmentStatus }) => {
  const [enrollmentStatus, setEnrollmentStatus] = useState(
    row?.enrollmentStatus
  );

  const handleChange = (e) => {
    setEnrollmentStatus(e.target.value);
    alert("changing status");
    const { _id, enrollmentStatus } = row;
    handleUpdateEnrollmentStatus({
      studentId: _id,
      newEnrollmentStatus: enrollmentStatus,
    });
  };
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
