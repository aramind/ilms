import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";

const CourseCard = ({ title, description, progress }) => {
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      px={2}
      py={1}
      width={200}
      height={250}
      borderRadius="1rem"
      bgcolor={(theme) => theme.palette.white.light}
      //   onClick={() => alert("Clicked")}
      sx={{
        cursor: "pointer", // Set cursor to pointer
        "&:hover": {
          //   backgroundColor: "#ffffff", // Optional: change background color on hover
          outline: "4px solid",
          outlineColor: (theme) => theme.palette.white.light,
        },
      }}
    >
      <Typography fontSize="1.2rem" fontWeight="bold" color="primary">
        {title}
      </Typography>

      <Divider
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          width: "100%",
          my: 1,
        }}
      />
      <Box flex={1} sx={{ overflowY: "auto" }}>
        <Typography fontSize="0.8rem">{description}</Typography>
      </Box>

      <Box width={1} mt={2}>
        <ProgressIndicator value={progress} />
      </Box>
      <Stack
        mt={0.2}
        direction="row"
        justifyContent="space-between"
        alignContent="flex-end"
        width={1}
      >
        <Typography fontSize="0.7rem">Course Completed</Typography>
        <Typography
          fontSize="0.8rem"
          fontWeight="bold"
          mb={2}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          {progress}%
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CourseCard;
