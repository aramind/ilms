import React, { useEffect, useState } from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import useAuth from "../../hooks/useAuth";
import useApiGet from "../../hooks/api/useApiGet";
import useUserReq from "../../hooks/api/authenticated/useUserReq";
import { useForm } from "react-hook-form";
import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";
import FormWrapper from "../../wrappers/FormWrapper";
import { Box, DialogActions, Stack, Typography } from "@mui/material";
import ControlledLabelledTextField from "../../components/controlled/ContLabelledTextField";
import WhiteTypography from "../../components/WhiteTypography";
import DialogActionButton from "../../components/DialogActionButton";

const Profile = () => {
  const { auth } = useAuth();

  console.log(auth);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    mode: "onTouched",
    defaultValues: auth,
  });

  const formMethods = { handleSubmit, control, errors };

  const handleReset = () => {
    reset(auth);
  };
  console.log(auth);
  return (
    <>
      <MainLayoutWrapper>
        <Stack
          sx={{ bgcolor: (theme) => theme.palette.white.main }}
          width="100%"
          p={2}
        >
          <Typography sx={localStyles.title}>my profile</Typography>
          <FormWrapper formMethods={formMethods}>
            <form>
              <Stack direction="row" spacing={2}>
                <ControlledLabelledTextField
                  label="first name"
                  name="firstName"
                />
                <ControlledLabelledTextField
                  label="last name"
                  name="lastName"
                />
              </Stack>
            </form>
          </FormWrapper>
          <br />
          <DialogActions>
            <DialogActionButton
              label="reset"
              disabled={!isDirty}
              onClickHandler={handleReset}
            />
            <DialogActionButton
              label="update"
              disabled={
                !auth?._id || !isDirty || Object.keys(errors).length !== 0
              }
            />
          </DialogActions>
        </Stack>
      </MainLayoutWrapper>
    </>
  );
};

export default Profile;

const localStyles = {
  title: {
    color: (theme) => theme.palette.primary.dark,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 2,
  },
};
