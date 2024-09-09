import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useConfirmActionDialog from "../../../hooks/useConfirmActionDialog";
import WhiteTypography from "../../../components/WhiteTypography";
import FormWrapper from "../../../wrappers/FormWrapper";
import { Box, Button, Stack } from "@mui/material";
import MetaInfoSection from "../add-course/MetaInfoSection";
import TopicsSection from "../add-course/TopicsSection";
import { DevTool } from "@hookform/devtools";
import LoadingPage from "../../LoadingPage";

const CourseForm = ({ sendFormCallback, isLoading, defaultValues }) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: defaultValues,
  });

  const formMethods = {
    control,
    handleSubmit,
    errors,
  };

  const handleClear = () => {
    reset();
  };

  const onSubmit = async (data) => {
    console.log(data);
    sendFormCallback({ data });
  };

  const handleFormSubmit = () => {
    handleSubmit(onSubmit)();
  };

  const { handleOpen: handleConfirm, renderConfirmActionDialog } =
    useConfirmActionDialog();

  const handleConfirmClear = () => {
    handleConfirm(
      "Confirm Reset",
      <WhiteTypography>
        Are you sure you want to reset all fields?
      </WhiteTypography>,
      handleClear
    );
  };

  const handleConfirmSubmit = () => {
    handleConfirm(
      "Confirm Submit",
      <WhiteTypography>
        Are you sure you want to submit the form?
      </WhiteTypography>,
      handleFormSubmit
    );
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <>
      <FormWrapper formMethods={formMethods}>
        <form noValidate>
          <Stack gap={2} px={1}>
            <MetaInfoSection />
            <TopicsSection control={control} />
          </Stack>
          <Box height="32px"></Box>
          <Stack direction="row" justifyContent="flex-end" px={1} spacing={1}>
            <Button variant="outlined" onClick={handleConfirmClear}>
              Clear
            </Button>
            <Button
              variant="contained"
              onClick={handleConfirmSubmit}
              sx={{ px: 5 }}
            >
              Submit
            </Button>
          </Stack>
        </form>
        <DevTool control={control} />
      </FormWrapper>
      <LoadingPage open={isLoading} text="Loading..." />
      {renderConfirmActionDialog()}
    </>
  );
};

export default CourseForm;
