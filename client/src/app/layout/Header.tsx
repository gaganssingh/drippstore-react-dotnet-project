import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface HeaderProps {
  handleThemeSwitch: () => void;
}

const navLinks = [
  { title: "shop", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
  { title: "login", path: "/login" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "grey.200",
  },
};

export const Header = ({ handleThemeSwitch }: HeaderProps) => {
  return (
    <AppBar
      position="static"
      sx={{ mb: 4, bgcolor: "grey.800" }}
      enableColorOnDark
    >
      <Toolbar>
        {/* LOGO */}
        <Typography variant="h6" component={Link} to="/" sx={navStyles}>
          dripp
        </Typography>

        {/* NAV LINKS */}
        <List sx={{ display: "flex", ml: "auto" }}>
          {navLinks.map(({ title, path }) => (
            <ListItem key={title} component={NavLink} to={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        {/* CART ICON */}
        <IconButton size="large" sx={{ color: "inherit" }}>
          <Badge badgeContent={4} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        {/* DARK MODE TOGGLE */}
        <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} />
      </Toolbar>
    </AppBar>
  );
};
