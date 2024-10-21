import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import ManageCourse from "./ManageCourse";
import AddAdmin from "./AddAdmin";
import ManageAdmin from "./ManageAdmin";
import ManageStudent from "./ManageStudent";
import AddCourse from "./add-course/AddCourse";

const subTabsList = {
  courses: [
    { text: "manage courses", component: <ManageCourse /> },
    { text: "add course", component: <AddCourse /> },
  ],
  users: [
    { text: "manage students", component: <ManageStudent /> },
    { text: "add admin", component: <AddAdmin /> },
    { text: "manage admin", component: <ManageAdmin /> },
  ],
};
const InsideTab = ({ subTabs }) => {
  const [selected, setSelected] = useState(0);

  const handleChange = (e, newValue) => {
    setSelected(newValue);
  };

  const tabs = subTabsList[subTabs];

  return (
    <Box width={1}>
      <Tabs
        value={selected}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        // variant="fullWidth"
      >
        {tabs?.map((tab, index) => (
          <Tab
            disableRipple
            key={index}
            label={
              <Typography fontWeight={selected === index && "bold"}>
                {tab?.text}
              </Typography>
            }
            value={index}
          />
        ))}
      </Tabs>
      {tabs?.map(
        (tab, index) =>
          selected === index && (
            <Box key={index} p={1}>
              {tab?.component}
            </Box>
          )
      )}
    </Box>
  );
};

export default InsideTab;
