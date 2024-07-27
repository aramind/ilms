import { Stack } from "@mui/material";
import React from "react";
import WhiteTypography from "../components/WhiteTypography";

const CardGroupWithTitle = ({ title, children }) => {
  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }}>
      <WhiteTypography variant="h6" sx={{ mb: { xs: 1, md: 0.5 } }}>
        {title}
      </WhiteTypography>
      {children}
    </Stack>
  );
};

export default CardGroupWithTitle;
