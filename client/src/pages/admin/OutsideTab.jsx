import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import WhiteTypography from "../../components/WhiteTypography";
import InsideTab from "./InsideTab";

const outsideTabs = [
  { text: "Courses", subTabs: "courses" },
  { text: "Users", subTabs: "users" },
];
const OutsideTab = () => {
  const [selected, setSelected] = useState(0);

  const handleChange = (e, newValue) => {
    setSelected(newValue);
  };
  return (
    <Box width="100%">
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
                variant="h6"
                color={
                  selected === index
                    ? (theme) => theme.palette.primary
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
              <InsideTab subTabs={tab?.subTabs} />
            </Box>
          )
      )}
    </Box>
  );
};

export default OutsideTab;
