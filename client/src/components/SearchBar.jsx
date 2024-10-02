import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  const onClickHandler = () => {
    const donateConfirmed = window.confirm(
      `Sorry, 😞 feature not yet implemented. \nDev run out of motivation.💸💸💸\nHelp motivate by donating some funds. 🙏🏻🙏🏻🙏🏻\nClick here to Donate😊`
    );

    if (donateConfirmed) {
      window.open("https://www.linkedin.com/in/robin-mon-miranda/", "_blank");
    }
  };

  return (
    <Stack spacing={1} direction="row" width="100%" alignItems="center">
      <TextField
        id="search-bar"
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={localStyles.tf}
      />
      <IconButton sx={localStyles.btn} onClick={onClickHandler}>
        <SearchRoundedIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;

const localStyles = {
  tf: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: (theme) => theme.palette.black.main, // Outline color
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: (theme) => theme.palette.primary.main, // Outline color when hovered
      },
    },
    "& .MuiInputBase-input": {
      color: (theme) => theme.palette.black.light, // Text color // Text color inside the TextField
    },
  },
  btn: {
    color: (theme) => theme.palette.black.main,
    "&:hover": {
      backgroundColor: (theme) => theme.palette.black.dark,
      color: (theme) => theme.palette.primary.main,
    },
  },
};
