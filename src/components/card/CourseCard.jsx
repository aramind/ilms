import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import WhiteTypography from "../WhiteTypography";

const CourseCard = ({
  title,
  description,
  progress,
  isPurchased = "true",
  price,
}) => {
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      px={2}
      py={1}
      width={220}
      height={250}
      borderRadius="1rem"
      bgcolor={(theme) => theme.palette.black.dark}
      //   onClick={() => alert("Clicked")}
      sx={{
        cursor: "pointer", // Set cursor to pointer
        "&:hover": {
          //   backgroundColor: "#ffffff", // Optional: change background color on hover
          outline: "2px solid",
          outlineColor: (theme) => theme.palette.primary.darkest,
        },
      }}
    >
      <WhiteTypography fontSize="1.2rem" fontWeight="bold" color="primary">
        {title}
      </WhiteTypography>

      <Divider
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          width: "100%",
          my: 1,
        }}
      />
      <Box flex={1} sx={{ overflowY: "auto" }}>
        <WhiteTypography fontSize="0.8rem">{description}</WhiteTypography>
      </Box>
      {isPurchased ? (
        <>
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
            <WhiteTypography fontSize="0.7rem">
              Course Completed
            </WhiteTypography>
            <WhiteTypography
              fontSize="0.8rem"
              fontWeight="bold"
              mb={2}
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              {progress}%
            </WhiteTypography>
          </Stack>
        </>
      ) : (
        <Stack
          mt={0.2}
          direction="row"
          justifyContent="space-between"
          alignContent="flex-end"
          width={1}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              height: "1.8rem",
              paddingY: 0, // Smaller padding in the y-direction
              paddingX: 3, // Larger padding in the x-direction
              minWidth: 80, // Minimum width of the button
            }}
          >
            Buy
          </Button>
          <WhiteTypography
            fontSize="1rem"
            fontWeight="bold"
            mb={2}
            sx={{ color: (theme) => theme.palette.primary.main }}
          >
            P{price}.00
          </WhiteTypography>
        </Stack>
      )}
    </Stack>
  );
};

export default CourseCard;
