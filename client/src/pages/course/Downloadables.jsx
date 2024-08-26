import React from "react";
import WhiteTypography from "../../components/WhiteTypography";
import { Link, Stack } from "@mui/material";

const Downloadables = (files) => {
  return (
    <>
      {files?.length > 0 &&
        (<WhiteTypography variant="subtitle2" sx={{ fontStyle: "italic" }}>
          Downloadables:
        </WhiteTypography>)(
          <Stack direction="row" flexWrap="wrap" spacing={3} ml={2} my="0">
            {files?.map((file, index) => (
              <Link
                key={index}
                to={file?.link}
                target="_blank"
                rel="noreferrer"
              >
                <WhiteTypography
                  variant="subtitle2"
                  sx={{
                    fontStyle: "italic",
                    ...localStyles.linkHover,
                  }}
                >
                  {file?.text}
                </WhiteTypography>
              </Link>
            ))}
          </Stack>
        )}
    </>
  );
};

export default Downloadables;

const localStyles = {
  linkHover: {
    "&:hover": {
      color: "primary.special",
    },
  },
};
