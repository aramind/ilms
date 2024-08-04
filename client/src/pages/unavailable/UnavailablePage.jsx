import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { Box, colors, Link, Stack } from "@mui/material";

const UnavailablePage = () => {
  return (
    <MainLayoutWrapper>
      <Stack alignItems="center" width={1} mt={5}>
        <WhiteTypography sx={{ textAlign: "center" }}>
          Sorry, 😞 feature not yet implemented. Dev run out of
          motivation.💸💸💸
        </WhiteTypography>
        <WhiteTypography>
          Help motivate by donating some funds. 🙏🏻🙏🏻🙏🏻
        </WhiteTypography>
        <Stack direction="row" spacing={1} mt={4}>
          <WhiteTypography>Click here to</WhiteTypography>
          <WhiteTypography>
            {" "}
            <Link
              href="https://www.linkedin.com/in/robin-mon-miranda/"
              target="_blank"
              rel="noreferrer"
              sx={{ color: (theme) => theme.palette.secondary.main }}
            >
              Donate
            </Link>
            &nbsp; &nbsp; &nbsp;😊
          </WhiteTypography>
        </Stack>
      </Stack>
    </MainLayoutWrapper>
  );
};

export default UnavailablePage;
