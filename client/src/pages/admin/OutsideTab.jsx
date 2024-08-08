import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import WhiteTypography from "../../components/WhiteTypography";

const outsideTabs = [
  { text: "Courses", component: "Courses" },
  { text: "Users", component: "Users" },
];
const OutsideTab = () => {
  const [selected, setSelected] = useState(0);

  const handleChange = (e, newValue) => {
    setSelected(newValue);
  };
  return (
    <Box width="100%" borderRadius="10px">
      <Tabs
        value={selected}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="none"
      >
        {outsideTabs?.map((tab, index) => (
          <Tab
            disableRipple
            sx={{
              bgcolor:
                selected === index
                  ? (theme) => theme.palette.white.main
                  : (theme) => theme.palette.black.main,
            }}
            key={index}
            label={
              <Typography
                color={
                  selected === index
                    ? (theme) => theme.palette.primary.dark
                    : (theme) => theme.palette.white.main
                }
                fontWeight={selected === index && "bold"}
              >
                {tab?.text}
              </Typography>
            }
            value={index}
          />
        ))}
      </Tabs>
      {outsideTabs?.map(
        (tab, index) =>
          selected === index && (
            <Box key={index}>
              <WhiteTypography>{tab?.component}</WhiteTypography>
            </Box>
          )
      )}
    </Box>
  );
};

export default OutsideTab;
