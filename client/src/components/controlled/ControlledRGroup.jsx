import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const ControlledRGroup = ({ name, direction, values }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      // defaultValue={task.action || ""}
      render={({ field }) => (
        <RadioGroup row={direction === "row"} {...field}>
          {values?.map((value) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={value}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default ControlledRGroup;
