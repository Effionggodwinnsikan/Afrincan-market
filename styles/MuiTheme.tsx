import { createTheme } from "@mui/material/styles";

export const Colors = {
  primaryTxt: "#202125",
  primaryBtn: "#1FA9E4",
  herobg: "#cbe1ad",
  placeholder: "#B3B3B5",
  inputTxt: "#505154",
};


export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primaryTxt,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "omnes san-serif",
    },
  },
});
