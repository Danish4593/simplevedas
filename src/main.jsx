import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './index.css';

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create custom theme
const theme = createTheme({
  typography : {
    fontFamily:[
      '"Roboto"',
      '"Open Sans"',
      'ui-sans-serif',
      'system-ui',
      'sans-serif',
    ]
  },
  palette: {
    primary: {
      main: "#FFC13C", // your custom primary color
    },
    secondary: {
      main: "#2f2f2f", // optional
    },
    warning : {
      main : '#800000'
    }
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
