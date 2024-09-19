import { FormControl, MenuItem } from "@mui/material";
import React from "react";

const Select = ({
  selectProps,
  value,
  onChange,
  options = [],
  //   sx = { m: 1, minWidth: "100px", width: "100%" },
  size = "small",
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: "100px", width: "100%" }} size={size}>
      <Select {...selectProps} value={value} onChange={onChange}>
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Select;
