import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const DEFAULT_THEME = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
      contrastText: '#fff',
    },
    secondary: {
      main: "#673ab7",
      light: "#9a67ea",
      dark: "#320b86",
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#E1E2E1",
    },
  },
});

export const PAPER_THEME = createTheme({
    palette: {
        mode: "light",
        primary: {
          main: "#212121",
          light: "#484848",
          dark: "#000000",
          contrastText: '#000',
        },
        secondary: {
          main: "#673ab7",
          light: "#9a67ea",
          dark: "#320b86",
          contrastText: '#fff',
        },
        error: {
          main: red.A400,
        },
        background: {
          default: "#E1E2E1",
        },
      },
});
