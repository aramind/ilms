import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import SignUpContent from "./SignUpContent";

const images = [
  "boy_studying_2.jpeg",
  "boy_studying_3.jpeg",
  "boy_studying_4.jpeg",
  "boy_studying_5.jpeg",
  "boy_studying_6.jpeg",
  "boy_studying_7.jpeg",
  "girl_studying_1.jpeg",
  "girl_studying_2.jpeg",
  "girl_studying_3.jpeg",
  "girl_studying_4.jpeg",
  "girl_studying_5.jpeg",
  "girl_studying_6.jpeg",
];

const SignUp = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const changeImage = () => {
      setFadeClass("fade-out"); // Start fade-out transition
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentImage(images[randomIndex]);

        // Add the fade-in class after the image has been updated
        setFadeClass("fade-in");
      }, 1000); // Match the duration of the fade-out transition
    };

    const intervalId = setInterval(changeImage, 5000); // Change every 1 minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <Stack direction="row" sx={{ minHeight: "100vh", width: "100%" }}>
      <Stack flex="2" sx={{ bgcolor: theme.palette.primary.lightest }}>
        <Box
          component="img"
          src={`/assets/sign-in-up-images/${currentImage}`}
          alt="hero-image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: fadeClass === "fade-in" ? 1 : 0,
            transition: `opacity 2s ease-in-out`,
          }}
        />
      </Stack>
      <Stack flex="1" sx={{ bgcolor: theme.palette.white.light }}>
        <SignUpContent />
      </Stack>
    </Stack>
  );
};

export default SignUp;
