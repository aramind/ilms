import React from "react";
import { Box, Button, Stack } from "@mui/material";
import FormWrapper from "../../wrappers/FormWrapper";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import MetaInfoSection from "./add-course/MetaInfoSection";
import TopicsSection from "./add-course/TopicsSection";
import useConfirmActionDialog from "../../hooks/useConfirmActionDialog";
import WhiteTypography from "../../components/WhiteTypography";
import useCourseReq from "../../hooks/api/authenticated/useCourseReq";
import useApiSend from "../../hooks/api/useApiSend";
import LoadingPage from "../LoadingPage";

const AddCourse = () => {
  const { addCourse } = useCourseReq({ isPublic: false, showAck: true });

  const { mutate: sendAddCourseReq, isLoading } = useApiSend(
    addCourse,
    ["courses"],
    (data) => {
      console.log(data?.data);
    }
  );
  // form
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      code: "123",
      acronym: "FCS",
      title: "Feedback and Control Systems",
      category: "Engineering",
      description: "FCS Description",
      topics: [
        {
          title: "",

          description: "",

          tasks: [{ action: "read", instruction: "", link: "" }],
        },
      ],
    },
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
    sendAddCourseReq({ data });
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
        {/* <DevTool control={control} /> */}
      </FormWrapper>
      <LoadingPage open={isLoading} text="Loading..." />
      {renderConfirmActionDialog()}
    </>
  );
};

export default AddCourse;
