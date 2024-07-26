import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import SignUpForm from "./SignUpForm";
import RMSolutions from "../../components/RMSolutions";

const SignInUpContent = () => {
  return (
    <Stack
      px={6}
      pt={4}
      pb={2}
      height="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Stack width="100%" direction="row" spacing={1} justifyContent="flex-end">
        <>
          <Typography>Do have an account?</Typography>
          <Link>Sign in</Link>
        </>
      </Stack>
      <Typography
        mt={8}
        className="uppercase"
        variant="body"
        sx={{ fontFamily: "Poppins" }}
      >
        register now
      </Typography>
      <Typography
        mb={4}
        variant="h4"
        sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        Welcome To IntegLMS
      </Typography>
      <SignUpForm />
      <Box flex={1}></Box>
      <RMSolutions />
    </Stack>
  );
};

export default SignInUpContent;
