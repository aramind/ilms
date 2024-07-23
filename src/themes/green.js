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
    dark: "#D6DD6",
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
  },
});

export default greenTheme;
