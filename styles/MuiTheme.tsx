import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "",
  primaryBtn: "#1FA9E4",
  herobg: "#cbe1ad",
  placeholder: "#B3B3B5",
  inputTxt: "#505154",
};


export const theme = createTheme({
  palette: {
    primary: {
      main: "#F6B01E",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Hind, sans-serif",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        size: "large",
        color: "primary",
        variant: "contained",

      },
      styleOverrides: {
        containedPrimary: {
          background: "#F6B01E !important",
          color: "#fff",
          fontWeight: 700,
          textTransform: "none",

          ":hover": {
            background: "#E4811C !important",
            color: "#fff !important",
          },
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        elevation: 0,
        square: true,
      },
    },
  },
});
