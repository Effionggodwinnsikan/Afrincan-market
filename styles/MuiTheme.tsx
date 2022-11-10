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
          background: "#cdaa00 !important",
          color: '#000',
          fontWeight:700,
         
          ":hover": {
            background: "#9c8204 !important",
          },
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        elevation: 0,
        square:true
        
      }
    }
    
  },
});
