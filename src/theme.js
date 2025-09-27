import { createTheme } from "@mui/material/styles";
import '@fontsource/roboto';
import '@fontsource/open-sans';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Open Sans"',
      'ui-sans-serif',
      'system-ui',
      'sans-serif',
    ].join(","),
  },
  h2: {
      fontSize: "45px",
      fontWeight: 300,
      marginBottom: "15px",
    },
  p :  {
    fontFamily: "Open Sans",
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "31px",
      textAlign : "justify"
},
  palette: {
    primary: { main: "#FFC13C" },
    secondary: { main: "#2f2f2f" },
    warning: { main: "#800000" },
  },
});

export default theme;
