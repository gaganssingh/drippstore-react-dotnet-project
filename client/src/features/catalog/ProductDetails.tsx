import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { agent } from "../../app/api";
import { NotFound } from "../../app/errors/NotFound";
import { Product } from "../../app/models/product";

export const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setLoading(true);
    agent.Catalog.productDetails(+id)
      .then((product) => setProduct(product))
      .catch(console.error);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!product) {
    return <NotFound message="Product not found" />;
  }

  return (
    <Grid container spacing={6}>
      {/* LEFT SIDE */}
      <Grid item xs={8}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid>

      {/* RIGHT SIDE */}
      <Grid item xs={4}>
        <Typography variant="overline">{product.type}</Typography>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="subtitle2" sx={{ color: "grey.500" }}>
          {product.brand}
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2">
          In Stock: {product.quantityInStock}
        </Typography>
      </Grid>
    </Grid>
  );
};
