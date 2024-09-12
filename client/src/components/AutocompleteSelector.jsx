import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const AutocompleteSelector = ({ value, setValue, options, label = "" }) => {
  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      options={options}
      getOptionLabel={(option) => {
        if (option?.title || option?.acronym) {
          return `${option?.title || ""} (${option?.acronym || ""})`;
        } else {
          return "";
        }
      }}
      // isOptionEqualToValue={(option, value) => option?._id === value?._id}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          variant="outlined"
          placeholder="Type here to select.."
        />
      )}
    />
  );
};

export default AutocompleteSelector;
