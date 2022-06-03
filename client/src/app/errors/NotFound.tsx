import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NotFoundProps {
  message?: string;
}

export const NotFound = ({ message }: NotFoundProps) => {
  return (
    <Container component={Paper} sx={{ h: 400 }}>
      <Typography variant="h3" gutterBottom>
        {message ? message : "404 Page not found"}
      </Typography>
      <Divider />
      <Button
        component={Link}
        to="/catalog"
        variant="contained"
        size="large"
        sx={{ m: "20px" }}
      >
        Back to store
      </Button>
    </Container>
  );
};
