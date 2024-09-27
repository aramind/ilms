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

const LabelValue = ({ label, value }) => (
  <Stack direction="row" spacing={2}>
    <Box width="50px">
      <Typography sx={{ ...localStyles.label }}>{label}</Typography>
    </Box>
    <Typography>:</Typography>
    <Typography>{value}</Typography>
  </Stack>
);

const Profile = () => {
  const { auth } = useAuth();

  // console.log(auth);

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
  // console.log(auth);

  console.log(auth);
  const { firstName, lastName, enrolledCourses, ...readOnlyUserInfos } =
    auth?.userInfo;

  return (
    <>
      <MainLayoutWrapper>
        <Stack
          sx={{ bgcolor: (theme) => theme.palette.white.main }}
          width="100%"
          p={2}
        >
          <Typography sx={{ ...localStyles.title, ...localStyles.label }}>
            my profile
          </Typography>
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
          <Stack spacing={1} my={2}>
            {Object.entries(readOnlyUserInfos)?.map(([key, value]) => {
              return <LabelValue key={key} label={key} value={value} />;
            })}
          </Stack>

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
    marginBottom: 2,
    color: (theme) => theme.palette.primary.dark,
    fontWeight: "bold",
  },

  label: {
    textTransform: "uppercase",
  },
};
