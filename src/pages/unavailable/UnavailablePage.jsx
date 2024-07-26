import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { Box } from "@mui/material";

const UnavailablePage = () => {
  return (
    <MainLayoutWrapper>
      <Box width={1}>
        <WhiteTypography sx={{ fontSize: "1.5rem" }}>
          Sorry, this feature is not available yet.
        </WhiteTypography>
      </Box>
    </MainLayoutWrapper>
  );
};

export default UnavailablePage;
