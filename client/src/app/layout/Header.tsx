import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4, bgcolor: "grey.800" }}>
      <Toolbar>
        <Typography variant="h6">dripp</Typography>
      </Toolbar>
    </AppBar>
  );
};
