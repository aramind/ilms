import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import WhiteTypography from "../WhiteTypography";
import useIsLandsCape from "../../hooks/useIsLandsCape";

const CourseCard = ({
  title,
  description,
  progress,
  isPurchased = "true",
  price,
}) => {
  const isLandscape = useIsLandsCape();

  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      px={2}
      py={1}
      width={isLandscape ? { xs: "28vw", md: 220 } : { xs: "42vw", md: 220 }}
      height={isLandscape ? { xs: "30vw", md: 250 } : { xs: "42vw", md: 250 }}
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
      <WhiteTypography variant="h6" color="primary">
        {title}
      </WhiteTypography>

      <Divider
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          width: "100%",
          my: 1,
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
            <WhiteTypography variant="subtitle2">Progress</WhiteTypography>
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
          pb={1}
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          width={1}
          flex={1}
        >
          <Button
            variant="contained"
            fullWidth
            size="small"
            sx={{
              height: "1.8rem",
              paddingY: 0, // Smaller padding in the y-direction
              paddingX: 3, // Larger padding in the x-direction
              minWidth: 80, // Minimum width of the button
            }}
          >
            INFO
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default CourseCard;
