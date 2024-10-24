import React from "react";
import MainLayoutWrapper from "../../wrappers/MainLayoutWrapper";
import { Box, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import Sponsors from "../../components/Sponsors";
import constants from "../../configs/constants";

const Main = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const sponsors = constants.sponsors;
  return (
    <>
      <MainLayoutWrapper>
        <Stack
          sx={{ bgcolor: (theme) => theme.palette.white.main }}
          width="100%"
          p={2}
          height={isMobile ? "100%" : "auto"}
        >
          <Typography sx={{ ...localStyles.title, ...localStyles.label }}>
            SPONSORS
          </Typography>
          <Stack
            direction="row"
            gap={2}
            flexWrap="wrap"
            width={1}
            justifyContent="center"
          >
            {sponsors?.map((sponsor) => (
              //   <Typography key={sponsor}>{sponsor?.name}</Typography>
              <Stack
                key={sponsor?.name}
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Box
                  component="img"
                  src={`/assets/sponsor-logos/${sponsor?.logo}`}
                  alt={sponsor?.name}
                  borderRadius="50%"
                  sx={{
                    width: { xs: "3rem", md: "10rem" },
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography>{sponsor?.name}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </MainLayoutWrapper>
    </>
  );
};

export default Main;

const localStyles = {
  title: {
    marginBottom: 2,
    color: (theme) => theme.palette.primary.dark,
    fontWeight: "bold",
  },

  label: {
    textTransform: "uppercase",
  },
};
