import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
 
    
  },
});
