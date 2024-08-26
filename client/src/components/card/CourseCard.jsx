import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import WhiteTypography from "../WhiteTypography";
import useIsLandsCape from "../../hooks/useIsLandsCape";
import { useNavigate } from "react-router-dom";
import useUserReq from "../../hooks/api/authenticated/useUserReq";
import useApiSend from "../../hooks/api/useApiSend";
import useAuth from "../../hooks/useAuth";

const CourseCard = ({
  title,
  description,
  progress,
  isEnrolled,
  courseId,
  status,
  price,
}) => {
  const isLandscape = useIsLandsCape();
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleClick = () => {
    if (isEnrolled) {
      navigate(`/courses/${courseId}`, { replace: true });
    } else {
      alert("enrolling");
    }
  };

  const { enrollCourse } = useUserReq({ isPublic: false, showAck: true });

  const {
    mutate: sendEnrollCourse,
    // isLoading,
    // isError,
  } = useApiSend(enrollCourse, ["courses", "enrolledCourses"]);

  const handleEnroll = () => {
    // console.log("ENROLLING course:", courseId);
    let isConfirm = window.confirm(`Proceed enrolling ${title}?`);
    if (isConfirm) {
      sendEnrollCourse({ userId: auth?._id, courseId: courseId });
    } else {
      return;
    }
  };

  // console.log(courseId);
  return (
    <ButtonBase
      onClick={isEnrolled ? handleClick : null}
      disableRipple={!isEnrolled}
      sx={{
        textAlign: "start",
        cursor: isEnrolled ? "pointer" : "default",
      }}
    >
      <Stack
        //   onClick={() => alert("Clicked")}
        width={isLandscape ? { xs: "28vw", md: 220 } : { xs: "42vw", md: 220 }}
        height={isLandscape ? { xs: "30vw", md: 250 } : { xs: "42vw", md: 250 }}
        sx={localStyles.mainStack}
      >
        <WhiteTypography variant="h6" color="primary">
          {title}
        </WhiteTypography>

        <Divider
          sx={{
            ...localStyles.divider,
            display: isLandscape ? "flex" : { xs: "none", md: "flex" },
          }}
        />
        <Box
          flex={1}
          sx={{ overflowY: "auto" }}
          display={isLandscape ? "flex" : { xs: "none", md: "flex" }}
        >
          <WhiteTypography variant="subtitle2">{description}</WhiteTypography>
        </Box>
        {status === "enrolled" ? (
          <>
            {/* <Box width={1} mt={2}>
              <ProgressIndicator value={progress} />
            </Box> */}
            <Stack sx={localStyles.stack2}>
              <WhiteTypography variant="subtitle2">Progress</WhiteTypography>
              {/* <WhiteTypography sx={localStyles.typo1}>
                {progress}%
              </WhiteTypography> */}
            </Stack>
          </>
        ) : (
          <Stack mt={0.2} pb={1} justifyContent="flex-end" width={1} flex={1}>
            {status === "pending" ? (
              <Typography
                variant="caption"
                textTransform="uppercase"
                textAlign="center"
                color="secondary.light"
              >
                Pending Approval
              </Typography>
            ) : (
              <Button
                onClick={handleEnroll}
                variant="contained"
                fullWidth
                size="small"
                sx={localStyles.button}
              >
                ENROLL
              </Button>
            )}
            <Stack direction="row" sx={localStyles.footer}>
              <Typography color="primary" fontWeight="bold">
                {price || "N/A"}{" "}
              </Typography>
              <ButtonBase
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Additional Info");
                }}
                variant="text"
                disableRipple
                sx={localStyles.buttonBase}
              >
                More Info...
              </ButtonBase>
            </Stack>
          </Stack>
        )}
      </Stack>
    </ButtonBase>
  );
};

export default CourseCard;

const localStyles = {
  mainStack: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    px: 2,
    py: 1,
    borderRadius: "1rem",
    bgcolor: (theme) => theme.palette.black.dark,
    "&:hover": {
      //   backgroundColor: "#ffffff", // Optional: change background color on hover
      outline: "2px solid",
      outlineColor: (theme) => theme.palette.primary.darkest,
    },
  },
  divider: {
    backgroundColor: (theme) => theme.palette.primary.main,
    width: "100%",
    my: 1,
  },
  stack2: {
    mt: 0.2,
    direction: "row",
    justifyContent: "space-between",
    alignContent: "flex-end",
    width: 1,
  },
  footer: {
    justifyContent: "space-between",
    p: "2px",
  },
  typo1: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    mb: 2,
    color: (theme) => theme.palette.primary.main,
  },
  button: {
    height: "1.8rem",
    paddingY: 0, // Smaller padding in the y-direction
    paddingX: 3, // Larger padding in the x-direction
    minWidth: 80, // Minimum width of the button
  },
  buttonBase: {
    fontSize: "0.7rem",
    padding: 0,
    color: (theme) => theme.palette.white.dark,
    textTransform: "none",
    "&:hover": {
      color: "primary.light",
    },
  },
};
