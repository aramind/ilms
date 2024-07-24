import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import SignUpForm from "./SignUpForm";

const SignUpContent = () => {
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
        <Typography>Do have an account?</Typography>
        <Link>Sign in</Link>
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
        Welcome To iLMS
      </Typography>
      {/* <form>
        <Stack>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Stack>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              // sx={{
              //   outline: "1px solid ",
              //   outlineColor: (theme) => theme.palette.black.lightest,
              //   borderRadius: "3px",
              //   py: 1,
              // }}
              control={
                <Checkbox
                  sx={{
                    "& .MuiCheckbox-root": { padding: 0 },
                  }}
                />
              }
              label={
                <Typography variant="subtitle2" sx={{ ml: "8px" }}>
                  I agree to the processing of personal data provided
                </Typography>
              }
            />
          </Stack>
          <Button
            fullWidth
            variant="contained"
            sx={{ marginTop: "2rem", padding: "0.7rem" }}
          >
            Sign Up
          </Button>
        </Stack>
      </form> */}
      <SignUpForm />
      <Box flex={1}></Box>
      <Stack justifyContent="center" width={1}>
        <Typography
          textAlign="center"
          variant="caption"
          sx={{ fontStyle: "italic", letterSpacing: "1px" }}
        >
          Powered by{" "}
          <Link
            href="https://www.linkedin.com/in/robin-mon-miranda/"
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none", fontWeight: "bold" }}
          >
            RMSolutions&trade;
          </Link>
          &nbsp;&copy;{new Date().getFullYear()}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignUpContent;
