import React from "react";
import { Box, Button, Stack } from "@mui/material";
import FormWrapper from "../../wrappers/FormWrapper";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import MetaInfoSection from "./add-course/MetaInfoSection";
import TopicsSection from "./add-course/TopicsSection";
import useConfirmActionDialog from "../../hooks/useConfirmActionDialog";
import WhiteTypography from "../../components/WhiteTypography";

const AddCourse = () => {
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
    console.log("clearing");
    reset();
  };
  const { handleOpen: handleConfirmClear, renderConfirmActionDialog } =
    useConfirmActionDialog(
      "Confirm Reset",
      <WhiteTypography>
        Are you sure you want to reset all fields?
      </WhiteTypography>,
      handleClear
    );

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <FormWrapper formMethods={formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack gap={2} px={1}>
            <MetaInfoSection />
            <TopicsSection control={control} />
          </Stack>
          <Box height="32px"></Box>
          <Stack direction="row" justifyContent="flex-end" px={1} spacing={1}>
            <Button variant="outlined" onClick={handleConfirmClear}>
              Clear
            </Button>
            <Button variant="contained" type="submit" sx={{ px: 5 }}>
              Submit
            </Button>
          </Stack>
        </form>
        {/* <DevTool control={control} /> */}
      </FormWrapper>
      {renderConfirmActionDialog()}
    </>
  );
};

export default AddCourse;
