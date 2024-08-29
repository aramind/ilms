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

const dv = {
  _id: "66c35fc2a891f20da02c2c30",

  code: "e0001",

  acronym: "FCS",

  title: "Feedback and Control Systems",

  category: "Engineering",

  access: 1,

  description: "Description for FCS Course",

  topics: [
    {
      title: "Introduction",

      description: "Discussion of Course Outline and Introduction to FCS",

      topicTasks: [
        {
          action: "read",

          instruction: "Read Course Outline",

          link: "link for course outline",
        },

        {
          action: "read",

          instruction: "Read Chapter 1 of Book",

          link: "link for Ch1 of book",
        },

        {
          action: "answer",

          instruction: "Answer Assignment 1",

          link: "link for assignment 1",
        },
      ],
    },

    {
      title: "Mathematical Models",

      description: "Description for Mathematical models",

      topicTasks: [
        {
          action: "read",

          instruction: "Read Chapter 2 of book",

          link: "link for chapter 2 of book",
        },

        {
          action: "read",

          instruction: "Read chapter 3 of book",

          link: "link for chapter 3 of book",
        },

        {
          action: "watch",

          instruction: "Watch video 1",

          link: "link for video 1",
        },

        {
          action: "watch",

          instruction: "watch video 2",

          link: "link for video 2",
        },

        {
          action: "answer",

          instruction: "answer pq1",

          link: "link for pq1",
        },
      ],
    },

    {
      title: "Block Diagrams",

      description: "Description for block diagrams",

      topicTasks: [
        {
          action: "read",

          instruction: "Read chapter 5",

          link: "link for ch5",
        },

        {
          action: "read",

          instruction: "read chapter 6",

          link: "link for chapter 6",
        },

        {
          action: "watch",

          instruction: "watch video 6",

          link: "link for video 6",
        },

        {
          action: "answer",

          instruction: "answer pq2",

          link: "link for pq2",
        },
      ],
    },
  ],
};

const AddCourse2 = () => {
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
    defaultValues: dv,
    // defaultValues: {
    //   code: "",
    //   acronym: "",
    //   title: "",
    //   category: "",
    //   description: "",
    //   topics: [
    //     {
    //       title: "",

    //       description: "",

    //       tasks: [{ action: "read", instruction: "", link: "" }],
    //     },
    //   ],
    // },
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

export default AddCourse2;
