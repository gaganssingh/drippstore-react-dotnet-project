import { List } from "@mui/material";
import { Product } from "../../app/models/product";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
};