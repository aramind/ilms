import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ControlledRGroup = ({ name, direction, values }) => {
  const { control } = useFormContext();

  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        // defaultValue={task.action || ""}
        render={({ field }) => (
          <RadioGroup row={direction === "row" ? "row" : "column"} {...field}>
            {values?.map((value) => (
              <FormControlLabel
                value={value}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default ControlledRGroup;
