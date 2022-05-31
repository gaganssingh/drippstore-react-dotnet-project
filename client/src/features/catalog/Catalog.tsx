import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import { ProductList } from "./ProductList";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
