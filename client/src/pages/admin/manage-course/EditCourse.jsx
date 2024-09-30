import React, { useEffect } from "react";
import FormWrapper from "../../../wrappers/FormWrapper";
import { Box, Button, Stack } from "@mui/material";
import MetaInfoSection from "../add-course/MetaInfoSection";
import TopicsSection from "../add-course/TopicsSection";
import { useForm } from "react-hook-form";
import useConfirmActionDialog from "../../../hooks/useConfirmActionDialog";
import WhiteTypography from "../../../components/WhiteTypography";
import useApiSend from "../../../hooks/api/useApiSend";
import useCourseReq from "../../../hooks/api/authenticated/useCourseReq";
import LoadingPage from "../../LoadingPage";

const EditCourse = ({ selectedCourse }) => {
  const { updateCourse } = useCourseReq({ isPublic: false, showAck: true });

  console.log(selectedCourse);
  const { mutate: sendUpdateCourseReq, isLoading } = useApiSend(
    updateCourse,
    ["courses"],
    (data) => {
      console.log(data?.data);
    }
  );
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: selectedCourse,
  });

  const formMethods = {
    control,
    handleSubmit,
    errors,
  };

  useEffect(() => {
    reset(selectedCourse);
  }, [reset, selectedCourse]);

  const handleClear = () => {
    reset();
  };

  const onSubmit = async (data) => {
    console.log("SENDING UPDATE REQUEST", data);
    const { _id, ...updatedData } = data;
    sendUpdateCourseReq({ courseId: data?._id, data: updatedData });
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
        Are you sure you want to undo all changes?
      </WhiteTypography>,
      handleClear
    );
  };

  const handleConfirmSubmit = () => {
    handleConfirm(
      "Confirm Submit",
      <WhiteTypography>Save changes?</WhiteTypography>,
      handleFormSubmit
    );
  };

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
              Undo Changes
            </Button>

            <Button
              variant="contained"
              onClick={handleConfirmSubmit}
              sx={{ px: 5 }}
            >
              Save
            </Button>
          </Stack>
        </form>
      </FormWrapper>
      <LoadingPage open={isLoading} text="Loading..." />
      {renderConfirmActionDialog()}
    </>
  );
};

export default EditCourse;
