import { useState, useEffect } from "react";
import { agent } from "../../app/api";
import { Product } from "../../app/models/product";
import { ProductList } from "./ProductList";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.allProducts()
      .then((products) => setProducts(products))
      .catch(console.error);
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
