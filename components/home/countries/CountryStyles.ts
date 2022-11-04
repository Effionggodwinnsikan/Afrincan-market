import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../../styles/MuiTheme";

export const CountryCard = styled(Card)(() => ({
  ".MuiCard-root ": {
    padding: "1rem !important",
  },
  //   ".MuiInput-input::placeholder": {
  //     color: Colors.placeholder,
  //     fontSize: "1rem",
  //     fontWeight: "400",
  //   },
}));
