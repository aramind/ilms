import { createTheme } from "@mui/material";

const COLORS = {
  primary: {
    darkest: "#044E43",
    dark: "#046254",
    main: "#058572",
    light: "#22D1AE",
    lightest: "#AAEEE0",
    special: "#1EEFA4",
  },
  secondary: {
    dark: "#CCA114",
    main: "#E9BB1D",
    light: "#F2D77D",
    lightest: "#F8E8B5",
  },
  black: {
    darkest: "#0D0D15",
    dark: "#1E1C29",
    main: "#3D4655",
    light: "#717F98",
    lightest: "#A9B2C0",
  },
  white: {
    darkest: "#C2C2C2",
    dark: "#D6D6D6",
    main: "#E0E0E0",
    light: "#F5F5F5",
  },
};

// theme
const greenTheme = createTheme({
  palette: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    black: COLORS.black,
    white: COLORS.white,
  },
  typography: {
    fontFamily: `"Nunito Sans", "Roboto", "Barlow Condensed", sans-serif`,
    barlow: `"Barlow Condensed", sans-serif`,
    nunito: `"Nunito Sans", sans-serif`,
    poppins: `"Poppins", sans-serif`,
    roboto: `"Roboto", sans-serif`,
    white: {
      color: COLORS.white.main,
    },
    body1: {
      fontSize: "0.9rem",
      [`@media (min-width:600px)`]: {
        fontSize: "0.9rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1rem",
      },
    },
    subtitle2: {
      fontSize: "0.8rem",
      [`@media (min-width:960px)`]: {
        fontSize: "0.9rem",
      },
    },
    h6: {
      fontSize: "1.1rem",
      [`@media (min-width:600px)`]: {
        fontSize: "1.1rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.3rem",
      },
    },
    h5: {
      fontSize: "1.3rem",
      [`@media (min-width:600px)`]: {
        fontSize: "1.3rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      [`@media (min-width:600px)`]: {
        fontSize: "1.5rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "2rem",
      },
    },
  },
});

export default greenTheme;
