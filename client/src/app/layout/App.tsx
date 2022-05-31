import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Catalog } from "../../features/catalog/Catalog";
import { Header } from "./Header";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#eaeaea",
      },
    },
  });

  const handleThemeSwitch = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleThemeSwitch={handleThemeSwitch} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
};

export default App;
