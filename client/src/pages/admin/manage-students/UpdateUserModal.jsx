import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import Draggable from "react-draggable";
import FormWrapper from "../../../wrappers/FormWrapper";
import { useForm } from "react-hook-form";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import DialogActionButton from "../../../components/DialogActionButton";
import useUserReq from "../../../hooks/api/authenticated/useUserReq";
import useApiGet from "../../../hooks/api/useApiGet";
import LoadingPage from "../../LoadingPage";
import ErrorPage from "../../ErrorPage";
import UserInfo from "./UserInfo";

const PaperComponent = forwardRef((props, ref) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      nodeRef={ref}
    >
      <Paper
        ref={ref}
        {...props}
        sx={{ bgcolor: (theme) => theme.palette.white.main, width: "100%" }}
      />
    </Draggable>
  );
});

const UpdateUserModal = ({
  open,
  setOpen,
  title = "",
  userId,
  sendPatchUserReq,
}) => {
  const [user, setUser] = useState({});
  const { getUsers } = useUserReq({ isPublic: false, showAck: true });

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useApiGet(["user"], () => getUsers({ params: `?_id=${userId}` }), {
    refetchOnWindowFocus: true,
    retry: 3,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    mode: "onTouched",
    defaultValues: user,
  });

  const formMethods = { handleSubmit, control, errors };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleReset = () => {
    reset(user);
  };

  const onSubmit = (data) => {
    const { _id, ...updateData } = data;
    sendPatchUserReq({ _id, data: updateData });
  };

  useEffect(() => {
    if (userData?.data?.[0]) {
      const user = userData?.data?.[0];
      setUser((pv) => user);
      reset(user);
    }
  }, [reset, userData?.data]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    <ErrorPage message={`${error?.message}`} />;
  }

  return (
    <>
      <FormWrapper formMethods={formMethods}>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          maxWidth="lg"
          fullWidth
          minHeight
          fullScreen
        >
          <DialogTitle>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {title}
              <IconButton onClick={handleClose}>
                <CloseTwoToneIcon />
              </IconButton>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <form>
              <Stack spacing={1}>
                <Typography>FORM HERE</Typography>
                <UserInfo enrolledCourses={user?.enrolledCourses} />
              </Stack>
            </form>
          </DialogContent>
          <DialogActions>
            <DialogActionButton
              label="reset"
              onClickHandler={handleReset}
              disabled={!isDirty}
            />
            <DialogActionButton
              label="save"
              onClickHandler={() => handleSubmit(onSubmit)()}
              disabled={!userId || !isDirty || Object.keys(errors).length !== 0}
            />
          </DialogActions>
          {/* <DevTool control={control} /> */}
        </Dialog>
      </FormWrapper>
    </>
  );
};

export default UpdateUserModal;
