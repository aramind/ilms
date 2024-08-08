import React from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { Stack } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { getCurrentDate, getCurrentDay } from "../../utils/formatDate";

const Admin = () => {
  return (
    <MainLayoutWrapper>
      <Stack alignItems={{ xs: "center", md: "flex-start" }}>
        <PageHeader
          title="Admin"
          subtitle={`Hi User! Happy ${getCurrentDay} of ${getCurrentDate}`}
        />
      </Stack>
    </MainLayoutWrapper>
  );
};

export default Admin;
