import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        sx={{
          height: 140,
          objectFit: "contain",
          bgcolor: "grey.100",
        }}
        image={product.pictureUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography>{product.name}</Typography>
        <Typography
          variant="body2"
          color="grey.700"
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {product.brand}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
};
