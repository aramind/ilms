import React, { useEffect, useState } from "react";
import constants from "../../configs/constants";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useLocation } from "react-router-dom";
import SignInUpContent from "./SignInUpContent";

const images = constants?.signUpInImages;

const SignUpInMain = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const { pathname } = useLocation();

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
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ minHeight: "100vh", width: "100%" }}
    >
      <Stack
        flex={{ md: "2.5" }}
        sx={{ bgcolor: theme.palette.primary.lightest }}
      >
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
      <Stack
        flex={{ xs: 1, md: "1.5" }}
        sx={{ bgcolor: theme.palette.white.light }}
        className="centered-content"
      >
        {/* <SignUpContent /> */}
        <SignInUpContent isSignUp={pathname.substring(1) === "signup"} />
      </Stack>
    </Stack>
  );
};

export default SignUpInMain;
