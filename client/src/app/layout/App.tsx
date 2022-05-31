import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route } from "react-router-dom";
import { AboutPage } from "../../features/about/AboutPage";
import { Catalog } from "../../features/catalog/Catalog";
import { ProductDetails } from "../../features/catalog/ProductDetails";
import { ContactPage } from "../../features/contact/ContactPage";
import { HomePage } from "../../features/home/HomePage";
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
        <Route path="/" exact component={HomePage} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
