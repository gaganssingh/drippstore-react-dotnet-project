import { useState, useEffect } from "react";
import { agent } from "../../app/api";
import { Product } from "../../app/models/product";
import { ProductList } from "./ProductList";
import { LoadingSpinner } from "../../app/layout/LoadingSpinner";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    agent.Catalog.allProducts()
      .then((products) => setProducts(products))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading produts catalog" />;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
