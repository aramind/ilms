import { Box, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import constants from "../../configs/constants";

const Sponsors = () => {
  const sponsors = constants.sponsors;
  return (
    <Stack mt={1.5} spacing={1}>
      <Typography
        variant="caption"
        sx={{ fontStyle: "italic", letterSpacing: "1px" }}
      >
        Sponsored by:
      </Typography>
      <Stack
        direction="row"
        spacing={1.2}
        flexWrap="wrap"
        width={1}
        justifyContent="center"
      >
        {sponsors?.map((sponsor) => (
          //   <Typography key={sponsor}>{sponsor?.name}</Typography>
          <Tooltip
            key={sponsor?.name}
            title={sponsor?.name}
            placement="top-end"
          >
            <Box
              component="img"
              src={`/assets/sponsor-logos/${sponsor?.logo}`}
              alt={sponsor?.name}
              borderRadius="50%"
              sx={{
                width: "1.8rem",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sponsors;
