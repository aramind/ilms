import React from "react";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";

const VideoEmbed = ({ videoId }) => {
  console.log(videoId);
  const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <Box
      sx={{
        width: "70vw",
        height: "40vw",
      }}
    >
      <iframe
        src={videoUrl}
        width="100%"
        height="100%"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Player"
      ></iframe>
    </Box>
  );
};

export default VideoEmbed;
