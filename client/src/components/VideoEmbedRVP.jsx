import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import useIsLandsCape from "../hooks/useIsLandsCape";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { red } from "@mui/material/colors";

const VideoEmbed = ({ videoId, setVideoId }) => {
  const { isLandscape } = useIsLandsCape();

  const mobileWidth = isLandscape ? "142vh" : "95vw";
  const mobileHeight = isLandscape ? "80vh" : "63vw";

  //   console.log(videoId);

  const videoUrl = `https://drive.google.com/file/d/${videoId}/view?usp=drive_link`;

  return (
    <Stack
      direction={{
        xs: isLandscape ? "row-reverse" : "column",
        md: "row-reverse",
      }}
      sx={{
        outlineColor: "transparent",
        borderColor: "transparent",
        width: { xs: mobileWidth, md: "60vw" },
        height: { xs: mobileHeight, md: "33vw" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        width="auto"
        mb={{ xs: isLandscape ? 0 : 1, md: 0 }}
        ml={{ xs: isLandscape ? 1 : 0, md: 1 }}
        className={isLandscape ? "" : "centered-content"}
      >
        <IconButton
          onClick={() => setVideoId(null)}
          size="small"
          color="secondary"
          sx={{
            "&:hover": {
              color: (theme) => theme.palette.white.main,
              bgcolor: red[300], // Change background color on hover
            },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Stack direction="column" spacing={1} width={1}>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          controls
          style={{
            border: "none", // Remove any borders
            outline: "none", // Remove any outlines
          }}
        />
        <a
          href={`https://drive.google.com/file/d/${videoId}/view?usp=sharing`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Video
        </a>
      </Stack>
    </Stack>
  );
};

export default VideoEmbed;
