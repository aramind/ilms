import React, { useEffect } from "react";
import useCourseReq from "../../../hooks/api/authenticated/useCourseReq";
import useApiSend from "../../../hooks/api/useApiSend";
import { useForm } from "react-hook-form";
import WhiteTypography from "../../../components/WhiteTypography";
import useConfirmActionDialog from "../../../hooks/useConfirmActionDialog";
import FormWrapper from "../../../wrappers/FormWrapper";
import { Box, Button, Stack } from "@mui/material";
import MetaInfoSection from "./MetaInfoSection";
import TopicsSection from "./TopicsSection";
import { DevTool } from "@hookform/devtools";
import LoadingPage from "../../LoadingPage";

const defaultValues = {
  code: "",
  acronym: "",
  title: "",
  category: "",
  description: "",
  topics: [
    {
      title: "",

      description: "",
    },
  ],
};

const AddCourse = () => {
  const { addCourse } = useCourseReq({ isPublic: false, showAck: true });

  const { mutate: sendAddCourseReq, isLoading } = useApiSend(
    addCourse,
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

  useEffect(() => {
    reset(defaultValues);
  }, [reset]);

  const onSubmit = async (data) => {
    console.log(data);
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
        <DevTool control={control} />
      </FormWrapper>
      <LoadingPage open={isLoading} text="Loading..." />
      {renderConfirmActionDialog()}
    </>
  );
};

export default AddCourse;
