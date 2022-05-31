import { AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface HeaderProps {
  handleThemeSwitch: () => void;
}

export const Header = ({ handleThemeSwitch }: HeaderProps) => {
  return (
    <AppBar
      position="static"
      sx={{ mb: 4, bgcolor: "grey.800" }}
      enableColorOnDark
    >
      <Toolbar>
        <Typography variant="h6">dripp</Typography>
        <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} />
      </Toolbar>
    </AppBar>
  );
};
