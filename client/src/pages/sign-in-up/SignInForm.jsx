import React, { useContext, useState } from "react";
import FormWrapper from "../../wrappers/FormWrapper";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ControlledTextField from "../../components/controlled/ControlledTextField";
import { Controller, useForm } from "react-hook-form";
import signInSchema from "../../schemas/singIn";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldError from "../../components/TextFieldError";
import { useNavigate } from "react-router-dom";
import useRootReq from "../../hooks/api/public/useRootReq";
import useApiSend from "../../hooks/api/useApiSend";
import LoadingPage from "../LoadingPage";

const SignInForm = () => {
  const { signin } = useRootReq({ isPublic: true, showAck: true });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const { mutate: sendSignin } = useApiSend(signin, ["user"], (data) => {
    data?.success && navigate("/dashboard");
  });

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(signInSchema),
  });

  const formMethods = {
    control,
    handleSubmit,
    errors,
  };

  const onSubmit = (data) => {
    sendSignin({ data });
  };

  return (
    <>
      <FormWrapper formMethods={formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack>
            <Stack>
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
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              //   disabled={!isDirty || !isValid || !agree}
              sx={{ marginTop: "2rem", padding: "0.7rem" }}
            >
              Sign In
            </Button>
          </Stack>
        </form>
      </FormWrapper>
      {/* <DevTool control={control} /> */}
      <LoadingPage open={true} text="Logging in..." />
    </>
  );
};

export default SignInForm;
