import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme,
} from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import IstosRouter from "./router";
import { AppProvider } from "./context/provider";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#a64d79",
    },
    secondary: {
      main: "#757575",
    },
  },
});

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 1000 ? false : true
  );

  const handleResize = (): boolean => {
    if (window.innerWidth > 1000) {
      setIsMobile(false);
      return false;
    } else {
      setIsMobile(true);
      return true;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <IstosRouter isMobile={isMobile} />
        </AppProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
