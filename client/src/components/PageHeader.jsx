import { Stack } from "@mui/material";
import React from "react";
import WhiteTypography from "./WhiteTypography";

const PageHeader = ({ title, subtitle }) => {
  return (
    <Stack
      //   spacing={2}
      alignItems={{ xs: "center", md: "flex-start" }}
      width={1}
      mb={2}
    >
      <WhiteTypography fontSize={{ xs: "1.3rem", md: "1.5rem" }}>
        {title}
      </WhiteTypography>

      <WhiteTypography>{subtitle}</WhiteTypography>
    </Stack>
  );
};

export default PageHeader;
