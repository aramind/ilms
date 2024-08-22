import React from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { Box, Stack } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { getCurrentDate, getCurrentDay } from "../../utils/formatDate";
import OutsideTab from "./OutsideTab";
import useAuth from "../../hooks/useAuth";

const Admin = () => {
  const { auth } = useAuth();
  return (
    <MainLayoutWrapper>
      <Stack alignItems={{ xs: "center", md: "flex-start" }} width="100%">
        <PageHeader
          title="Admin"
          subtitle={`Hi ${auth?.firstName}! Happy ${getCurrentDay} of ${getCurrentDate}`}
        />
        <Box mt={1} bgcolor={(theme) => theme.palette.white.main} width={1}>
          <OutsideTab />
        </Box>
      </Stack>
    </MainLayoutWrapper>
  );
};

export default Admin;
