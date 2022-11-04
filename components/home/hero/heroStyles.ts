import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../../styles/MuiTheme";

export const SearchInput = styled(TextField)(() => ({
  ".css-mf70w6-MuiInputBase-root-MuiFilledInput-root ": {
    color: Colors.inputTxt,
    fontSize: "1rem",
    background: "#fff",
    border: "2px solid rgba(32, 33, 37, 0.12)",
    // paddingInlineStart: "3.125rem",
    borderRadius: "0.5rem",
    lineHheight: "1.5rem",
    // outline: "none",
  },
  ".MuiInput-input::placeholder": {
    color: Colors.placeholder,
    fontSize: "1rem",
    fontWeight: "400",
  },
}));