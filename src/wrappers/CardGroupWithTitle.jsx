import { Stack } from "@mui/material";
import React from "react";
import WhiteTypography from "../components/WhiteTypography";

const CardGroupWithTitle = ({ title, children }) => {
  return (
    <Stack alignItems={{ xs: "center", md: "flex-start" }} width="100%" mb={4}>
      <WhiteTypography variant="h6" sx={{ mb: 1 }}>
        {title}
      </WhiteTypography>

      {children}
    </Stack>
  );
};

export default CardGroupWithTitle;
