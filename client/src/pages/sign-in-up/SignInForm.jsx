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
import axios from "axios";
import constants from "../../configs/constants";
import { AuthContext } from "../../context/AuthProvider";
import { showAckNotification } from "../../utils/showAckNotification";
import { useGlobalState } from "../../context/GlobalStatesContextProvider";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setAuth, persist, setPersist } = useContext(AuthContext);
  const {
    globalState: { ackAlert },
    dispatch,
  } = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${constants?.API_URL?.ROOT}/signin`,
        data,
        {
          withCredentials: true,
        }
      );

      const responseData = response?.data;
      if (responseData?.success) {
        showAckNotification({
          dispatch,
          success: true,
          data: { success: true, message: responseData?.message },
          ackAlert,
        });

        setAuth(response?.data);
        // navigate(from, { replace: true });
        navigate("/dashboard");
      } else {
        showAckNotification({
          dispatch,
          success: false,
          data: { success: false, message: responseData?.message },
          ackAlert,
        });
      }
    } catch (error) {
      showAckNotification({
        dispatch,
        success: false,
        data: { success: false, message: error?.response?.data?.message },
        ackAlert,
      });
    } finally {
      setIsLoading(false);
    }
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
    </>
  );
};

export default SignInForm;
