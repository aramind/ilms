import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";

const SimpleCheckBox = ({ label }) => {
  // Initialize state with the value from localStorage, default to false if not set
  const [checked, setChecked] = useState(
    localStorage.getItem("persist") === "false" ? false : true
  );

  // Update localStorage whenever the checkbox value changes
  useEffect(() => {
    localStorage.setItem("persist", checked);
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box width={1} textAlign="left">
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
      />
    </Box>
  );
};

export default SimpleCheckBox;
