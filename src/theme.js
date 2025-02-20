import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Black & white dark mode
    primary: {
      main: "#A67B5B", // Brown pastel
    },
    background: {
      default: "#121212", // Dark mode background
      paper: "#1E1E1E", // Card background
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#B0B0B0", // Light gray text
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: "bold" },
    h6: { fontSize: "1.2rem", fontWeight: "normal" },
  },
});

export default theme;
