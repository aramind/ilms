import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SignUpForm from "./SignUpForm";
import RMSolutions from "../../components/RMSolutions";
import SignInForm from "./SignInForm";
import { NavLink } from "react-router-dom";

const SignInUpContent = ({ isSignUp }) => {
  return (
    <Stack
      width="100%"
      px={{ xs: 2, md: 6 }}
      pt={{ xs: 2, md: 4 }}
      pb={{ xs: 1, md: 2 }}
      // height="100%"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Stack
        width="100%"
        direction="row"
        spacing={1}
        justifyContent={{ xs: "center", md: "flex-end" }}
      >
        <>
          <Typography>{isSignUp ? "Do" : "Don't"} have an account?</Typography>
          <NavLink to={isSignUp ? "/signin" : "/signup"} className="link">
            <Typography>{isSignUp ? "Sign In" : "Register"}</Typography>
          </NavLink>
        </>
      </Stack>
      <Typography
        mt={{ xs: 2, md: 8 }}
        className="uppercase"
        sx={{ fontFamily: "Poppins" }}
      >
        {isSignUp ? "register now" : "start your journey"}
      </Typography>
      <Typography
        mb={4}
        variant="h4"
        sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
      >
        {isSignUp ? "Welcome To IntegLMS" : "Hi, Welcome Back!"}
      </Typography>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
      {/* <SignUpForm /> */}
      <Box sx={{ flexGrow: 1 }}></Box>

      <RMSolutions />
    </Stack>
  );
};

export default SignInUpContent;
