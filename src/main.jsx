import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './index.css';

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC13C", // your custom primary color
    },
    secondary: {
      main: "#000000", // optional
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
