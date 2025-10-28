import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5", // blue
    },
    secondary: {
      main: "#FDD835", // yellow
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
