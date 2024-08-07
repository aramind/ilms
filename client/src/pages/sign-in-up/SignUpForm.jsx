import React, { useState } from "react";
import FormWrapper from "../../wrappers/FormWrapper";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import signUpSchema from "../../schemas/signUp";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ControlledTextField from "../../components/controlled/ControlledTextField";
import TextFieldError from "../../components/TextFieldError";
import useApiSend from "../../hooks/api/useApiSend";

import { showAckNotification } from "../../utils/showAckNotification";
import { useGlobalState } from "../../context/GlobalStatesContextProvider";
import useRootReq from "../../hooks/api/public/useRootReq";
import LoadingPage from "../LoadingPage";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { signup } = useRootReq({ isPublic: true, showAck: true });

  const { mutate: sendSignUp, isLoading } = useApiSend(signup, [], (data) => {
    data?.success && navigate("/signin");
  });

  const {
    globalState: { ackAlert },
    dispatch,
  } = useGlobalState();
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(signUpSchema),
  });

  const formMethods = {
    control,
    handleSubmit,
    errors,
  };

  const onSubmit = async (data) => {
    // sendSignUp(data);
    try {
      sendSignUp({ data });
    } catch (error) {
      showAckNotification({
        dispatch,
        success: false,
        data: {
          success: false,
          message: error?.response?.data?.message || error,
        },
        ackAlert,
      });
    }
  };

  return (
    <>
      <FormWrapper formMethods={formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack>
            <Stack>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 0, md: 1.5 }}
                flex="space-between"
                width={1}
              >
                <ControlledTextField name="firstName" label="First Name" />
                <ControlledTextField name="lastName" label="Last Name" />
              </Stack>
              <ControlledTextField name="email" label="Email" />
              <Controller
                name="password"
                render={({ field }) => (
                  <Stack>
                    <TextField
                      {...field}
                      value={field.value}
                      id="password"
                      label="Password"
                      variant="outlined"
                      size="small"
                      fullWidth
                      error={!!errors?.password}
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleClickShowPassword}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextFieldError errMsg={errors?.password?.message || ""} />
                  </Stack>
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agree}
                    onChange={(e) => setAgree(e.target?.checked)}
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
              type="submit"
              fullWidth
              variant="contained"
              //   disabled={!isDirty || !isValid || !agree}
              sx={{ marginTop: "2rem", padding: "0.7rem" }}
            >
              Sign Up
            </Button>
          </Stack>
        </form>
      </FormWrapper>
      <LoadingPage open={isLoading} text="Submitting your info..." />
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default SignUpForm;
