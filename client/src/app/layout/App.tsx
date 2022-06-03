import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AboutPage } from "../../features/about/AboutPage";
import { Catalog } from "../../features/catalog/Catalog";
import { ProductDetails } from "../../features/catalog/ProductDetails";
import { ContactPage } from "../../features/contact/ContactPage";
import { HomePage } from "../../features/home/HomePage";
import { Header } from "./Header";
import { ServerError } from "../errors/ServerError";
import { NotFound } from "../errors/NotFound";
import "react-toastify/dist/ReactToastify.min.css";

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
      <ToastContainer
        position="top-right"
        theme={darkMode ? "dark" : "light"}
      />
      <CssBaseline />
      <Header handleThemeSwitch={handleThemeSwitch} />
      <Container>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/catalog/:id" component={ProductDetails} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/server-error" component={ServerError} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
